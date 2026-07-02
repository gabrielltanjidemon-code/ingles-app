/* speaking.js — Módulo 23: OET Speaking (role-plays médico-paciente).
   Modo OFFLINE: diálogo ramificado por escolhas + linguagem útil (motor de diálogos).
   Modo VOZ (online + chave): você fala (STT) → IA responde como paciente (TTS);
   ao final, feedback nos critérios do OET. Funciona offline sem a chave. */
(function () {
  'use strict';
  var el = UI.el;

  function data() { return window.OET_SPEAKING || []; }
  function byId(id) { return data().find(function (x) { return x.id === id; }); }

  function scenarioCard(item) {
    return el('div', { class: 'card scenario' }, [
      el('div', { class: 'sc-row' }, [ UI.pill(item.setting, 'set'), UI.pill('Você: médico', 'role') ]),
      el('div', { class: 'sc-patient' }, [ el('strong', {}, 'Paciente: '), item.patient_card_pt ]),
      el('div', {}, [ el('strong', {}, 'Suas tarefas:'), el('ul', {}, (item.tasks || []).map(function (t) { return el('li', {}, t); })) ]),
      el('details', {}, [ el('summary', {}, 'Linguagem útil (useful language)'),
        el('ul', {}, (item.useful_language || []).map(function (u) { return el('li', {}, [ u, ' ', UI.audioBtn(u) ]); })) ]),
      el('div', { class: 'muted small' }, [ 'Foco do avaliador: ', (item.assessor_focus_pt || []).join(' · ') ])
    ]);
  }

  /* ---- Modo offline: diálogo ramificado por escolhas ---- */
  function offlineMode(mount, item) {
    var turns = item.dialogue || [];
    var idx = 0;
    var qualities = [];
    var container = el('div', {});

    function tally() {
      var good = qualities.filter(function (q) { return q === 'good'; }).length;
      var poor = qualities.filter(function (q) { return q === 'poor'; }).length;
      return { good: good, poor: poor };
    }

    function finish() {
      var t = tally();
      Progress.markDone('speaking', item.id);
      Progress.recordResult('speaking', t.poor === 0);
      Progress.addXP(t.good * 5);
      if (t.poor === 0 && t.good >= 1) Badges.unlock('roleplay_smooth');
      UI.mount(container, el('div', { class: 'card center' }, [
        el('div', { class: 'big-emoji' }, t.poor === 0 ? '💬' : '📘'),
        el('h3', {}, 'Role-play concluído'),
        el('p', {}, 'Escolhas excelentes: ' + t.good + ' · a evitar: ' + t.poor),
        t.poor === 0 ? el('p', { class: 'ok' }, 'Você conduziu sem travar — ótimo relacionamento e estrutura!') : el('p', { class: 'muted' }, 'Reveja as escolhas marcadas e tente de novo.'),
        el('div', { class: 'row gap' }, [
          el('button', { class: 'btn primary', onClick: function () { idx = 0; qualities = []; showTurn(); } }, 'Refazer'),
          el('a', { class: 'btn', href: '#/speaking' }, 'Voltar')
        ])
      ]));
    }

    function showTurn() {
      if (idx >= turns.length) return finish();
      var turn = turns[idx];
      if (TTS.available()) TTS.speak(turn.patient, { lang: 'en-GB' });
      var chosen = false;
      var choiceEls = el('div', { class: 'choices' });
      var feedback = el('div', {});
      var nextBtn = el('button', { class: 'btn primary hidden', onClick: function () { idx++; showTurn(); } }, idx + 1 >= turns.length ? 'Finalizar' : 'Continuar');

      UI.shuffle(turn.choices).forEach(function (ch) {
        var b = el('button', { class: 'choice' });
        b.appendChild(el('span', {}, ch.text));
        b.addEventListener('click', function () {
          if (chosen) return;
          chosen = true;
          qualities.push(ch.quality);
          Array.prototype.forEach.call(choiceEls.children, function (c) { c.classList.add('disabled'); });
          b.classList.add('q-' + ch.quality);
          UI.mount(feedback, el('div', { class: 'choice-fb ' + (ch.quality === 'good' ? 'ok' : ch.quality === 'poor' ? 'no' : 'warn') }, [
            el('strong', {}, ch.quality === 'good' ? '👍 ' : ch.quality === 'poor' ? '⚠️ ' : '↔️ '),
            ch.feedback_pt
          ]));
          nextBtn.classList.remove('hidden');
        });
        choiceEls.appendChild(b);
      });

      UI.mount(container, [
        UI.progressBar((idx / turns.length) * 100),
        el('div', { class: 'dialogue-turn' }, [
          el('div', { class: 'patient-bubble' }, [ el('div', { class: 'pb-en' }, [ '🧑 ', turn.patient, ' ', UI.audioBtn(turn.patient) ]), el('div', { class: 'pb-pt muted' }, turn.pt) ]),
          el('div', { class: 'doc-prompt' }, 'Como você responde?'),
          choiceEls, feedback, nextBtn
        ])
      ]);
    }

    UI.mount(mount, [
      UI.backLink('speaking', 'Speaking'),
      UI.sectionHeader('Role-play (offline)', 'Escolha a melhor resposta do médico'),
      scenarioCard(item),
      container
    ]);
    if (turns.length) showTurn(); else UI.mount(container, el('div', { class: 'note' }, 'Este cenário não tem diálogo ramificado; use o modo voz.'));
  }

  /* ---- Modo voz: STT + IA (paciente) + feedback ---- */
  function voiceMode(mount, item) {
    var transcript = []; // {role:'doctor'|'patient', text}
    var log = el('div', { class: 'voice-log' });
    var container = el('div', {});

    function apiHistory() {
      // doctor = user; patient = assistant (IA está no papel do paciente).
      return transcript.map(function (t) { return { role: t.role === 'doctor' ? 'user' : 'assistant', content: t.text }; });
    }

    function addTurn(role, text) {
      transcript.push({ role: role, text: text });
      var bubble = el('div', { class: 'vt ' + role }, [
        el('span', { class: 'vt-who' }, role === 'doctor' ? '👨‍⚕️ Você' : '🧑 Paciente'),
        el('span', {}, text),
        role === 'patient' ? UI.audioBtn(text) : null
      ]);
      log.appendChild(bubble);
      log.scrollTop = log.scrollHeight;
    }

    function patientOpen() {
      var opener = (item.dialogue && item.dialogue[0] && item.dialogue[0].patient) || 'Hello, doctor.';
      addTurn('patient', opener);
      if (TTS.available()) TTS.speak(opener, { lang: 'en-GB' });
    }

    var speakBtn = el('button', { class: 'btn primary' }, '🎤 Falar');
    var status = el('div', { class: 'muted small' }, '');
    speakBtn.addEventListener('click', function () {
      if (!STT.available()) { UI.mount(status, 'Reconhecimento de fala indisponível neste navegador.'); return; }
      speakBtn.disabled = true; status.textContent = 'Ouvindo… fale em inglês.';
      STT.listen({ lang: 'en-US', onResult: function (text) {
        speakBtn.disabled = false; status.textContent = '';
        if (!text) { status.textContent = 'Não captei. Tente de novo.'; return; }
        addTurn('doctor', text);
        status.textContent = 'Paciente respondendo…';
        AI.rolePlayReply(apiHistory(), item).then(function (reply) {
          status.textContent = '';
          addTurn('patient', reply);
          if (TTS.available()) TTS.speak(reply, { lang: 'en-GB' });
        }).catch(function (e) { status.textContent = 'Erro da IA: ' + e.message; });
      }, onError: function () { speakBtn.disabled = false; status.textContent = 'Microfone indisponível ou permissão negada.'; } });
    });

    var fbOut = el('div', {});
    var endBtn = el('button', { class: 'btn', onClick: function () {
      if (transcript.length < 2) { UI.mount(fbOut, el('div', { class: 'note' }, 'Fale ao menos uma vez antes de encerrar.')); return; }
      var text = transcript.map(function (t) { return (t.role === 'doctor' ? 'Doctor: ' : 'Patient: ') + t.text; }).join('\n');
      endBtn.disabled = true; UI.mount(fbOut, el('div', { class: 'muted' }, 'Gerando feedback do OET…'));
      AI.speakingFeedback(text, item).then(function (fb) {
        endBtn.disabled = false;
        UI.mount(fbOut, el('div', { class: 'card ai-card' }, [ el('div', { class: 'ai-head' }, '🤖 Feedback do OET (IA)'), renderMd(fb) ]));
        Progress.markDone('speaking', item.id); Progress.addXP(15);
      }).catch(function (e) { endBtn.disabled = false; UI.mount(fbOut, el('div', { class: 'no' }, 'Erro: ' + e.message)); });
    } }, 'Encerrar e receber feedback');

    function renderMd(text) {
      var wrap = el('div', { class: 'md' });
      (text || '').split('\n').forEach(function (line) {
        var t = line.trim(); if (!t) return;
        if (t.indexOf('## ') === 0) wrap.appendChild(el('h4', {}, t.slice(3)));
        else if (t.indexOf('- ') === 0) wrap.appendChild(el('div', { class: 'md-li' }, '• ' + t.slice(2)));
        else wrap.appendChild(el('p', {}, t));
      });
      return wrap;
    }

    UI.mount(mount, [
      UI.backLink('speaking', 'Speaking'),
      UI.sectionHeader('Role-play por voz (IA)', 'Você fala; a IA responde como paciente'),
      scenarioCard(item),
      el('div', { class: 'card' }, [ log, el('div', { class: 'row gap wrap' }, [ speakBtn, endBtn ]), status ]),
      fbOut
    ]);
    patientOpen();
  }

  function itemView(mount, item) {
    var voiceAvailable = AI.available() && STT.available();
    UI.mount(mount, [
      UI.backLink('speaking', 'Speaking'),
      UI.sectionHeader('Role-play', item.setting),
      scenarioCard(item),
      el('div', { class: 'card center' }, [
        el('p', {}, 'Escolha o modo de prática:'),
        el('div', { class: 'row gap wrap center' }, [
          el('a', { class: 'btn primary', href: '#/speaking/offline/' + item.id }, '💬 Diálogo por escolhas (offline)'),
          voiceAvailable
            ? el('a', { class: 'btn', href: '#/speaking/voice/' + item.id }, '🎤 Role-play por voz (IA)')
            : el('button', { class: 'btn disabled', title: 'Requer chave de IA online + microfone', disabled: true }, '🎤 Voz (requer IA + microfone)')
        ]),
        voiceAvailable ? null : el('div', { class: 'note small' }, ['O modo voz precisa de conexão, chave de IA (', el('a', { href: '#/settings' }, 'Configurações'), ') e microfone. O modo offline funciona sempre.'])
      ])
    ]);
  }

  function menu(mount) {
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('OET Speaking', 'Role-plays médico-paciente. ' + Progress.doneCount('speaking') + ' concluídos.'),
      el('div', { class: 'card' }, el('div', { class: 'item-list' }, data().map(function (it) {
        return el('a', { class: 'item-link', href: '#/speaking/item/' + it.id }, [
          el('span', {}, [ UI.pill(it.setting, 'set'), ' ', it.patient_card_pt.split(',')[0] ]),
          el('span', { class: 'item-status' }, Progress.isDone('speaking', it.id) ? '✓' : '›')
        ]);
      })))
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.speaking = function (mount, params) {
    if (params[0] === 'item') { var it = byId(params[1]); if (it) itemView(mount, it); else menu(mount); }
    else if (params[0] === 'offline') { var o = byId(params[1]); if (o) offlineMode(mount, o); else menu(mount); }
    else if (params[0] === 'voice') { var v = byId(params[1]); if (v) voiceMode(mount, v); else menu(mount); }
    else menu(mount);
  };
})();
