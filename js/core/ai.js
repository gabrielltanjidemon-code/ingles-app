/* ai.js — Tutor de IA OPCIONAL (online, com chave do usuário).
   Só é usado em dois recursos: correção de cartas do OET Writing e
   condução por voz do OET Speaking. TODO o núcleo do app funciona
   offline sem chave — este módulo nunca é obrigatório.

   Usa a Claude API (Anthropic) direto do navegador com a chave que o
   próprio usuário cola nas Configurações. Nada é enviado a lugar nenhum
   sem chave e sem ação explícita do usuário. */
(function () {
  'use strict';

  var ENDPOINT = 'https://api.anthropic.com/v1/messages';
  var VERSION = '2023-06-01';

  var MODELS = [
    { id: 'claude-opus-4-8', label: 'Claude Opus 4.8 (melhor)' },
    { id: 'claude-sonnet-5', label: 'Claude Sonnet 5 (equilíbrio)' },
    { id: 'claude-haiku-4-5', label: 'Claude Haiku 4.5 (rápido/barato)' }
  ];

  function getKey() { return (Store.get('aiKey', '') || '').trim(); }
  function setKey(k) { Store.set('aiKey', (k || '').trim()); }
  function getModel() { return Store.get('aiModel', 'claude-opus-4-8'); }
  function setModel(m) { Store.set('aiModel', m); }
  function hasKey() { return !!getKey(); }
  function isOnline() { return navigator.onLine !== false; }
  function available() { return hasKey() && isOnline(); }

  /* Chamada base à Messages API. messages = [{role, content}] (texto simples). */
  function chat(messages, system, opts) {
    opts = opts || {};
    if (!hasKey()) return Promise.reject(new Error('Sem chave de IA configurada.'));
    if (!isOnline()) return Promise.reject(new Error('Você está offline.'));

    var body = {
      model: getModel(),
      max_tokens: opts.max_tokens || 1500,
      messages: messages
    };
    if (system) body.system = system;

    return fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': getKey(),
        'anthropic-version': VERSION,
        // Necessário para chamar a API direto do navegador (CORS).
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify(body)
    }).then(function (r) {
      if (!r.ok) {
        return r.json().catch(function () { return null; }).then(function (j) {
          var msg = (j && j.error && j.error.message) || ('Erro HTTP ' + r.status);
          throw new Error(msg);
        });
      }
      return r.json();
    }).then(function (data) {
      var text = '';
      if (data && data.content) {
        data.content.forEach(function (b) { if (b.type === 'text') text += b.text; });
      }
      return text.trim();
    });
  }

  /* Corrige uma carta do OET Writing contra os critérios do exame.
     Devolve feedback em PT-BR. */
  function correctWriting(letter, exercise) {
    var system =
      'Você é um examinador experiente do OET (Occupational English Test) para Medicina. ' +
      'Avalie a carta do candidato pelos critérios oficiais do OET Writing: Purpose, Content, ' +
      'Conciseness & Clarity, Genre & Style, Organisation & Layout, Language (gramática, vocabulário, ortografia). ' +
      'A carta profissional deve ter 180–200 palavras no corpo. ' +
      'Responda SEMPRE em português do Brasil, de forma objetiva e encorajadora. ' +
      'Não invente fatos clínicos. Estruture assim (markdown):\n' +
      '## Nota estimada\n(uma linha, ex.: "B / ~350 — bom, com ajustes")\n' +
      '## Pontos fortes\n- ...\n## A melhorar\n- ... (aponte trechos e como reescrever)\n' +
      '## Gramática e vocabulário\n- ...\n## Contagem de palavras\n(número aproximado e se está na faixa)';

    var ctx = 'CASO (case notes fornecidas ao candidato):\n' + (exercise.case_notes || '') +
      '\n\nTIPO DE CARTA: ' + (exercise.letter_type || '') +
      '\nDESTINATÁRIO: ' + (exercise.recipient || '') +
      '\nPONTOS-CHAVE ESPERADOS: ' + ((exercise.key_points || []).join('; ')) +
      '\n\nCARTA DO CANDIDATO:\n' + letter;

    return chat([{ role: 'user', content: ctx }], system, { max_tokens: 1600 });
  }

  /* Conduz um turno de role-play do OET Speaking: a IA responde como paciente.
     history = [{role, content}] já no formato da API. */
  function rolePlayReply(history, scenario) {
    var system =
      'Você está ajudando um médico (usuário) a treinar o OET Speaking. ' +
      'Assuma o papel do PACIENTE descrito abaixo e responda em INGLÊS, em linguagem ' +
      'de paciente leigo (não técnica), curto e natural, mantendo-se no personagem. ' +
      'Reaja de forma realista às falas do médico (preocupação, dúvidas, alívio). ' +
      'Não conduza a consulta — apenas responda como paciente.\n\n' +
      'CENÁRIO: ' + (scenario.setting || '') + '\n' +
      'PACIENTE: ' + (scenario.patient_card_pt || '');
    return chat(history, system, { max_tokens: 300 });
  }

  /* Feedback final do role-play nos critérios do OET Speaking. */
  function speakingFeedback(transcript, scenario) {
    var system =
      'Você é examinador do OET Speaking. Avalie o desempenho do médico (usuário) no role-play ' +
      'pelos critérios: Relationship-building, Understanding & incorporating the patient\'s perspective, ' +
      'Providing structure, Information gathering, Information giving, além dos critérios linguísticos ' +
      '(pronúncia, fluência, gramática/expressão). Responda em português do Brasil, curto e prático (markdown):\n' +
      '## Destaques\n- ...\n## A melhorar\n- ...\n## Linguagem útil para a próxima vez\n- ...';
    var content = 'CENÁRIO: ' + (scenario.setting || '') + ' — ' + (scenario.patient_card_pt || '') +
      '\nTAREFAS: ' + ((scenario.tasks || []).join('; ')) +
      '\n\nTRANSCRIÇÃO (médico = você):\n' + transcript;
    return chat([{ role: 'user', content: content }], system, { max_tokens: 900 });
  }

  window.AI = {
    MODELS: MODELS,
    getKey: getKey, setKey: setKey, getModel: getModel, setModel: setModel,
    hasKey: hasKey, isOnline: isOnline, available: available,
    chat: chat, correctWriting: correctWriting,
    rolePlayReply: rolePlayReply, speakingFeedback: speakingFeedback
  };
})();
