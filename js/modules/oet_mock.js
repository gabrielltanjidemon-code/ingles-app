/* oet_mock.js — Módulo 25: Simulado OET.
   Mock dos 4 sub-testes → pontuação 0–500 por sub-teste + grade A–E,
   indicando se atingiu o mínimo ECFMG (L/R/S 350, W 300). Salva no histórico.
   Nota honesta: é um TREINO de inglês; a pontuação é estimada (anti-requisito 18.10). */
(function () {
  'use strict';
  var el = UI.el;
  var ECFMG = { listening: 350, reading: 350, speaking: 350, writing: 300 };

  function pct500(pct) { return Math.max(0, Math.min(500, Math.round(pct * 5))); }

  function pick(arr, n) { return UI.shuffle(arr).slice(0, n); }

  /* Runner de MCQ inline para o mock (áudio opcional). onDone(pct). */
  function runMCQ(container, cfg, onDone) {
    var qs = cfg.questions, idx = 0, score = 0;
    function show() {
      if (idx >= qs.length) { onDone(Math.round(100 * score / qs.length)); return; }
      var q = qs[idx], answered = false;
      var optsEl = el('div', { class: 'quiz-options' });
      q.options.forEach(function (o, i) {
        var b = el('button', { class: 'quiz-opt' }, o);
        b.addEventListener('click', function () {
          if (answered) return; answered = true;
          var ok = i === q.answer; if (ok) score++;
          Array.prototype.forEach.call(optsEl.children, function (c, j) { c.classList.add('disabled'); if (j === q.answer) c.classList.add('correct'); if (j === i && !ok) c.classList.add('wrong'); });
          nextBtn.classList.remove('hidden');
        });
        optsEl.appendChild(b);
      });
      var nextBtn = el('button', { class: 'btn primary hidden', onClick: function () { idx++; show(); } }, idx + 1 >= qs.length ? 'Concluir sub-teste' : 'Próxima');
      UI.mount(container, [
        UI.sectionHeader(cfg.title, cfg.subtitle),
        UI.progressBar((idx / qs.length) * 100),
        el('div', { class: 'counter' }, (idx + 1) + ' / ' + qs.length),
        el('div', { class: 'card' }, [ q.audio ? audioBtnRow(q.audio) : null, el('p', { class: 'quiz-prompt' }, q.prompt), optsEl ]),
        nextBtn
      ]);
    }
    show();
  }

  function audioBtnRow(text) {
    return el('div', { class: 'audio-panel' }, [ el('button', { class: 'btn', onClick: function () { TTS.speak(text, { lang: 'en-GB' }); } }, '▶️ Tocar áudio (uma vez)') ]);
  }

  function run(mount) {
    var state = { listening: null, reading: null, writing: null, speaking: null };
    var container = el('div', { class: 'view' });
    UI.mount(mount, [ el('div', { class: 'row between' }, [ UI.backLink('mock', 'Sair do simulado'), UI.pill('Simulado OET', 'set') ]), container ]);

    function listening() {
      var pool = (window.OET_LISTENING || []).filter(function (x) { return x.type === 'mcq'; });
      var qs = pick(pool, 4).map(function (it) { return { prompt: it.question, options: it.options, answer: it.answer, audio: it.audio_text }; });
      runMCQ(container, { title: '1/4 · Listening', subtitle: 'Ouça (uma vez) e responda', questions: qs }, function (p) { state.listening = pct500(p); reading(); });
    }

    function reading() {
      var pool = (window.OET_READING || []).filter(function (x) { return x.part !== 'A'; });
      var qs = pick(pool, 4).map(function (it) { return { prompt: it.text_en + '\n\n' + it.question_en, options: it.options, answer: it.answer }; });
      runMCQ(container, { title: '2/4 · Reading', subtitle: 'Leia e responda (inferência)', questions: qs }, function (p) { state.reading = pct500(p); writing(); });
    }

    function writing() {
      var ex = pick(window.OET_WRITING || [], 1)[0];
      var editor = el('textarea', { class: 'letter-editor', rows: 12, placeholder: 'Escreva a carta (corpo 180–200 palavras)…' });
      var counter = el('span', { class: 'wc' });
      function upd() { var n = (editor.value.trim().match(/\S+/g) || []).length; counter.textContent = n + ' palavras'; counter.className = 'wc ' + (n >= 180 && n <= 200 ? 'ok' : (n ? 'warn' : '')); }
      editor.addEventListener('input', upd); upd();
      var ticks = (ex.checklist_pt || []).map(function (c) {
        var cb = el('input', { type: 'checkbox' });
        return { cb: cb, node: el('label', { class: 'check-item' }, [ cb, el('span', {}, c) ]) };
      });
      UI.mount(container, [
        UI.sectionHeader('3/4 · Writing', 'Para: ' + ex.recipient),
        el('div', { class: 'card' }, [ el('h4', {}, 'Case notes'), el('p', { class: 'case-notes' }, ex.case_notes), el('div', { class: 'kp' }, [ el('strong', {}, 'Incluir: '), (ex.key_points || []).join('; ') ]) ]),
        el('div', { class: 'card' }, [ el('div', { class: 'editor-head' }, [ el('h4', {}, 'Sua carta'), counter ]), editor ]),
        el('div', { class: 'card' }, [ el('h4', {}, 'Autoavaliação (checklist)'), el('div', { class: 'checklist' }, ticks.map(function (t) { return t.node; })) ]),
        el('button', { class: 'btn primary', onClick: function () {
          var n = (editor.value.trim().match(/\S+/g) || []).length;
          var wordScore = (n >= 180 && n <= 200) ? 1 : (n >= 150 && n <= 230 ? 0.7 : (n >= 80 ? 0.45 : (n ? 0.25 : 0)));
          var ticked = ticks.filter(function (t) { return t.cb.checked; }).length;
          var checkRatio = ticks.length ? ticked / ticks.length : 0;
          var p = Math.round(100 * (0.5 * wordScore + 0.5 * checkRatio));
          state.writing = pct500(p);
          if (ex.letter_type === 'referral') Badges.unlock('first_referral');
          speaking();
        } }, 'Concluir Writing')
      ]);
    }

    function speaking() {
      var pool = (window.OET_SPEAKING || []).filter(function (x) { return x.dialogue && x.dialogue.length; });
      var item = pick(pool, 1)[0];
      var turns = item.dialogue, idx = 0, qualitySum = 0;
      function showTurn() {
        if (idx >= turns.length) {
          var p = Math.round(100 * qualitySum / turns.length);
          state.speaking = pct500(p);
          if (p >= 80) Badges.unlock('roleplay_smooth');
          results();
          return;
        }
        var turn = turns[idx];
        if (TTS.available()) TTS.speak(turn.patient, { lang: 'en-GB' });
        var chosen = false;
        var choices = el('div', { class: 'choices' }, UI.shuffle(turn.choices).map(function (ch) {
          var b = el('button', { class: 'choice' }, ch.text);
          b.addEventListener('click', function () {
            if (chosen) return; chosen = true;
            qualitySum += (ch.quality === 'good' ? 1 : ch.quality === 'ok' ? 0.6 : 0.25);
            Array.prototype.forEach.call(choices.children, function (c) { c.classList.add('disabled'); });
            b.classList.add('q-' + ch.quality);
            nextBtn.classList.remove('hidden');
          });
          return b;
        }));
        var nextBtn = el('button', { class: 'btn primary hidden', onClick: function () { idx++; showTurn(); } }, idx + 1 >= turns.length ? 'Concluir sub-teste' : 'Continuar');
        UI.mount(container, [
          UI.sectionHeader('4/4 · Speaking', item.setting + ' — escolha a melhor resposta'),
          el('div', { class: 'card scenario' }, [ el('div', { class: 'sc-patient' }, [ el('strong', {}, 'Paciente: '), item.patient_card_pt ]) ]),
          UI.progressBar((idx / turns.length) * 100),
          el('div', { class: 'dialogue-turn' }, [ el('div', { class: 'patient-bubble' }, [ el('div', { class: 'pb-en' }, [ '🧑 ', turn.patient, ' ', UI.audioBtn(turn.patient) ]), el('div', { class: 'pb-pt muted' }, turn.pt) ]), choices, nextBtn ])
        ]);
      }
      showTurn();
    }

    function results() {
      Progress.saveMock({ listening: state.listening, reading: state.reading, writing: state.writing, speaking: state.speaking });
      Badges.check();
      var met = state.listening >= ECFMG.listening && state.reading >= ECFMG.reading && state.speaking >= ECFMG.speaking && state.writing >= ECFMG.writing;
      UI.mount(container, [
        el('div', { class: 'card center' }, [
          el('div', { class: 'big-emoji' }, met ? '🎯' : '📊'),
          el('h2', {}, 'Resultado do simulado'),
          scoreTable(state),
          el('div', { class: met ? 'ecfmg-met' : 'ecfmg-miss' }, met ? '✅ Você atingiu os mínimos do ECFMG neste simulado (350/350/350/300).' : 'Ainda não atingiu todos os mínimos do ECFMG (L/R/S 350, W 300). Continue treinando!'),
          el('p', { class: 'muted small' }, 'Lembrete: este é um treino de inglês e a pontuação é estimada. O conteúdo médico da prova vem do seu estudo clínico.'),
          el('div', { class: 'row gap' }, [ el('button', { class: 'btn primary', onClick: function () { run(mount); } }, 'Novo simulado'), el('a', { class: 'btn', href: '#/stats' }, 'Ver estatísticas' ), el('a', { class: 'btn', href: '#/mock' }, 'Voltar') ])
        ])
      ]);
    }

    listening();
  }

  function scoreTable(s) {
    var rows = [
      ['Listening', s.listening, ECFMG.listening],
      ['Reading', s.reading, ECFMG.reading],
      ['Speaking', s.speaking, ECFMG.speaking],
      ['Writing', s.writing, ECFMG.writing]
    ];
    return el('table', { class: 'score-table' }, [
      el('thead', {}, el('tr', {}, [ el('th', {}, 'Sub-teste'), el('th', {}, 'Pontos (0–500)'), el('th', {}, 'Grade'), el('th', {}, 'Meta ECFMG') ])),
      el('tbody', {}, rows.map(function (r) {
        var okmin = r[1] >= r[2];
        return el('tr', {}, [ el('td', {}, r[0]), el('td', { class: okmin ? 'ok' : 'no' }, String(r[1])), el('td', {}, Badges.grade(r[1])), el('td', {}, okmin ? '✅ ' + r[2] : '⛌ ' + r[2]) ]);
      }))
    ]);
  }

  function menu(mount) {
    var hist = Progress.mockHistory();
    var best = Progress.bestMock();
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('Simulado OET', 'Mock dos 4 sub-testes → 0–500 por skill + grade A–E'),
      el('div', { class: 'card center' }, [
        el('p', {}, 'Metas ECFMG: Listening 350 · Reading 350 · Speaking 350 · Writing 300 (numa única sessão).'),
        el('button', { class: 'btn primary lg', onClick: function () { run(mount); } }, '▶️ Iniciar simulado completo')
      ]),
      best ? el('div', { class: 'card' }, [ el('h4', {}, 'Melhor resultado' ), scoreTable(best) ]) : null,
      hist.length ? el('div', { class: 'card' }, [
        el('h4', {}, 'Histórico (' + hist.length + ')'),
        el('div', { class: 'item-list' }, hist.slice().reverse().slice(0, 10).map(function (m) {
          var d = new Date(m.date);
          return el('div', { class: 'hist-row' }, [
            el('span', { class: 'muted' }, d.toLocaleDateString('pt-BR')),
            el('span', {}, 'L' + m.listening + ' R' + m.reading + ' S' + m.speaking + ' W' + m.writing)
          ]);
        }))
      ]) : null
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.mock = function (mount, params) {
    if (params[0] === 'run') run(mount); else menu(mount);
  };
})();
