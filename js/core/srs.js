/* srs.js — Repetição espaçada (SM-2).
   Cada item (termo médico, abreviação, frase de comunicação) tem um "cartão"
   de agendamento. O SRS decide quando revisar de novo com base na qualidade
   da resposta (0-5). Guardado por item no Store, sob a chave "srs".

   Referência: algoritmo SM-2 (SuperMemo 2). */
(function () {
  'use strict';
  var DAY = 24 * 60 * 60 * 1000;

  function newCard(now) {
    now = now || Date.now();
    return { ef: 2.5, interval: 0, reps: 0, lapses: 0, due: now, last: 0 };
  }

  /* quality: 0..5 (0 = branco total, 5 = perfeito).
     UI usa 4 botões -> Errei(1), Difícil(3), Bom(4), Fácil(5). */
  function review(card, quality, now) {
    now = now || Date.now();
    card = card || newCard(now);
    var q = Math.max(0, Math.min(5, quality));

    if (q < 3) {
      // Lapso: reinicia o ciclo, revisa amanhã.
      card.reps = 0;
      card.interval = 1;
      card.lapses = (card.lapses || 0) + 1;
    } else {
      if (card.reps === 0) card.interval = 1;
      else if (card.reps === 1) card.interval = 6;
      else card.interval = Math.round(card.interval * card.ef);
      card.reps += 1;
    }

    // Ajuste do fator de facilidade.
    card.ef = card.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (card.ef < 1.3) card.ef = 1.3;

    card.last = now;
    card.due = now + card.interval * DAY;
    return card;
  }

  function isDue(card, now) {
    if (!card) return true;
    return card.due <= (now || Date.now());
  }

  /* Ordena ids de um baralho por prioridade de revisão:
     vencidos primeiro (mais atrasados na frente), depois os novos. */
  function schedule(cards, ids, now) {
    now = now || Date.now();
    var withCard = ids.map(function (id) {
      var c = cards[id];
      return { id: id, card: c, due: c ? c.due : 0, isNew: !c };
    });
    withCard.sort(function (a, b) {
      var ad = isDue(a.card, now), bd = isDue(b.card, now);
      if (ad !== bd) return ad ? -1 : 1;      // devidos antes
      if (a.isNew !== b.isNew) return a.isNew ? 1 : -1; // revisões antes de novos
      return a.due - b.due;
    });
    return withCard.map(function (x) { return x.id; });
  }

  function dueCount(cards, ids, now) {
    now = now || Date.now();
    var n = 0;
    for (var i = 0; i < ids.length; i++) {
      var c = cards[ids[i]];
      if (isDue(c, now)) n++;
    }
    return n;
  }

  window.SRS = {
    newCard: newCard,
    review: review,
    isDue: isDue,
    schedule: schedule,
    dueCount: dueCount,
    DAY: DAY
  };
})();
