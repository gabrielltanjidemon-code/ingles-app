/* listening.js — Módulo 20: OET Listening (Partes A/B/C).
   Part A: note completion com correção palavra a palavra (motor de ditado, TextMatch).
   Part B/C: múltipla escolha. Áudio toca uma vez (modo prova) ou com repetição/velocidade
   (modo treino). Reaproveita TTS. */
(function () {
  'use strict';
  var el = UI.el;

  function data() { return window.OET_LISTENING || []; }
  function byId(id) { return data().find(function (x) { return x.id === id; }); }

  function audioPanel(item) {
    var trainMode = Store.get('listenTrain', false);
    var played = false;
    var panel = el('div', { class: 'audio-panel' });

    var playBtn = el('button', { class: 'btn primary' }, '▶️ Tocar consulta');
    var status = el('span', { class: 'muted small' }, trainMode ? 'Modo treino: repetição e velocidade liberadas.' : 'Modo prova: o áudio toca uma vez.');

    function speak(rate) {
      TTS.stop();
      TTS.speak(item.audio_text, { rate: rate, lang: 'en-GB',
        onstart: function () { playBtn.textContent = '⏸️ Tocando…'; },
        onend: function () {
          played = true;
          playBtn.textContent = '▶️ Tocar consulta';
          if (!Store.get('listenTrain', false)) { playBtn.disabled = true; status.textContent = 'Áudio concluído (modo prova).'; }
        }
      });
    }

    playBtn.addEventListener('click', function () {
      if (played && !Store.get('listenTrain', false)) return;
      speak(1);
    });

    var speedWrap = el('div', { class: 'row gap wrap' });
    if (trainMode) {
      TTS.RATES.forEach(function (r) {
        speedWrap.appendChild(el('button', { class: 'btn small', onClick: function () { speak(r.value); } }, '▶️ ' + r.label));
      });
    }

    var toggle = el('label', { class: 'toggle' }, [
      (function () {
        var c = el('input', { type: 'checkbox' });
        c.checked = trainMode;
        c.addEventListener('change', function () { Store.set('listenTrain', c.checked); Router.resolve(); });
        return c;
      })(),
      el('span', {}, 'Modo treino (repetir / desacelerar)')
    ]);

    panel.appendChild(el('div', { class: 'row gap wrap' }, [ playBtn, status ]));
    if (trainMode) panel.appendChild(speedWrap);
    panel.appendChild(toggle);
    if (!TTS.available()) UI.mount(panel, el('div', { class: 'note' }, 'Áudio (TTS) indisponível neste navegador.'));
    return panel;
  }

  function noteItem(mount, item) {
    var inputs = [];
    var fields = el('div', { class: 'note-fields' }, item.fields.map(function (f, i) {
      var input = el('input', { class: 'note-input', type: 'text', placeholder: 'complete…', 'aria-label': f.label });
      inputs.push({ input: input, field: f });
      return el('div', { class: 'note-field' }, [
        el('label', { class: 'nf-label' }, f.label + ':'), input,
        el('div', { class: 'nf-result' })
      ]);
    }));

    var checkBtn = el('button', { class: 'btn primary' }, 'Corrigir');
    checkBtn.addEventListener('click', function () {
      var correct = 0;
      inputs.forEach(function (o, i) {
        var ok = TextMatch.accepts(o.input.value, o.field.answer, o.field.accept);
        var resultEl = fields.children[i].querySelector('.nf-result');
        o.input.classList.remove('right', 'wrong');
        o.input.classList.add(ok ? 'right' : 'wrong');
        if (ok) correct++;
        UI.mount(resultEl, el('div', { class: ok ? 'ok' : 'no' }, ok ? '✓ correto' : ['✗ resposta: ', el('strong', {}, o.field.answer)]));
      });
      Progress.recordResult('listening', correct >= inputs.length / 2);
      Progress.markDone('listening', item.id);
      Progress.addXP(correct * 4);
      UI.mount(scoreEl, el('div', { class: 'score-line' }, 'Você acertou ' + correct + ' de ' + inputs.length + ' campos.'));
    });

    var scoreEl = el('div', {});

    UI.mount(mount, [
      UI.backLink('listening', 'Listening'),
      UI.sectionHeader('Part A · Note completion', item.type + ' — preencha os campos ao ouvir'),
      audioPanel(item),
      el('div', { class: 'card' }, [ fields, el('div', { class: 'row gap' }, [ checkBtn ]), scoreEl ]),
      el('details', { class: 'transcript' }, [ el('summary', {}, 'Ver transcrição (após tentar)'), el('p', { class: 'muted' }, item.audio_text) ]),
      item.pt ? el('div', { class: 'note' }, [ el('strong', {}, 'Dica: '), item.pt ]) : null
    ]);
  }

  function mcqItem(mount, item) {
    Common.quiz(mount, {
      title: 'Part ' + item.part + ' · ' + (item.type === 'mcq' ? 'Múltipla escolha' : ''),
      subtitle: 'Ouça e responda', moduleKey: 'listening', backTo: 'listening',
      onDone: function () { Progress.markDone('listening', item.id); },
      questions: [{
        prompt: el('div', {}, [ audioPanel(item), el('p', { class: 'quiz-prompt' }, item.question) ]),
        options: item.options, answer: item.answer, note: item.pt
      }]
    });
  }

  function menu(mount) {
    var groups = { A: [], B: [], C: [] };
    data().forEach(function (x) { (groups[x.part] || (groups[x.part] = [])).push(x); });
    var titles = { A: 'Part A — Consultas (note completion)', B: 'Part B — Contexto de trabalho (MCQ)', C: 'Part C — Palestra/entrevista (MCQ)' };
    var sections = ['A', 'B', 'C'].map(function (p) {
      return el('div', {}, [
        el('h3', { class: 'cat-head' }, titles[p]),
        el('div', { class: 'item-list' }, (groups[p] || []).map(function (it) {
          var done = Progress.isDone('listening', it.id);
          return el('a', { class: 'item-link', href: '#/listening/item/' + it.id }, [
            el('span', {}, (it.source || (it.speakers || []).join(' + ') || it.type)),
            el('span', { class: 'item-status' }, done ? '✓' : '›')
          ]);
        }))
      ]);
    });
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('OET Listening', 'Consultas em velocidade natural + MCQ. ' + Progress.doneCount('listening') + ' concluídos.'),
      el('div', { class: 'card' }, sections)
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.listening = function (mount, params) {
    if (params[0] === 'item') {
      var item = byId(params[1]);
      if (!item) return menu(mount);
      if (item.type === 'note') noteItem(mount, item); else mcqItem(mount, item);
    } else {
      menu(mount);
    }
  };
})();
