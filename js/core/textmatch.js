/* textmatch.js — Comparação de texto para ditado e note completion.
   Reaproveita a ideia do "motor de ditado" da v3: normaliza, compara
   palavra a palavra e devolve um diff para destacar acertos/erros. */
(function () {
  'use strict';

  function normalize(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[.,;:!?"“”()\[\]]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function words(s) {
    var n = normalize(s);
    return n ? n.split(' ') : [];
  }

  /* Aceita resposta se bate com o gabarito ou com qualquer alternativa aceitável. */
  function accepts(answer, gold, accept) {
    var a = normalize(answer);
    if (!a) return false;
    if (a === normalize(gold)) return true;
    if (accept && accept.length) {
      for (var i = 0; i < accept.length; i++) {
        if (a === normalize(accept[i])) return true;
      }
    }
    return false;
  }

  /* Similaridade 0..1 por palavras corretas na posição (para feedback parcial). */
  function similarity(answer, gold) {
    var a = words(answer), b = words(gold);
    if (!b.length) return a.length ? 0 : 1;
    var correct = 0;
    for (var i = 0; i < b.length; i++) {
      if (a[i] && a[i] === b[i]) correct++;
    }
    return correct / b.length;
  }

  /* Diff simples baseado em LCS para destacar palavra a palavra.
     Retorna lista de { word, status } com status: ok | missing | extra. */
  function diff(answer, gold) {
    var a = words(answer), b = words(gold);
    var n = a.length, m = b.length;
    var dp = [];
    for (var i = 0; i <= n; i++) { dp[i] = []; for (var j = 0; j <= m; j++) dp[i][j] = 0; }
    for (i = n - 1; i >= 0; i--) {
      for (j = m - 1; j >= 0; j--) {
        if (a[i] === b[j]) dp[i][j] = dp[i + 1][j + 1] + 1;
        else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
    var out = [];
    i = 0; j = 0;
    while (i < n && j < m) {
      if (a[i] === b[j]) { out.push({ word: b[j], status: 'ok' }); i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) { out.push({ word: a[i], status: 'extra' }); i++; }
      else { out.push({ word: b[j], status: 'missing' }); j++; }
    }
    while (i < n) { out.push({ word: a[i], status: 'extra' }); i++; }
    while (j < m) { out.push({ word: b[j], status: 'missing' }); j++; }
    return out;
  }

  window.TextMatch = {
    normalize: normalize,
    words: words,
    accepts: accepts,
    similarity: similarity,
    diff: diff
  };
})();
