/* writing.js — Módulo 22: OET Writing.
   Case notes → carta profissional. Editor com contador de palavras (180–200),
   checklist ao vivo, carta-modelo revelável e correção por IA opcional (online + chave).
   Rascunhos salvos no Store. Tudo funciona offline (correção por IA é o único extra online). */
(function () {
  'use strict';
  var el = UI.el;

  function data() { return window.OET_WRITING || []; }
  function byId(id) { return data().find(function (x) { return x.id === id; }); }

  function countWords(s) { var m = (s || '').trim().match(/\S+/g); return m ? m.length : 0; }

  /* Mini-render de markdown simples (##, -, texto) devolvido pela IA. */
  function renderMarkdown(text) {
    var wrap = el('div', { class: 'md' });
    (text || '').split('\n').forEach(function (line) {
      var t = line.trim();
      if (!t) { wrap.appendChild(el('div', { class: 'md-sp' })); return; }
      if (t.indexOf('## ') === 0) wrap.appendChild(el('h4', {}, t.slice(3)));
      else if (t.indexOf('# ') === 0) wrap.appendChild(el('h3', {}, t.slice(2)));
      else if (t.indexOf('- ') === 0) wrap.appendChild(el('div', { class: 'md-li' }, '• ' + t.slice(2)));
      else wrap.appendChild(el('p', {}, t));
    });
    return wrap;
  }

  function exercise(mount, ex) {
    var draftKey = 'wdraft_' + ex.id;
    var editor = el('textarea', { class: 'letter-editor', placeholder: 'Escreva a carta aqui (corpo de 180–200 palavras)…', rows: 16 });
    editor.value = Store.get(draftKey, '');

    var counter = el('span', { class: 'wc' });
    function updateCount() {
      var n = countWords(editor.value);
      counter.textContent = n + ' palavras';
      counter.className = 'wc ' + (n >= 180 && n <= 200 ? 'ok' : (n > 0 ? 'warn' : ''));
    }
    editor.addEventListener('input', function () { Store.set(draftKey, editor.value); updateCount(); });
    updateCount();

    var checklist = el('div', { class: 'checklist' }, (ex.checklist_pt || []).map(function (c, i) {
      var cb = el('input', { type: 'checkbox' });
      var key = 'wcheck_' + ex.id + '_' + i;
      cb.checked = Store.get(key, false);
      cb.addEventListener('change', function () { Store.set(key, cb.checked); });
      return el('label', { class: 'check-item' }, [ cb, el('span', {}, c) ]);
    }));

    var modelWrap = el('div', { class: 'model-letter hidden' });
    var revealBtn = el('button', { class: 'btn', onClick: function () {
      if (modelWrap.classList.contains('hidden')) {
        UI.mount(modelWrap, [ el('h4', {}, 'Carta-modelo (' + (ex.word_count || '') + ')'), el('pre', { class: 'letter-model' }, ex.model_letter_en) ]);
        modelWrap.classList.remove('hidden');
        revealBtn.textContent = 'Ocultar carta-modelo';
      } else { modelWrap.classList.add('hidden'); revealBtn.textContent = 'Revelar carta-modelo'; }
    } }, 'Revelar carta-modelo');

    var aiOut = el('div', { class: 'ai-out' });
    var aiBtn = el('button', { class: 'btn primary' }, '🤖 Corrigir com IA');
    aiBtn.addEventListener('click', function () {
      if (!AI.hasKey()) { UI.mount(aiOut, el('div', { class: 'note' }, ['A correção por IA é opcional. Adicione sua chave em ', el('a', { href: '#/settings' }, 'Configurações'), '.'])); return; }
      if (!AI.isOnline()) { UI.mount(aiOut, el('div', { class: 'note' }, 'Você está offline. A correção por IA precisa de conexão.')); return; }
      var letter = editor.value.trim();
      if (countWords(letter) < 40) { UI.mount(aiOut, el('div', { class: 'note' }, 'Escreva a carta primeiro (pelo menos alguns parágrafos).')); return; }
      aiBtn.disabled = true; UI.mount(aiOut, el('div', { class: 'muted' }, 'Avaliando pelos critérios do OET…'));
      AI.correctWriting(letter, ex).then(function (fb) {
        aiBtn.disabled = false;
        UI.mount(aiOut, el('div', { class: 'card ai-card' }, [ el('div', { class: 'ai-head' }, '🤖 Feedback do OET (IA)'), renderMarkdown(fb) ]));
        Progress.addXP(15);
        if (ex.letter_type === 'referral') Badges.unlock('first_referral');
        Progress.markDone('writing', ex.id);
      }).catch(function (e) {
        aiBtn.disabled = false;
        UI.mount(aiOut, el('div', { class: 'no' }, 'Erro: ' + e.message));
      });
    });

    var markDoneBtn = el('button', { class: 'btn', onClick: function () {
      Progress.markDone('writing', ex.id); Progress.addXP(10);
      if (ex.letter_type === 'referral') Badges.unlock('first_referral');
      UI.toast('Exercício marcado como concluído.');
    } }, 'Marcar como concluído');

    UI.mount(mount, [
      UI.backLink('writing', 'Writing'),
      UI.sectionHeader('OET Writing · ' + ex.letter_type, 'Para: ' + ex.recipient),
      el('div', { class: 'card' }, [
        el('h4', {}, 'Case notes'),
        el('p', { class: 'case-notes' }, ex.case_notes),
        el('div', { class: 'kp' }, [ el('strong', {}, 'Pontos-chave a incluir: '), el('span', {}, (ex.key_points || []).join('; ')) ]),
        ex.omit && ex.omit.length ? el('div', { class: 'kp muted' }, [ el('strong', {}, 'O que omitir: '), (ex.omit || []).join('; ') ]) : null
      ]),
      el('div', { class: 'card' }, [
        el('div', { class: 'editor-head' }, [ el('h4', {}, 'Sua carta'), counter ]),
        editor,
        el('div', { class: 'note small' }, 'No OET, o corpo deve ter 180–200 palavras (saudação e assinatura não contam).')
      ]),
      el('div', { class: 'card' }, [ el('h4', {}, 'Checklist de correção'), checklist ]),
      el('div', { class: 'row gap wrap' }, [ aiBtn, revealBtn, markDoneBtn ]),
      aiOut,
      modelWrap
    ]);
  }

  function menu(mount) {
    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('OET Writing', 'Transforme case notes em carta (referral / discharge / transfer). ' + Progress.doneCount('writing') + ' concluídos.'),
      AI.hasKey() ? null : el('div', { class: 'note' }, ['Dica: a correção por IA é opcional e roda online. Configure a chave em ', el('a', { href: '#/settings' }, 'Configurações'), '. O restante funciona offline.']),
      el('div', { class: 'card' }, el('div', { class: 'item-list' }, data().map(function (ex) {
        return el('a', { class: 'item-link', href: '#/writing/item/' + ex.id }, [
          el('span', {}, [ UI.pill(ex.letter_type, 'lt'), ' ', ex.recipient.split(',')[0] ]),
          el('span', { class: 'item-status' }, Progress.isDone('writing', ex.id) ? '✓' : '›')
        ]);
      })))
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.writing = function (mount, params) {
    if (params[0] === 'item') { var ex = byId(params[1]); if (ex) exercise(mount, ex); else menu(mount); }
    else menu(mount);
  };
})();
