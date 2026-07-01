/* vocab.js — Módulo 18: Vocabulário médico.
   Flashcards técnico ↔ leigo ↔ PT (com IPA e áudio), SRS, e quizzes:
   técnico→leigo, leigo→técnico, EN↔PT, áudio→termo. */
(function () {
  'use strict';
  var el = UI.el;
  var DECK = 'vocab';

  function data() { return window.MEDVOCAB || []; }

  function termCard(t, showTech) {
    return el('div', {}, [
      el('div', { class: 'term-line' }, [
        el('span', { class: 'term-main' }, showTech ? t.technical : t.lay),
        UI.audioBtn(showTech ? t.technical : t.lay)
      ]),
      el('div', { class: 'ipa' }, t.ipa || ''),
      el('div', { class: 'muted' }, showTech ? 'termo técnico' : 'linguagem de paciente')
    ]);
  }

  function backContent(t) {
    return el('div', {}, [
      el('div', { class: 'grid-2' }, [
        el('div', {}, [ el('div', { class: 'label' }, 'Técnico'), el('div', {}, [ t.technical, ' ', UI.audioBtn(t.technical) ]) ]),
        el('div', {}, [ el('div', { class: 'label' }, 'Leigo'), el('div', {}, [ t.lay, ' ', UI.audioBtn(t.lay) ]) ]),
        el('div', {}, [ el('div', { class: 'label' }, 'Português'), el('div', {}, t.pt) ]),
        el('div', {}, [ el('div', { class: 'label' }, 'Categoria'), el('div', {}, t.category + ' · ' + (t.cefr || '')) ])
      ]),
      el('div', { class: 'example' }, [
        el('div', {}, [ el('em', {}, t.example_en), ' ', UI.audioBtn(t.example_en) ]),
        el('div', { class: 'muted' }, t.example_pt)
      ]),
      t.register_note_pt ? el('div', { class: 'note' }, [ el('strong', {}, 'Registro: '), t.register_note_pt ]) : null
    ]);
  }

  /* ----- Quiz builders ----- */
  function buildQuiz(mode) {
    var all = UI.shuffle(data()).slice(0, 12);
    return all.map(function (t) {
      var pool, correct, prompt;
      if (mode === 'tech-lay') {
        prompt = el('div', {}, [ el('p', { class: 'quiz-prompt' }, [ 'Qual a forma leiga de ', el('strong', {}, t.technical), '?', ' ', UI.audioBtn(t.technical) ]) ]);
        correct = t.lay; pool = 'lay';
      } else if (mode === 'lay-tech') {
        prompt = el('p', { class: 'quiz-prompt' }, [ 'Qual o termo técnico de ', el('strong', {}, '"' + t.lay + '"'), '?' ]);
        correct = t.technical; pool = 'technical';
      } else if (mode === 'en-pt') {
        prompt = el('p', { class: 'quiz-prompt' }, [ 'Traduza: ', el('strong', {}, t.technical) ]);
        correct = t.pt; pool = 'pt';
      } else { // audio-term
        prompt = el('div', {}, [ el('p', { class: 'quiz-prompt' }, 'Ouça e escolha o termo:'), UI.audioBtn(t.technical, { label: '🔊 Ouvir' }) ]);
        correct = t.technical; pool = 'technical';
      }
      var distractors = UI.shuffle(data().filter(function (x) { return x.id !== t.id; })).slice(0, 3).map(function (x) { return x[pool]; });
      var options = UI.shuffle([correct].concat(distractors));
      return { prompt: prompt, options: options, answer: options.indexOf(correct), note: t.register_note_pt || (t.technical + ' = ' + t.pt) };
    });
  }

  function browse(mount) {
    var wrap = el('div', { class: 'view' });
    var cats = {};
    data().forEach(function (t) { (cats[t.category] = cats[t.category] || []).push(t); });
    var list = el('div', {});
    Object.keys(cats).sort().forEach(function (c) {
      list.appendChild(el('h3', { class: 'cat-head' }, c + ' (' + cats[c].length + ')'));
      cats[c].forEach(function (t) {
        list.appendChild(el('div', { class: 'browse-item' }, [
          el('div', {}, [
            el('span', { class: 'bi-tech' }, t.technical), ' ',
            el('span', { class: 'ipa inline' }, t.ipa), UI.audioBtn(t.technical)
          ]),
          el('div', { class: 'muted' }, [ '🗣️ ', t.lay, '  ·  🇧🇷 ', t.pt ])
        ]));
      });
    });
    UI.mount(mount, [ UI.backLink('vocab', 'Voltar'), UI.sectionHeader('Glossário médico', data().length + ' termos'), UI.speedSelector(), el('div', { class: 'card' }, list) ]);
    UI.mount(mount, wrap);
    wrap.appendChild(el('div'));
  }

  function menu(mount) {
    var cards = Progress.getCards(DECK);
    var due = SRS.dueCount(cards, data().map(function (t) { return t.id; }));
    var m = Progress.moduleStats('vocab');
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('Vocabulário médico', 'Registro duplo: técnico ↔ leigo ↔ PT, com IPA e áudio'),
      el('div', { class: 'stat-row' }, [
        UI.pill(data().length + ' termos', 'info'),
        UI.pill(due + ' para revisar hoje', due ? 'warn' : 'ok'),
        UI.pill('Acerto ' + (m.attempts ? Math.round(100 * m.correct / m.attempts) : 0) + '%', 'info')
      ]),
      el('div', { class: 'menu-grid' }, [
        menuCard('🃏', 'Flashcards (SRS)', 'Revisão espaçada — ' + due + ' devidos', 'vocab/review'),
        menuCard('📖', 'Glossário', 'Navegar por sistema', 'vocab/browse'),
        menuCard('🔬→🗣️', 'Técnico → Leigo', 'Traduza para linguagem de paciente', 'vocab/quiz/tech-lay'),
        menuCard('🗣️→🔬', 'Leigo → Técnico', 'Documente no registro clínico', 'vocab/quiz/lay-tech'),
        menuCard('🇬🇧→🇧🇷', 'Inglês → Português', 'Confirme o sentido', 'vocab/quiz/en-pt'),
        menuCard('🔊', 'Áudio → Termo', 'Reconhecimento auditivo', 'vocab/quiz/audio-term')
      ])
    ]);
  }

  function menuCard(icon, title, sub, route) {
    return el('a', { class: 'menu-card', href: '#/' + route }, [
      el('div', { class: 'mc-icon' }, icon),
      el('div', {}, [ el('div', { class: 'mc-title' }, title), el('div', { class: 'mc-sub' }, sub) ])
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.vocab = function (mount, params) {
    var action = params[0];
    if (action === 'review') {
      Common.review(mount, {
        deck: DECK, ids: data().map(function (t) { return t.id; }),
        title: 'Flashcards — Vocabulário', subtitle: 'Veja o termo técnico e recorde o resto', backTo: 'vocab',
        buildFront: function (id) { return termCard(data().find(function (t) { return t.id === id; }), true); },
        buildBack: function (id) { return backContent(data().find(function (t) { return t.id === id; })); }
      });
    } else if (action === 'browse') {
      browse(mount);
    } else if (action === 'quiz') {
      var mode = params[1] || 'tech-lay';
      var titles = { 'tech-lay': 'Técnico → Leigo', 'lay-tech': 'Leigo → Técnico', 'en-pt': 'Inglês → Português', 'audio-term': 'Áudio → Termo' };
      Common.quiz(mount, { title: titles[mode] || 'Quiz', subtitle: 'Vocabulário médico', moduleKey: 'vocab', backTo: 'vocab', questions: buildQuiz(mode) });
    } else {
      menu(mount);
    }
  };
})();
