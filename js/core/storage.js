/* storage.js — persistência local (offline-first).
   Envolve o localStorage com serialização JSON e um prefixo de namespace.
   Toda a lógica de progresso, SRS, configurações e histórico passa por aqui. */
(function () {
  'use strict';
  var PREFIX = 'ingmed_';

  function key(k) { return PREFIX + k; }

  function get(k, def) {
    try {
      var raw = localStorage.getItem(key(k));
      if (raw === null || raw === undefined) return def;
      return JSON.parse(raw);
    } catch (e) {
      return def;
    }
  }

  function set(k, val) {
    try {
      localStorage.setItem(key(k), JSON.stringify(val));
      return true;
    } catch (e) {
      // Cota cheia ou modo privado — falha silenciosa, app continua funcionando.
      return false;
    }
  }

  function update(k, fn, def) {
    var cur = get(k, def);
    var next = fn(cur);
    set(k, next);
    return next;
  }

  function remove(k) {
    try { localStorage.removeItem(key(k)); } catch (e) {}
  }

  function keys() {
    var out = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var kk = localStorage.key(i);
        if (kk && kk.indexOf(PREFIX) === 0) out.push(kk.slice(PREFIX.length));
      }
    } catch (e) {}
    return out;
  }

  window.Store = { get: get, set: set, update: update, remove: remove, keys: keys };
})();
