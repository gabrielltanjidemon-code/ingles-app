/* usmle.js — Módulo 24: USMLE / inglês clínico.
   Vocabulário de alto rendimento em enunciados (Step 2 CK), abreviações em contexto,
   patient notes (SOAP) e leitura rápida de questões.
   O dicionário completo de abreviações (MEDABBREV) tem glossário, SRS e quiz próprios. */
(function () {
  'use strict';
  var el = UI.el;
  var DECK = 'usmle';
  var ABBR_DECK = 'abbrev';

  function data() { return window.USMLE_CLINICAL || []; }
  function terms() { return data().filter(function (x) { return x.kind === 'high-yield-term'; }); }
  function abbrevs() { return data().filter(function (x) { return x.kind === 'abbrev-in-context'; }); }
  function notes() { return data().filter(function (x) { return x.kind === 'patient-note'; }); }
  function abbrData() { return window.MEDABBREV || []; }

  function stemHighlight(item) {
    // Realça a ocorrência do termo no enunciado.
    var stem = item.stem_example_en || '';
    var frag = el('span', {});
    var t = (item.term || '').split(' ')[0];
    var re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*)', 'i');
    var parts = stem.split(re);
    parts.forEach(function (p, i) {
      if (re.test(p) && i % 2 === 1) frag.appendChild(el('mark', {}, p));
      else frag.appendChild(document.createTextNode(p));
    });
    return frag;
  }

  function termFront(item) {
    return el('div', {}, [
      el('div', { class: 'stem' }, [ stemHighlight(item), ' ', UI.audioBtn(item.stem_example_en) ]),
      el('div', { class: 'muted small' }, 'Qual o significado do termo em destaque?')
    ]);
  }
  function termBack(item) {
    return el('div', {}, [
      el('div', { class: 'term-line' }, [ el('span', { class: 'term-main' }, item.term), UI.audioBtn(item.term) ]),
      item.ipa ? el('div', { class: 'ipa' }, item.ipa) : null,
      el('div', { class: 'grid-2' }, [
        el('div', {}, [ el('div', { class: 'label' }, 'Leigo'), el('div', {}, item.lay || '—') ]),
        el('div', {}, [ el('div', { class: 'label' }, 'Português'), el('div', {}, item.pt || '—') ])
      ]),
      item.note_pt ? el('div', { class: 'note' }, item.note_pt) : null
    ]);
  }

  function browse(mount) {
    UI.mount(mount, [
      UI.backLink('usmle', 'Voltar'),
      UI.sectionHeader('Termos em enunciados', terms().length + ' termos de alto rendimento'),
      UI.speedSelector(),
      el('div', { class: 'card' }, terms().map(function (t) {
        return el('div', { class: 'browse-item' }, [
          el('div', {}, [ el('span', { class: 'bi-tech' }, t.term), ' ', el('span', { class: 'ipa inline' }, t.ipa || ''), UI.audioBtn(t.term), '  ·  ', el('span', { class: 'muted' }, t.pt) ]),
          el('div', { class: 'stem small' }, [ el('em', {}, stemHighlight(t)) ]),
          t.note_pt ? el('div', { class: 'muted small' }, t.note_pt) : null
        ]);
      }))
    ]);
  }

  function notesView(mount) {
    UI.mount(mount, [
      UI.backLink('usmle', 'Voltar'),
      UI.sectionHeader('Patient notes (SOAP)', 'Leitura de prontuário e abreviações em fluxo'),
      el('div', {}, notes().map(function (n) {
        return el('div', { class: 'card' }, [
          el('h4', {}, n.term),
          el('pre', { class: 'soap' }, n.stem_example_en),
          n.note_pt ? el('div', { class: 'note' }, [ el('strong', {}, 'Leitura: '), n.note_pt ]) : null
        ]);
      })),
      el('h3', { class: 'cat-head' }, 'Abreviações em contexto'),
      el('div', { class: 'card' }, abbrevs().map(function (a) {
        return el('div', { class: 'browse-item' }, [
          el('div', {}, [ el('strong', {}, a.term), '  ·  ', el('span', { class: 'muted' }, a.pt) ]),
          el('div', { class: 'stem small' }, el('em', {}, a.stem_example_en)),
          a.note_pt ? el('div', { class: 'muted small' }, a.note_pt) : null
        ]);
      }))
    ]);
  }

  function buildQuiz() {
    var pool = UI.shuffle(terms()).slice(0, 12);
    return pool.map(function (t) {
      var correct = t.pt;
      var distractors = UI.shuffle(terms().filter(function (x) { return x.id !== t.id; })).slice(0, 3).map(function (x) { return x.pt; });
      var options = UI.shuffle([correct].concat(distractors));
      return {
        prompt: el('div', {}, [ el('p', { class: 'quiz-prompt' }, 'No enunciado, o que significa o termo em destaque?'), el('div', { class: 'stem' }, [ el('em', {}, stemHighlight(t)), ' ', UI.audioBtn(t.stem_example_en) ]) ]),
        options: options, answer: options.indexOf(correct), note: t.note_pt || (t.term + ' = ' + t.pt)
      };
    });
  }

  /* ----- Abreviações (MEDABBREV): glossário, flashcards SRS e quiz ----- */
  function abbrFront(a) {
    return el('div', {}, [
      el('div', { class: 'term-line' }, [ el('span', { class: 'term-main' }, a.abbr) ]),
      el('div', { class: 'muted' }, 'contexto: ' + a.context),
      el('div', { class: 'muted small' }, 'O que significa esta abreviação?')
    ]);
  }
  function abbrBack(a) {
    return el('div', {}, [
      el('div', { class: 'grid-2' }, [
        el('div', {}, [ el('div', { class: 'label' }, 'Forma completa'), el('div', {}, a.full) ]),
        el('div', {}, [ el('div', { class: 'label' }, 'Significado'), el('div', {}, a.meaning_en) ]),
        el('div', {}, [ el('div', { class: 'label' }, 'Português'), el('div', {}, a.pt) ]),
        el('div', {}, [ el('div', { class: 'label' }, 'Contexto'), el('div', {}, a.context) ])
      ]),
      el('div', { class: 'example' }, [ el('em', {}, a.example_en), ' ', UI.audioBtn(a.example_en) ])
    ]);
  }

  function abbrBrowse(mount) {
    var groups = {};
    abbrData().forEach(function (a) { (groups[a.context] = groups[a.context] || []).push(a); });
    var list = el('div', {});
    Object.keys(groups).sort().forEach(function (c) {
      list.appendChild(el('h3', { class: 'cat-head' }, c + ' (' + groups[c].length + ')'));
      groups[c].forEach(function (a) {
        list.appendChild(el('div', { class: 'browse-item' }, [
          el('div', {}, [ el('span', { class: 'bi-tech' }, a.abbr), '  ·  ', el('span', {}, a.meaning_en), '  ·  ', el('span', { class: 'muted' }, a.pt) ]),
          el('div', { class: 'muted small' }, [ el('em', {}, a.example_en), a.full !== a.abbr ? '  (' + a.full + ')' : '' ])
        ]));
      });
    });
    UI.mount(mount, [
      UI.backLink('usmle', 'Voltar'),
      UI.sectionHeader('Abreviações médicas', abbrData().length + ' abreviações de prescrição, história e achados'),
      el('div', { class: 'card' }, list)
    ]);
  }

  function abbrQuiz() {
    var pool = UI.shuffle(abbrData()).slice(0, 12);
    return pool.map(function (a) {
      var correct = a.meaning_en;
      var distractors = UI.shuffle(abbrData().filter(function (x) { return x.id !== a.id && x.meaning_en !== a.meaning_en; }))
        .slice(0, 3).map(function (x) { return x.meaning_en; });
      var options = UI.shuffle([correct].concat(distractors));
      return {
        prompt: el('div', {}, [
          el('p', { class: 'quiz-prompt' }, [ 'O que significa ', el('strong', {}, a.abbr), ' (' + a.context + ')?' ]),
          el('div', { class: 'stem small' }, el('em', {}, a.example_en))
        ]),
        options: options, answer: options.indexOf(correct),
        note: a.abbr + ' = ' + a.full + ' — ' + a.pt
      };
    });
  }

  function menu(mount) {
    var due = SRS.dueCount(Progress.getCards(DECK), terms().map(function (t) { return t.id; }));
    var abbrDue = SRS.dueCount(Progress.getCards(ABBR_DECK), abbrData().map(function (a) { return a.id; }));
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('USMLE / inglês clínico', 'O inglês que acelera a leitura das questões do Step 2 CK'),
      el('div', { class: 'stat-row' }, [
        UI.pill(terms().length + ' termos', 'info'),
        UI.pill(abbrData().length + ' abreviações', 'info'),
        UI.pill(notes().length + ' SOAP notes', 'info'),
        UI.pill((due + abbrDue) + ' para revisar', (due + abbrDue) ? 'warn' : 'ok')
      ]),
      el('div', { class: 'menu-grid' }, [
        card('🃏', 'Flashcards (SRS)', due + ' devidos — termo no enunciado', 'usmle/review'),
        card('📑', 'Termos em enunciados', 'Navegar com stem-modelo', 'usmle/browse'),
        card('🗂️', 'Patient notes (SOAP)', 'Ler prontuários e abreviações', 'usmle/notes'),
        card('⚡', 'Quiz de reconhecimento', 'Termo em destaque → significado', 'usmle/quiz'),
        card('🔤', 'Abreviações (SRS)', abbrDue + ' devidas — bid, PRN, Hx, SOB…', 'usmle/abbrev-review'),
        card('📚', 'Glossário de abreviações', 'Navegar por contexto', 'usmle/abbrev'),
        card('🧾', 'Quiz de abreviações', 'Abreviação → significado', 'usmle/abbrev-quiz')
      ])
    ]);
  }
  function card(icon, title, sub, route) {
    return el('a', { class: 'menu-card', href: '#/' + route }, [ el('div', { class: 'mc-icon' }, icon), el('div', {}, [ el('div', { class: 'mc-title' }, title), el('div', { class: 'mc-sub' }, sub) ]) ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.usmle = function (mount, params) {
    if (params[0] === 'review') {
      Common.review(mount, {
        deck: DECK, ids: terms().map(function (t) { return t.id; }),
        title: 'Flashcards — USMLE', subtitle: 'Reconheça o termo no enunciado', backTo: 'usmle',
        buildFront: function (id) { return termFront(terms().find(function (t) { return t.id === id; })); },
        buildBack: function (id) { return termBack(terms().find(function (t) { return t.id === id; })); }
      });
    } else if (params[0] === 'browse') browse(mount);
    else if (params[0] === 'notes') notesView(mount);
    else if (params[0] === 'quiz') Common.quiz(mount, { title: 'Reconhecimento em enunciados', subtitle: 'USMLE / clínico', moduleKey: 'usmle', backTo: 'usmle', questions: buildQuiz() });
    else if (params[0] === 'abbrev') abbrBrowse(mount);
    else if (params[0] === 'abbrev-review') {
      Common.review(mount, {
        deck: ABBR_DECK, ids: abbrData().map(function (a) { return a.id; }),
        title: 'Flashcards — Abreviações', subtitle: 'Veja a abreviação e recorde o significado', backTo: 'usmle',
        buildFront: function (id) { return abbrFront(abbrData().find(function (a) { return a.id === id; })); },
        buildBack: function (id) { return abbrBack(abbrData().find(function (a) { return a.id === id; })); }
      });
    }
    else if (params[0] === 'abbrev-quiz') Common.quiz(mount, { title: 'Quiz de abreviações', subtitle: 'Prescrição, história e achados', moduleKey: 'usmle', backTo: 'usmle', questions: abbrQuiz() });
    else menu(mount);
  };
})();
