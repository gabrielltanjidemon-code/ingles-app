/* progress.js — Progresso, SRS por item, XP, ofensiva (streak),
   estatísticas por módulo/sub-teste e histórico de simulados.
   Tudo persistido no Store (offline-first). */
(function () {
  'use strict';

  function todayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /* ---- SRS: cartões por item (namespace por baralho: vocab/abbrev/comm) ---- */
  function getCards(deck) {
    var all = Store.get('srs', {});
    return all[deck] || {};
  }
  function saveCards(deck, cards) {
    Store.update('srs', function (all) { all = all || {}; all[deck] = cards; return all; }, {});
  }
  function reviewItem(deck, id, quality) {
    var all = Store.get('srs', {});
    all[deck] = all[deck] || {};
    all[deck][id] = SRS.review(all[deck][id], quality);
    Store.set('srs', all);
    logActivity(quality >= 3);
    return all[deck][id];
  }

  /* ---- Atividade diária / streak / XP ---- */
  function logActivity(correct, xp) {
    var stats = Store.get('daily', {});
    var k = todayKey();
    stats[k] = stats[k] || { reviews: 0, correct: 0, xp: 0 };
    stats[k].reviews += 1;
    if (correct) stats[k].correct += 1;
    stats[k].xp += (xp != null ? xp : (correct ? 10 : 3));
    Store.set('daily', stats);
    recomputeStreak();
    Badges.check();
  }

  function addXP(n) {
    var stats = Store.get('daily', {});
    var k = todayKey();
    stats[k] = stats[k] || { reviews: 0, correct: 0, xp: 0 };
    stats[k].xp += n;
    Store.set('daily', stats);
  }

  function totalXP() {
    var stats = Store.get('daily', {});
    return Object.keys(stats).reduce(function (s, k) { return s + (stats[k].xp || 0); }, 0);
  }

  function recomputeStreak() {
    var stats = Store.get('daily', {});
    var streak = 0;
    var d = new Date();
    // Conta dias consecutivos com atividade até hoje (ou ontem).
    if (!stats[todayKey(d)]) d.setDate(d.getDate() - 1);
    while (stats[todayKey(d)]) { streak++; d.setDate(d.getDate() - 1); }
    Store.set('streak', streak);
    var best = Store.get('bestStreak', 0);
    if (streak > best) Store.set('bestStreak', streak);
    return streak;
  }

  function getStreak() { return Store.get('streak', 0); }

  /* ---- Adaptativo (18.6): acerto por item de quiz ---- */
  function recordItemResult(key, id, correct) {
    Store.update('itemstats', function (m) {
      m = m || {};
      m[key] = m[key] || {};
      var s = m[key][id] || { a: 0, c: 0 };
      s.a += 1;
      if (correct) s.c += 1;
      m[key][id] = s;
      return m;
    }, {});
  }
  /* IDs com menor taxa de acerto (tentados ≥2 vezes, acerto < 75%), do pior ao melhor. */
  function weakItems(key, ids) {
    var m = Store.get('itemstats', {})[key] || {};
    return ids.filter(function (id) {
      var s = m[id];
      return s && s.a >= 2 && (s.c / s.a) < 0.75;
    }).sort(function (x, y) {
      return (m[x].c / m[x].a) - (m[y].c / m[y].a);
    });
  }

  /* ---- Métricas por módulo (acertos/tentativas) ---- */
  function recordResult(moduleKey, correct) {
    Store.update('modstats', function (m) {
      m = m || {};
      m[moduleKey] = m[moduleKey] || { attempts: 0, correct: 0 };
      m[moduleKey].attempts += 1;
      if (correct) m[moduleKey].correct += 1;
      return m;
    }, {});
  }
  function moduleStats(moduleKey) {
    var m = Store.get('modstats', {});
    return m[moduleKey] || { attempts: 0, correct: 0 };
  }

  /* ---- Placar OET simulado (0-500 por skill) ---- */
  function saveMock(scores) {
    // scores: { listening, reading, writing, speaking, date }
    scores.date = scores.date || Date.now();
    Store.update('mocks', function (list) { list = list || []; list.push(scores); return list; }, []);
    Badges.check();
  }
  function mockHistory() { return Store.get('mocks', []); }
  function bestMock() {
    var list = mockHistory();
    if (!list.length) return null;
    return list.reduce(function (best, m) {
      return {
        listening: Math.max(best.listening, m.listening || 0),
        reading: Math.max(best.reading, m.reading || 0),
        writing: Math.max(best.writing, m.writing || 0),
        speaking: Math.max(best.speaking, m.speaking || 0)
      };
    }, { listening: 0, reading: 0, writing: 0, speaking: 0 });
  }

  /* Marca item de conteúdo como "completado" (Listening/Reading/Writing/Speaking). */
  function markDone(moduleKey, id) {
    Store.update('done', function (d) {
      d = d || {}; d[moduleKey] = d[moduleKey] || {}; d[moduleKey][id] = Date.now(); return d;
    }, {});
  }
  function isDone(moduleKey, id) {
    var d = Store.get('done', {});
    return !!(d[moduleKey] && d[moduleKey][id]);
  }
  function doneCount(moduleKey) {
    var d = Store.get('done', {});
    return d[moduleKey] ? Object.keys(d[moduleKey]).length : 0;
  }

  window.Progress = {
    todayKey: todayKey,
    getCards: getCards, saveCards: saveCards, reviewItem: reviewItem,
    logActivity: logActivity, addXP: addXP, totalXP: totalXP,
    recomputeStreak: recomputeStreak, getStreak: getStreak,
    recordResult: recordResult, moduleStats: moduleStats,
    recordItemResult: recordItemResult, weakItems: weakItems,
    saveMock: saveMock, mockHistory: mockHistory, bestMock: bestMock,
    markDone: markDone, isDone: isDone, doneCount: doneCount,
    daily: function () { return Store.get('daily', {}); }
  };
})();
