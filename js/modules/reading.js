/* reading.js — Módulo 21: OET Reading (Partes A/B/C).
   Part A: cronometrada (15 min), skim/scan, short-answer com correção por TextMatch.
   Part B/C: múltipla escolha com foco em inferência. Dicas de estratégia em PT. */
(function () {
  'use strict';
  var el = UI.el;

  function data() { return window.OET_READING || []; }
  function partItems(p) { return data().filter(function (x) { return x.part === p; }); }
  function byId(id) { return data().find(function (x) { return x.id === id; }); }

  /* ---- Part A: timed short-answer session ---- */
  function partA(mount) {
    var items = partItems('A');
    var idx = 0, correct = 0;
    var remaining = 15 * 60; // 15 min
    var timerId = null;
    var container = el('div', { class: 'view' });
    UI.mount(mount, container);

    function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

    function fmt(s) { var m = Math.floor(s / 60); var ss = s % 60; return m + ':' + (ss < 10 ? '0' : '') + ss; }

    function finish(timeUp) {
      stopTimer();
      Progress.addXP(correct * 4);
      if (correct >= items.length * 0.6) Progress.markDone('reading', 'partA');
      UI.mount(container, [
        UI.backLink('reading', 'Reading'),
        el('div', { class: 'card center' }, [
          el('div', { class: 'big-emoji' }, timeUp ? '⏰' : '✅'),
          el('h2', {}, timeUp ? 'Tempo esgotado!' : 'Part A concluída'),
          el('p', {}, 'Acertos: ' + correct + ' / ' + items.length),
          el('div', { class: 'row gap' }, [
            el('button', { class: 'btn primary', onClick: function () { partA(mount); } }, 'Refazer cronometrado'),
            el('a', { class: 'btn', href: '#/reading' }, 'Voltar')
          ])
        ])
      ]);
    }

    function showItem() {
      if (idx >= items.length) return finish(false);
      var it = items[idx];
      var input = el('input', { class: 'note-input wide', type: 'text', placeholder: 'resposta curta…' });
      var resultEl = el('div', {});
      var timerEl = el('div', { class: 'timer' }, '⏱️ ' + fmt(remaining));

      var checkBtn = el('button', { class: 'btn primary', onClick: function () {
        var ok = TextMatch.accepts(input.value, it.answer, it.accept);
        input.classList.add(ok ? 'right' : 'wrong');
        if (ok) correct++;
        Progress.recordResult('reading', ok);
        UI.mount(resultEl, el('div', { class: ok ? 'ok' : 'no' }, ok ? '✓ correto' : ['✗ resposta aceitável: ', el('strong', {}, it.answer)]));
        checkBtn.disabled = true;
        nextBtn.classList.remove('hidden');
      } }, 'Corrigir');
      var nextBtn = el('button', { class: 'btn next-btn hidden', onClick: function () { idx++; showItem(); } }, idx + 1 >= items.length ? 'Finalizar' : 'Próximo');

      UI.mount(container, [
        el('div', { class: 'reading-topbar' }, [ UI.backLink('reading', 'Sair'), timerEl ]),
        UI.sectionHeader('Part A · Expeditious', it.source),
        el('div', { class: 'counter' }, (idx + 1) + ' / ' + items.length),
        el('div', { class: 'card reading-text' }, el('p', {}, it.text_en)),
        el('div', { class: 'card' }, [
          el('p', { class: 'quiz-prompt' }, it.question_en),
          input, el('div', { class: 'row gap' }, [ checkBtn, nextBtn ]), resultEl
        ]),
        it.pt ? el('div', { class: 'note' }, [ el('strong', {}, 'Estratégia: '), it.pt ]) : null
      ]);
      container.querySelector('.timer'); // keep ref via query in tick
    }

    timerId = setInterval(function () {
      remaining--;
      var t = container.querySelector('.timer');
      if (t) t.textContent = '⏱️ ' + fmt(remaining);
      if (remaining <= 0) finish(true);
    }, 1000);

    showItem();
  }

  function mcqItem(mount, it) {
    Common.quiz(mount, {
      title: 'Part ' + it.part + ' · Leitura', subtitle: it.source, moduleKey: 'reading', backTo: 'reading',
      onDone: function () { Progress.markDone('reading', it.id); },
      questions: [{
        prompt: el('div', {}, [ el('div', { class: 'card reading-text' }, el('p', {}, it.text_en)), el('p', { class: 'quiz-prompt' }, it.question_en) ]),
        options: it.options, answer: it.answer, note: it.pt
      }]
    });
  }

  function menu(mount) {
    var b = partItems('B'), c = partItems('C');
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('OET Reading', 'Part A cronometrada + MCQ de compreensão e inferência'),
      el('div', { class: 'card' }, [
        el('h3', { class: 'cat-head' }, 'Part A — Expeditious (15 min)'),
        el('p', { class: 'muted' }, 'Skim/scan: procure números e palavras-chave; não leia tudo. ' + partItems('A').length + ' questões.'),
        el('a', { class: 'btn primary', href: '#/reading/partA' }, '⏱️ Iniciar Part A cronometrada')
      ]),
      el('div', { class: 'card' }, [
        el('h3', { class: 'cat-head' }, 'Part B — Contexto de trabalho'),
        el('div', { class: 'item-list' }, b.map(function (it) {
          return el('a', { class: 'item-link', href: '#/reading/item/' + it.id }, [ el('span', {}, it.source), el('span', { class: 'item-status' }, Progress.isDone('reading', it.id) ? '✓' : '›') ]);
        }))
      ]),
      el('div', { class: 'card' }, [
        el('h3', { class: 'cat-head' }, 'Part C — Textos longos'),
        el('div', { class: 'item-list' }, c.map(function (it) {
          return el('a', { class: 'item-link', href: '#/reading/item/' + it.id }, [ el('span', {}, it.source), el('span', { class: 'item-status' }, Progress.isDone('reading', it.id) ? '✓' : '›') ]);
        }))
      ])
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.reading = function (mount, params) {
    if (params[0] === 'partA') partA(mount);
    else if (params[0] === 'item') { var it = byId(params[1]); if (it) mcqItem(mount, it); else menu(mount); }
    else menu(mount);
  };
})();
