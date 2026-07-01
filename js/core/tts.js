/* tts.js — Text-to-Speech (Web Speech API).
   Usado para ouvir termos, frases e as consultas do OET Listening.
   Suporta controle de velocidade 0.7 / 0.85 / 1 (herda a regra da v3). */
(function () {
  'use strict';

  var voices = [];
  var preferred = null;

  function available() {
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  function loadVoices() {
    if (!available()) return;
    voices = window.speechSynthesis.getVoices() || [];
    // Prioriza vozes en-US/en-GB naturais.
    preferred = voices.filter(function (v) { return /^en(-|_)?(US|GB|AU)?/i.test(v.lang); });
  }

  if (available()) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  function pickVoice(lang) {
    lang = lang || 'en-US';
    if (!voices.length) loadVoices();
    var exact = voices.find(function (v) { return v.lang && v.lang.replace('_', '-').toLowerCase() === lang.toLowerCase(); });
    if (exact) return exact;
    if (preferred && preferred.length) return preferred[0];
    return null;
  }

  /* speak(text, { rate, lang, onend, onstart, onboundary })
     rate padrão 1. Cancela fala anterior antes de começar. */
  function speak(text, opts) {
    opts = opts || {};
    if (!available() || !text) { if (opts.onend) opts.onend(); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = opts.lang || 'en-US';
      u.rate = typeof opts.rate === 'number' ? opts.rate : 1;
      u.pitch = typeof opts.pitch === 'number' ? opts.pitch : 1;
      var v = pickVoice(u.lang);
      if (v) u.voice = v;
      if (opts.onstart) u.onstart = opts.onstart;
      if (opts.onend) u.onend = opts.onend;
      if (opts.onerror) u.onerror = opts.onerror;
      if (opts.onboundary) u.onboundary = opts.onboundary;
      window.speechSynthesis.speak(u);
      return u;
    } catch (e) {
      if (opts.onend) opts.onend();
    }
  }

  function stop() {
    if (available()) { try { window.speechSynthesis.cancel(); } catch (e) {} }
  }

  function speaking() {
    return available() && window.speechSynthesis.speaking;
  }

  window.TTS = {
    available: available,
    speak: speak,
    stop: stop,
    speaking: speaking,
    RATES: [
      { label: '0.7×', value: 0.7 },
      { label: '0.85×', value: 0.85 },
      { label: '1×', value: 1 }
    ]
  };
})();
