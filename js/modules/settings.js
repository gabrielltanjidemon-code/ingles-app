/* settings.js — Configurações: velocidade de áudio, tutor de IA (chave + modelo),
   e gestão de dados. Tudo opcional; o núcleo funciona offline sem chave. */
(function () {
  'use strict';
  var el = UI.el;

  function exportData() {
    var dump = {};
    Store.keys().forEach(function (k) { dump[k] = Store.get(k, null); });
    var blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = el('a', { href: url, download: 'ingles-medico-progresso.json' });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function render(mount) {
    var keyInput = el('input', { class: 'note-input wide', type: 'password', placeholder: 'sk-ant-…', value: AI.getKey() });
    var modelSel = el('select', { class: 'select' }, AI.MODELS.map(function (m) {
      var o = el('option', { value: m.id }, m.label); if (m.id === AI.getModel()) o.selected = true; return o;
    }));
    var statusBox = el('div', { class: 'ai-test' });

    function testKey() {
      if (!keyInput.value.trim()) { statusBox.className = 'ai-test no'; statusBox.textContent = 'Insira uma chave primeiro.'; return; }
      AI.setKey(keyInput.value); AI.setModel(modelSel.value);
      statusBox.className = 'ai-test'; statusBox.textContent = 'Testando…';
      AI.chat([{ role: 'user', content: 'Reply with the single word: OK' }], null, { max_tokens: 10 })
        .then(function () { statusBox.className = 'ai-test ok'; statusBox.textContent = 'Conexão OK ✓ (' + AI.getModel() + ')'; })
        .catch(function (e) { statusBox.className = 'ai-test no'; statusBox.textContent = 'Falhou: ' + e.message; });
    }

    UI.mount(mount, [
      UI.backLink('home', 'Início'),
      UI.sectionHeader('Configurações', 'Ajustes do app'),

      el('div', { class: 'card' }, [
        el('h3', {}, '🔊 Áudio (TTS)'),
        el('p', { class: 'muted' }, 'Velocidade padrão para ouvir termos, frases e consultas.'),
        UI.speedSelector(),
        TTS.available()
          ? el('button', { class: 'btn small', onClick: function () { TTS.speak('The patient presented with shortness of breath.', { rate: (window.App && App.getRate()) || 1 }); } }, '▶️ Testar voz')
          : el('div', { class: 'note' }, 'TTS indisponível neste navegador.')
      ]),

      el('div', { class: 'card' }, [
        el('h3', {}, '🤖 Tutor de IA (opcional, online)'),
        el('p', { class: 'muted' }, 'Usado apenas para corrigir cartas do Writing e conduzir o Speaking por voz. ' +
          'A chave é da Claude API (Anthropic) e fica só no seu navegador. Sem chave, todo o resto funciona offline.'),
        el('label', { class: 'field-label' }, 'Chave da API (x-api-key)'),
        keyInput,
        el('label', { class: 'field-label' }, 'Modelo'),
        modelSel,
        el('div', { class: 'row gap wrap' }, [
          el('button', { class: 'btn primary', onClick: function () { AI.setKey(keyInput.value); AI.setModel(modelSel.value); UI.toast('Configurações de IA salvas.'); } }, 'Salvar'),
          el('button', { class: 'btn', onClick: function () { AI.setKey(''); keyInput.value = ''; UI.toast('Chave removida.'); } }, 'Remover chave'),
          el('button', { class: 'btn', onClick: testKey }, 'Testar conexão')
        ]),
        statusBox,
        el('div', { class: 'note small' }, ['Como obter uma chave: ', el('a', { href: 'https://console.anthropic.com/', target: '_blank', rel: 'noopener' }, 'console.anthropic.com'), '. O uso da API é cobrado pela Anthropic conforme o consumo.'])
      ]),

      el('div', { class: 'card' }, [
        el('h3', {}, '💾 Dados'),
        el('p', { class: 'muted' }, 'Seu progresso fica salvo neste dispositivo (localStorage).'),
        el('div', { class: 'row gap wrap' }, [
          el('button', { class: 'btn', onClick: exportData }, 'Exportar progresso'),
          el('button', { class: 'btn danger', onClick: function () {
            if (confirm('Isto apagará todo o seu progresso neste dispositivo. Continuar?')) {
              Store.keys().forEach(function (k) { Store.remove(k); });
              UI.toast('Progresso apagado.'); Router.go('home');
            }
          } }, 'Apagar tudo')
        ])
      ]),

      el('div', { class: 'card muted small' }, [
        el('p', {}, 'Este app é treino de inglês médico. Ele não substitui o estudo clínico e não garante aprovação no OET/USMLE — o conteúdo médico das provas vem do seu estudo.'),
        el('p', {}, 'Nenhum termo, dose ou fato clínico foi inventado; na dúvida, priorizou-se corretude sobre quantidade.')
      ])
    ]);
  }

  window.Modules = window.Modules || {};
  window.Modules.settings = function (mount) { render(mount); };
})();
