/* common.js — Componentes reutilizados pelos módulos: revisão SRS (flashcards)
   e quiz de múltipla escolha. Reaproveita UI, SRS, Progress, TTS. */
(function () {
  'use strict';
  var el = UI.el;

  /* Sessão de revisão espaçada (flashcards).
     opts: { deck, ids, buildFront(id)->node, buildBack(id)->node, title, subtitle, backTo, limit } */
  function review(mount, opts) {
    var cards = Progress.getCards(opts.deck);
    var ordered = SRS.schedule(cards, opts.ids);
    var limit = opts.limit || 20;
    var queue = ordered.slice(0, limit);
    var idx = 0, correct = 0;

    var container = el('div', { class: 'view' });
    UI.mount(mount, container);

    function done() {
      UI.mount(container, [
        opts.backTo ? UI.backLink(opts.backTo, 'Voltar') : null,
        el('div', { class: 'card center' }, [
          el('div', { class: 'big-emoji' }, '✅'),
          el('h2', {}, 'Sessão concluída!'),
          el('p', {}, 'Você revisou ' + queue.length + ' item(s), ' + correct + ' com acerto.'),
          el('div', { class: 'row gap' }, [
            el('button', { class: 'btn primary', onClick: function () { Router.resolve(); } }, 'Revisar de novo'),
            opts.backTo ? el('a', { class: 'btn', href: '#/' + opts.backTo }, 'Voltar') : null
          ])
        ])
      ]);
    }

    function showCard() {
      if (idx >= queue.length) return done();
      var id = queue[idx];
      var revealed = false;

      var body = el('div', { class: 'flashcard' });
      var front = el('div', { class: 'flash-front' }, opts.buildFront(id));
      body.appendChild(front);

      var backWrap = el('div', { class: 'flash-back hidden' });
      var actions = el('div', { class: 'flash-actions' });

      var revealBtn = el('button', { class: 'btn primary block' }, 'Mostrar resposta');
      revealBtn.addEventListener('click', function () {
        if (revealed) return;
        revealed = true;
        UI.mount(backWrap, opts.buildBack(id));
        backWrap.classList.remove('hidden');
        UI.mount(actions, gradeButtons(id));
      });

      function gradeButtons(id) {
        var defs = [
          { label: 'Errei', q: 1, cls: 'grade-again' },
          { label: 'Difícil', q: 3, cls: 'grade-hard' },
          { label: 'Bom', q: 4, cls: 'grade-good' },
          { label: 'Fácil', q: 5, cls: 'grade-easy' }
        ];
        return defs.map(function (d) {
          return el('button', { class: 'btn ' + d.cls, onClick: function () {
            Progress.reviewItem(opts.deck, id, d.q);
            if (d.q >= 3) correct++;
            idx++;
            showCard();
          } }, d.label);
        });
      }

      UI.mount(container, [
        opts.backTo ? UI.backLink(opts.backTo, 'Voltar') : null,
        UI.sectionHeader(opts.title, opts.subtitle),
        UI.progressBar((idx / queue.length) * 100, 'progresso'),
        el('div', { class: 'counter' }, (idx + 1) + ' / ' + queue.length),
        el('div', { class: 'card flash' }, [ body, backWrap ]),
        revealBtn,
        el('div', { class: 'flash-grade' }, actions)
      ]);
    }

    if (!queue.length) {
      UI.mount(container, [
        opts.backTo ? UI.backLink(opts.backTo, 'Voltar') : null,
        el('div', { class: 'card center' }, [ el('p', {}, 'Nada para revisar agora. Volte mais tarde!') ])
      ]);
    } else {
      showCard();
    }
  }

  /* Quiz de múltipla escolha.
     opts: { title, subtitle, moduleKey, questions:[{prompt(node|str), options:[str|node], answer, note}], backTo, onDone } */
  function quiz(mount, opts) {
    var qs = opts.questions;
    var idx = 0, score = 0;
    var container = el('div', { class: 'view' });
    UI.mount(mount, container);

    function finish() {
      var pct = Math.round((score / qs.length) * 100);
      if (opts.moduleKey) Progress.addXP(score * 5);
      UI.mount(container, [
        opts.backTo ? UI.backLink(opts.backTo, 'Voltar') : null,
        el('div', { class: 'card center' }, [
          el('div', { class: 'big-emoji' }, pct >= 70 ? '🎉' : '📚'),
          el('h2', {}, 'Resultado: ' + score + ' / ' + qs.length),
          el('p', {}, pct + '% de acerto'),
          el('div', { class: 'row gap' }, [
            el('button', { class: 'btn primary', onClick: function () { Router.resolve(); } }, 'Refazer'),
            opts.backTo ? el('a', { class: 'btn', href: '#/' + opts.backTo }, 'Voltar') : null
          ])
        ])
      ]);
      if (opts.onDone) opts.onDone(score, qs.length);
    }

    function showQ() {
      if (idx >= qs.length) return finish();
      var q = qs[idx];
      var answered = false;
      var optsEl = el('div', { class: 'quiz-options' });

      q.options.forEach(function (o, i) {
        var b = el('button', { class: 'quiz-opt' });
        if (o instanceof Node) b.appendChild(o); else b.textContent = o;
        b.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          var isRight = i === q.answer;
          if (isRight) score++;
          if (opts.moduleKey) Progress.recordResult(opts.moduleKey, isRight);
          Array.prototype.forEach.call(optsEl.children, function (c, j) {
            c.classList.add('disabled');
            if (j === q.answer) c.classList.add('correct');
            if (j === i && !isRight) c.classList.add('wrong');
          });
          var fb = el('div', { class: 'quiz-feedback ' + (isRight ? 'ok' : 'no') }, [
            el('strong', {}, isRight ? 'Correto! ' : 'Não foi dessa vez. '),
            q.note ? el('span', {}, q.note) : null
          ]);
          container.querySelector('.quiz-body').appendChild(fb);
          container.querySelector('.next-btn').classList.remove('hidden');
        });
        optsEl.appendChild(b);
      });

      var promptNode = (q.prompt instanceof Node) ? q.prompt : el('p', { class: 'quiz-prompt' }, q.prompt);

      UI.mount(container, [
        opts.backTo ? UI.backLink(opts.backTo, 'Voltar') : null,
        UI.sectionHeader(opts.title, opts.subtitle),
        UI.progressBar((idx / qs.length) * 100),
        el('div', { class: 'counter' }, (idx + 1) + ' / ' + qs.length),
        el('div', { class: 'card quiz-body' }, [ promptNode, optsEl ]),
        el('button', { class: 'btn primary next-btn hidden', onClick: function () { idx++; showQ(); } },
          idx + 1 >= qs.length ? 'Ver resultado' : 'Próxima')
      ]);
    }
    showQ();
  }

  window.Common = { review: review, quiz: quiz };
})();
