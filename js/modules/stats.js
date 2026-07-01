/* stats.js — Estatísticas e progresso.
   Domínio de vocabulário (ativo/passivo), acerto por módulo, evolução por sub-teste OET,
   placar OET simulado vs metas ECFMG, ofensiva, XP e conquistas. */
(function () {
  'use strict';
  var el = UI.el;

  function last7() {
    var daily = Progress.daily();
    var out = [];
    var d = new Date();
    for (var i = 6; i >= 0; i--) {
      var dd = new Date(d); dd.setDate(d.getDate() - i);
      var k = Progress.todayKey(dd);
      out.push({ key: k, label: ['D','S','T','Q','Q','S','S'][dd.getDay()], xp: (daily[k] && daily[k].xp) || 0 });
    }
    return out;
  }

  function deckMastery(deck) {
    var cards = Store.get('srs', {})[deck] || {};
    var ids = Object.keys(cards);
    var learned = ids.filter(function (id) { return cards[id].reps >= 2; }).length;
    var seen = ids.length;
    return { seen: seen, learned: learned };
  }

  function moduleRow(key, label) {
    var m = Progress.moduleStats(key);
    var pct = m.attempts ? Math.round(100 * m.correct / m.attempts) : 0;
    return el('div', { class: 'mod-stat' }, [
      el('div', { class: 'ms-label' }, label),
      UI.progressBar(pct, label),
      el('div', { class: 'ms-val' }, m.attempts ? (pct + '% · ' + m.attempts + ' tent.') : '—')
    ]);
  }

  function render(mount) {
    var streak = Progress.getStreak();
    var best = Store.get('bestStreak', 0);
    var xp = Progress.totalXP();
    var days = last7();
    var maxXp = Math.max(1, Math.max.apply(null, days.map(function (d) { return d.xp; })));
    var vocab = deckMastery('vocab');
    var usmle = deckMastery('usmle');
    var comm = deckMastery('comm');
    var bestMock = Progress.bestMock();
    var ECFMG = Badges.ECFMG;

    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('Estatísticas', 'Seu progresso no inglês médico'),
      el('div', { class: 'stat-cards' }, [
        el('div', { class: 'stat-card' }, [ el('div', { class: 'sc-num' }, '🔥 ' + streak), el('div', { class: 'sc-lbl' }, 'dias de ofensiva' ) ]),
        el('div', { class: 'stat-card' }, [ el('div', { class: 'sc-num' }, '⭐ ' + xp), el('div', { class: 'sc-lbl' }, 'XP total') ]),
        el('div', { class: 'stat-card' }, [ el('div', { class: 'sc-num' }, '🏆 ' + best), el('div', { class: 'sc-lbl' }, 'melhor ofensiva') ])
      ]),

      el('div', { class: 'card' }, [
        el('h3', {}, 'Atividade (7 dias)'),
        el('div', { class: 'bar-chart' }, days.map(function (d) {
          return el('div', { class: 'bar-col' }, [
            el('div', { class: 'bar', style: { height: Math.round(4 + 76 * d.xp / maxXp) + 'px' }, title: d.xp + ' XP' }),
            el('div', { class: 'bar-lbl' }, d.label)
          ]);
        }))
      ]),

      el('div', { class: 'card' }, [
        el('h3', {}, 'Domínio de vocabulário'),
        masteryRow('Vocabulário médico', vocab, (window.MEDVOCAB || []).length),
        masteryRow('Termos USMLE', usmle, (window.USMLE_CLINICAL || []).filter(function (x) { return x.kind === 'high-yield-term'; }).length),
        masteryRow('Comunicação clínica', comm, (window.CLINICALCOMM || []).length),
        el('div', { class: 'muted small' }, 'Ativo = revisado ≥ 2 vezes (memória consolidada). Passivo = já visto.')
      ]),

      el('div', { class: 'card' }, [
        el('h3', {}, 'Acerto por módulo'),
        moduleRow('vocab', 'Vocabulário'),
        moduleRow('comm', 'Comunicação'),
        moduleRow('listening', 'Listening'),
        moduleRow('reading', 'Reading'),
        moduleRow('speaking', 'Speaking'),
        moduleRow('usmle', 'USMLE clínico')
      ]),

      el('div', { class: 'card' }, [
        el('h3', {}, 'Placar OET simulado (metas ECFMG)'),
        bestMock ? el('div', {}, [
          ecfmgBar('Listening', bestMock.listening, ECFMG.listening),
          ecfmgBar('Reading', bestMock.reading, ECFMG.reading),
          ecfmgBar('Speaking', bestMock.speaking, ECFMG.speaking),
          ecfmgBar('Writing', bestMock.writing, ECFMG.writing)
        ]) : el('p', { class: 'muted' }, ['Faça um ', el('a', { href: '#/mock' }, 'Simulado OET'), ' para ver seu placar 0–500 por skill.'])
      ]),

      el('div', { class: 'card' }, [
        el('h3', {}, 'Conquistas'),
        el('div', { class: 'badge-grid' }, Badges.list().map(function (b) {
          return el('div', { class: 'badge ' + (b.unlocked ? 'on' : 'off') }, [
            el('div', { class: 'badge-icon' }, b.unlocked ? b.icon : '🔒'),
            el('div', { class: 'badge-title' }, b.title),
            el('div', { class: 'badge-desc' }, b.desc)
          ]);
        }))
      ])
    ]);
  }

  function masteryRow(label, m, total) {
    var pct = total ? Math.round(100 * m.learned / total) : 0;
    return el('div', { class: 'mod-stat' }, [
      el('div', { class: 'ms-label' }, label),
      UI.progressBar(pct),
      el('div', { class: 'ms-val' }, m.learned + ' ativos / ' + m.seen + ' vistos / ' + total)
    ]);
  }

  function ecfmgBar(label, score, target) {
    score = score || 0;
    var pct = Math.round(100 * score / 500);
    var met = score >= target;
    return el('div', { class: 'ecfmg-bar' }, [
      el('div', { class: 'eb-head' }, [ el('span', {}, label + ' — ' + Badges.grade(score)), el('span', { class: met ? 'ok' : 'no' }, score + ' / meta ' + target) ]),
      el('div', { class: 'eb-track' }, [
        el('div', { class: 'eb-fill ' + (met ? 'met' : ''), style: { width: pct + '%' } }),
        el('div', { class: 'eb-target', style: { left: (target / 5) + '%' }, title: 'meta ECFMG' })
      ])
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.stats = function (mount) { render(mount); };
})();
