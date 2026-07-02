/* badges.js — Gamificação: conquistas e metas (inclui metas ECFMG).
   Conquistas computadas são reavaliadas em Badges.check(); as pontuais
   (ex.: primeira carta) são liberadas por Badges.unlock(id). */
(function () {
  'use strict';

  // Metas mínimas do ECFMG (OET Medicine): L/R/S = 350, W = 300.
  var ECFMG = { listening: 350, reading: 350, speaking: 350, writing: 300 };

  function grade(score) {
    // Faixas oficiais do OET: A 450–500, B 350–440, C+ 300–340, C 200–290, D 100–190, E 0–90.
    if (score >= 450) return 'A';
    if (score >= 350) return 'B';
    if (score >= 300) return 'C+';
    if (score >= 200) return 'C';
    if (score >= 100) return 'D';
    return 'E';
  }

  var DEFS = [
    { id: 'first_steps', icon: '🚀', title: 'Primeiros passos', desc: 'Complete sua primeira revisão.',
      test: function (s) { return s.totalReviews >= 1; } },
    { id: 'streak3', icon: '🔥', title: 'Ofensiva de 3 dias', desc: '3 dias seguidos de prática.',
      test: function (s) { return s.streak >= 3; } },
    { id: 'streak7', icon: '🔥', title: 'Ofensiva de 7 dias', desc: '7 dias seguidos de prática.',
      test: function (s) { return s.streak >= 7; } },
    { id: 'vocab100', icon: '🧠', title: '100 termos médicos', desc: 'Revise 100 termos médicos.',
      test: function (s) { return s.vocabReviewed >= 100; } },
    { id: 'socrates', icon: '🩺', title: 'SOCRATES completo', desc: 'Pratique todas as frases do framework SOCRATES.',
      test: function (s) { return s.socratesDone; } },
    { id: 'first_referral', icon: '✉️', title: 'Primeira carta de referral', desc: 'Escreva sua primeira carta de encaminhamento.',
      pointwise: true },
    { id: 'roleplay_smooth', icon: '💬', title: 'Role-play sem travar', desc: 'Conclua um role-play completando todas as tarefas.',
      pointwise: true },
    { id: 'mock_all_b', icon: '🏅', title: 'Simulado grade B em tudo', desc: 'Grade B (350+) em todas as skills num simulado.',
      test: function (s) { return s.mockAllB; } },
    { id: 'ecfmg_goal', icon: '🎯', title: 'Meta ECFMG', desc: '350 em L/R/S e 300 em Writing (mínimo ECFMG).',
      test: function (s) { return s.ecfmgMet; } }
  ];

  function state() {
    var srs = Store.get('srs', {});
    var vocabCards = srs.vocab || {};
    var daily = Store.get('daily', {});
    var totalReviews = Object.keys(daily).reduce(function (a, k) { return a + (daily[k].reviews || 0); }, 0);
    var best = Progress.bestMock();
    var mockAllB = false, ecfmgMet = false;
    if (best) {
      mockAllB = best.listening >= 350 && best.reading >= 350 && best.writing >= 350 && best.speaking >= 350;
      ecfmgMet = best.listening >= ECFMG.listening && best.reading >= ECFMG.reading &&
                 best.speaking >= ECFMG.speaking && best.writing >= ECFMG.writing;
    }
    // SOCRATES: todas as frases com framework SOCRATES foram revisadas ao menos uma vez.
    var socratesDone = false;
    try {
      var commCards = srs.comm || {};
      var socIds = (window.CLINICALCOMM || []).filter(function (c) { return c.framework === 'SOCRATES'; }).map(function (c) { return c.id; });
      socratesDone = socIds.length > 0 && socIds.every(function (id) { return commCards[id]; });
    } catch (e) {}

    return {
      totalReviews: totalReviews,
      streak: Progress.getStreak(),
      vocabReviewed: Object.keys(vocabCards).length,
      socratesDone: socratesDone,
      mockAllB: mockAllB,
      ecfmgMet: ecfmgMet
    };
  }

  function unlocked() { return Store.get('badges', {}); }

  function unlock(id) {
    var u = Store.get('badges', {});
    if (u[id]) return false;
    var def = DEFS.find(function (d) { return d.id === id; });
    if (!def) return false;
    u[id] = Date.now();
    Store.set('badges', u);
    if (window.UI) UI.toast('🏆 Conquista: ' + def.title);
    return true;
  }

  function check() {
    var s = state();
    var newly = [];
    DEFS.forEach(function (d) {
      if (d.pointwise) return; // liberadas por evento
      if (d.test && d.test(s)) { if (unlock(d.id)) newly.push(d.id); }
    });
    return newly;
  }

  function list() {
    var u = unlocked();
    return DEFS.map(function (d) {
      return { id: d.id, icon: d.icon, title: d.title, desc: d.desc, unlocked: !!u[d.id], at: u[d.id] || 0 };
    });
  }

  window.Badges = {
    DEFS: DEFS, ECFMG: ECFMG, grade: grade,
    check: check, unlock: unlock, list: list, unlocked: unlocked
  };
})();
