/* home.js — Painel inicial do grupo "Inglês Médico (USMLE + OET)".
   Atalhos para os módulos 18–25, ofensiva, XP e revisões devidas. */
(function () {
  'use strict';
  var el = UI.el;

  function dueFor(deck, ids) { return SRS.dueCount(Progress.getCards(deck), ids); }

  function render(mount) {
    var streak = Progress.getStreak();
    var xp = Progress.totalXP();
    var vocabDue = dueFor('vocab', (window.MEDVOCAB || []).map(function (t) { return t.id; }));
    var commDue = dueFor('comm', (window.CLINICALCOMM || []).map(function (t) { return t.id; }));
    var usmleDue = dueFor('usmle', (window.USMLE_CLINICAL || []).filter(function (x) { return x.kind === 'high-yield-term'; }).map(function (t) { return t.id; }));
    var totalDue = vocabDue + commDue + usmleDue;

    var modules = [
      { n:18, icon:'🧠', title:'Vocabulário médico', sub:'Técnico ↔ leigo ↔ PT · IPA · SRS', route:'vocab' },
      { n:19, icon:'💬', title:'Comunicação clínica', sub:'Anamnese, explicar, más notícias', route:'comm' },
      { n:20, icon:'🎧', title:'OET Listening', sub:'Consultas + note completion', route:'listening' },
      { n:21, icon:'📖', title:'OET Reading', sub:'Part A cronometrada + MCQ', route:'reading' },
      { n:22, icon:'✉️', title:'OET Writing', sub:'Case notes → carta + IA opcional', route:'writing' },
      { n:23, icon:'🗣️', title:'OET Speaking', sub:'Role-plays: escolhas + voz (IA)', route:'speaking' },
      { n:24, icon:'⚕️', title:'USMLE / clínico', sub:'Enunciados, SOAP, abreviações', route:'usmle' },
      { n:25, icon:'🏁', title:'Simulado OET', sub:'0–500 por skill · meta ECFMG', route:'mock' }
    ];

    UI.mount(mount, [
      el('div', { class: 'hero' }, [
        el('div', {}, [
          el('h1', { class: 'hero-title' }, 'Inglês Médico'),
          el('p', { class: 'hero-sub' }, 'Preparação USMLE + OET Medicine · interface em PT-BR, alvo em inglês')
        ]),
        el('div', { class: 'hero-stats' }, [
          UI.pill('🔥 ' + streak + ' dias', 'streak'),
          UI.pill('⭐ ' + xp + ' XP', 'xp')
        ])
      ]),

      totalDue > 0 ? el('div', { class: 'card cta' }, [
        el('div', {}, [ el('strong', {}, '📌 ' + totalDue + ' item(s) para revisar hoje'), el('div', { class: 'muted small' }, 'A repetição espaçada fixa o vocabulário na memória.') ]),
        el('div', { class: 'row gap wrap' }, [
          vocabDue ? el('a', { class: 'btn primary small', href: '#/vocab/review' }, 'Vocabulário (' + vocabDue + ')') : null,
          commDue ? el('a', { class: 'btn small', href: '#/comm/review' }, 'Comunicação (' + commDue + ')') : null,
          usmleDue ? el('a', { class: 'btn small', href: '#/usmle/review' }, 'USMLE (' + usmleDue + ')') : null
        ])
      ]) : el('div', { class: 'card muted' }, '✅ Sem revisões pendentes agora. Explore um módulo abaixo.'),

      el('h2', { class: 'group-head' }, 'Módulos'),
      el('div', { class: 'home-grid' }, modules.map(function (m) {
        return el('a', { class: 'home-card', href: '#/' + m.route }, [
          el('div', { class: 'hc-icon' }, m.icon),
          el('div', { class: 'hc-body' }, [ el('div', { class: 'hc-title' }, m.title), el('div', { class: 'hc-sub' }, m.sub) ]),
          el('div', { class: 'hc-num' }, m.n)
        ]);
      })),

      el('div', { class: 'row gap wrap footer-links' }, [
        el('a', { class: 'btn', href: '#/stats' }, '📊 Estatísticas'),
        el('a', { class: 'btn', href: '#/settings' }, '⚙️ Configurações')
      ]),

      el('div', { class: 'muted small center offnote' }, (AI.hasKey() ? '🤖 Tutor de IA configurado. ' : '') + 'Funciona offline (PWA). O tutor de IA é opcional e online.')
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.home = function (mount) { render(mount); };
})();
