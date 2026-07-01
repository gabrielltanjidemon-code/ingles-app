/* stt.js — Speech-to-Text (Web Speech API / SpeechRecognition).
   Usado para treino de fala clínica (Comunicação clínica e OET Speaking).
   Degrada com elegância: se indisponível, os módulos oferecem alternativa
   por escolha/escrita. */
(function () {
  'use strict';

  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function available() { return !!SR; }

  /* listen({ lang, interim, onResult, onPartial, onError, onEnd })
     Retorna um objeto { stop } para encerrar manualmente. */
  function listen(opts) {
    opts = opts || {};
    if (!SR) { if (opts.onError) opts.onError('unsupported'); return { stop: function () {} }; }
    var rec = new SR();
    rec.lang = opts.lang || 'en-US';
    rec.interimResults = opts.interim !== false;
    rec.continuous = !!opts.continuous;
    rec.maxAlternatives = 1;

    var finalText = '';

    rec.onresult = function (ev) {
      var interim = '';
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        var r = ev.results[i];
        if (r.isFinal) finalText += r[0].transcript;
        else interim += r[0].transcript;
      }
      if (opts.onPartial) opts.onPartial((finalText + ' ' + interim).trim());
    };
    rec.onerror = function (ev) { if (opts.onError) opts.onError(ev.error || 'error'); };
    rec.onend = function () { if (opts.onResult) opts.onResult(finalText.trim()); if (opts.onEnd) opts.onEnd(finalText.trim()); };

    try { rec.start(); } catch (e) { if (opts.onError) opts.onError('start-failed'); }

    return {
      stop: function () { try { rec.stop(); } catch (e) {} },
      abort: function () { try { rec.abort(); } catch (e) {} }
    };
  }

  window.STT = { available: available, listen: listen };
})();
