/* comm.js — Módulo 19: Comunicação clínica.
   Navegação por função (anamnese, explicar, tranquilizar, más notícias, aconselhar),
   ouvir (TTS) e praticar fala (STT). Frameworks SOCRATES/ICE/SPIKES/teach-back embutidos.
   Frases entram no SRS. */
(function () {
  'use strict';
  var el = UI.el;
  var DECK = 'comm';

  function data() { return window.CLINICALCOMM || []; }

  // Agrupamento amigável por função clínica → fases incluídas.
  var GROUPS = [
    { key:'anamnese', icon:'🩺', title:'Anamnese', desc:'Abertura, SOCRATES, ICE, história', phases:['opening','HPC','ICE','PMH','DH','FHx','SHx','structure'] },
    { key:'exame', icon:'✋', title:'Exame físico', desc:'Consentir, instruir, preservar a dignidade', phases:['examination'] },
    { key:'explicar', icon:'💬', title:'Explicar', desc:'Diagnóstico e plano; teach-back', phases:['explanation'] },
    { key:'empatia', icon:'❤️', title:'Tranquilizar e empatia', desc:'Validar, reasseguramento honesto', phases:['empathy'] },
    { key:'masnoticias', icon:'🕊️', title:'Más notícias (SPIKES)', desc:'Dar más notícias com humanidade', phases:['bad-news'] },
    { key:'aconselhar', icon:'📋', title:'Aconselhar e encerrar', desc:'Medicação, estilo de vida, safety-netting', phases:['counselling','safety-netting','closing'] },
    { key:'profissional', icon:'🏥', title:'Comunicação profissional', desc:'Handover (SBAR) e documentação (SOAP)', phases:['handover','documentation'] },
    { key:'dificeis', icon:'⚖️', title:'Situações difíceis', desc:'Paciente irritado, temas sensíveis, remoto', phases:['difficult','sensitive','remote'] }
  ];

  function groupPhrases(g) {
    return data().filter(function (p) { return g.phases.indexOf(p.phase) >= 0; });
  }

  function phraseRow(p) {
    var row = el('div', { class: 'phrase' });
    var top = el('div', { class: 'phrase-top' }, [
      el('div', { class: 'phrase-en' }, p.en),
      p.audio ? UI.audioBtn(p.en) : el('span', { class: 'muted small' }, '(prontuário)')
    ]);
    var meta = el('div', { class: 'phrase-meta' }, [
      el('span', { class: 'muted' }, p.pt),
      p.framework ? UI.pill(p.framework, 'fw') : null,
      p.register === 'professional' ? UI.pill('prontuário', 'prof') : null
    ]);
    row.appendChild(top);
    row.appendChild(meta);
    if (p.audio && STT.available()) {
      var practice = el('div', { class: 'practice hidden' });
      var btn = el('button', { class: 'btn small', onClick: function () { doPractice(p, practice, btn); } }, '🎤 Praticar fala');
      row.appendChild(btn);
      row.appendChild(practice);
    }
    return row;
  }

  function doPractice(p, out, btn) {
    out.classList.remove('hidden');
    UI.mount(out, el('div', { class: 'muted' }, 'Ouvindo… fale a frase em inglês.'));
    btn.disabled = true;
    STT.listen({
      lang: 'en-US',
      onResult: function (text) {
        btn.disabled = false;
        if (!text) { UI.mount(out, el('div', { class: 'no' }, 'Não captei nada. Tente de novo.')); return; }
        var sim = TextMatch.similarity(text, p.en);
        var pct = Math.round(sim * 100);
        var cls = pct >= 75 ? 'ok' : (pct >= 45 ? 'warn' : 'no');
        Progress.recordResult('comm', pct >= 60);
        Progress.addXP(pct >= 60 ? 6 : 2);
        var diff = TextMatch.diff(text, p.en);
        var diffEl = el('div', { class: 'diff' }, diff.map(function (w) {
          return el('span', { class: 'w ' + w.status }, w.word + ' ');
        }));
        UI.mount(out, [
          el('div', { class: cls }, 'Você disse: “' + text + '” — semelhança ' + pct + '%'),
          diffEl
        ]);
      },
      onError: function () { btn.disabled = false; UI.mount(out, el('div', { class: 'no' }, 'Microfone indisponível ou permissão negada.')); }
    });
  }

  function browse(mount, key) {
    var g = GROUPS.find(function (x) { return x.key === key; });
    if (!g) return menu(mount);
    var phrases = groupPhrases(g);
    var list = el('div', { class: 'card' }, phrases.map(phraseRow));
    UI.mount(mount, [
      UI.backLink('comm', 'Comunicação'),
      UI.sectionHeader(g.icon + ' ' + g.title, g.desc + ' · ' + phrases.length + ' frases'),
      UI.speedSelector(),
      STT.available() ? null : el('div', { class: 'note' }, 'O reconhecimento de fala (STT) não está disponível neste navegador; você ainda pode ouvir e repetir.'),
      list
    ]);
  }

  function menu(mount) {
    var cards = Progress.getCards(DECK);
    var due = SRS.dueCount(cards, data().map(function (p) { return p.id; }));
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('Comunicação clínica', 'A linguagem de cada função — não só palavras isoladas'),
      el('div', { class: 'stat-row' }, [
        UI.pill(data().length + ' frases', 'info'),
        UI.pill(due + ' para revisar', due ? 'warn' : 'ok')
      ]),
      el('div', { class: 'row gap wrap' }, [
        el('a', { class: 'btn primary', href: '#/comm/review' }, '🃏 Flashcards (SRS) — ' + due),
      ]),
      el('div', { class: 'menu-grid' }, GROUPS.map(function (g) {
        return el('a', { class: 'menu-card', href: '#/comm/browse/' + g.key }, [
          el('div', { class: 'mc-icon' }, g.icon),
          el('div', {}, [ el('div', { class: 'mc-title' }, g.title), el('div', { class: 'mc-sub' }, g.desc + ' · ' + groupPhrases(g).length) ])
        ]);
      }))
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.comm = function (mount, params) {
    var action = params[0];
    if (action === 'review') {
      Common.review(mount, {
        deck: DECK, ids: data().map(function (p) { return p.id; }),
        title: 'Flashcards — Comunicação', subtitle: 'Veja o português e recorde a frase em inglês', backTo: 'comm',
        buildFront: function (id) {
          var p = data().find(function (x) { return x.id === id; });
          return el('div', {}, [ el('div', { class: 'muted' }, p.function), el('p', { class: 'flash-prompt' }, p.pt), p.framework ? UI.pill(p.framework, 'fw') : null ]);
        },
        buildBack: function (id) {
          var p = data().find(function (x) { return x.id === id; });
          return el('div', {}, [ el('p', { class: 'flash-answer' }, [ p.en, ' ', p.audio ? UI.audioBtn(p.en) : null ]) ]);
        }
      });
    } else if (action === 'browse') {
      browse(mount, params[1]);
    } else {
      menu(mount);
    }
  };
})();
