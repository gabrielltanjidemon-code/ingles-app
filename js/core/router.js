/* router.js — Roteador SPA por hash (offline, sem dependências).
   Rotas: #/rota/param. Cada módulo registra um handler que recebe o
   elemento-container e os parâmetros. */
(function () {
  'use strict';

  var routes = {};
  var notFound = null;
  var onChange = null;
  var mountEl = null;

  function register(name, handler) { routes[name] = handler; }
  function setNotFound(fn) { notFound = fn; }
  function setMount(el) { mountEl = el; }
  function setOnChange(fn) { onChange = fn; }

  function parse() {
    var h = (location.hash || '#/').replace(/^#/, '');
    var parts = h.split('/').filter(Boolean); // ['', 'vocab', 'x'] -> ['vocab','x']
    var name = parts[0] || 'home';
    var params = parts.slice(1).map(decodeURIComponent);
    return { name: name, params: params };
  }

  function resolve() {
    var r = parse();
    var handler = routes[r.name] || notFound;
    if (mountEl) mountEl.scrollTop = 0;
    if (typeof handler === 'function') {
      try { handler(mountEl, r.params); }
      catch (e) {
        console.error('Erro ao renderizar rota', r.name, e);
        if (mountEl) mountEl.innerHTML = '<div class="card"><p>Ocorreu um erro ao abrir esta seção.</p></div>';
      }
    }
    if (onChange) onChange(r);
  }

  function go(name, params) {
    var path = '#/' + name;
    if (params && params.length) path += '/' + params.map(encodeURIComponent).join('/');
    if (location.hash === path) resolve(); // força re-render se for a mesma rota
    else location.hash = path;
  }

  function start() {
    window.addEventListener('hashchange', resolve);
    resolve();
  }

  window.Router = {
    register: register, setNotFound: setNotFound, setMount: setMount,
    setOnChange: setOnChange, go: go, start: start, parse: parse, resolve: resolve
  };
})();
