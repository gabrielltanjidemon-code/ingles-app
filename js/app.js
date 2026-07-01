/* app.js — Bootstrap do app: rate de áudio, rotas, navegação, service worker. */
(function () {
  'use strict';

  var App = {
    getRate: function () { return Store.get('rate', 1); },
    setRate: function (r) { Store.set('rate', r); }
  };
  window.App = App;

  var NAV = [
    { route: 'home', label: 'Início', icon: '🏠' },
    { route: 'vocab', label: 'Vocab', icon: '🧠' },
    { route: 'comm', label: 'Comunicação', icon: '💬' },
    { route: 'listening', label: 'Listening', icon: '🎧' },
    { route: 'reading', label: 'Reading', icon: '📖' },
    { route: 'writing', label: 'Writing', icon: '✉️' },
    { route: 'speaking', label: 'Speaking', icon: '🗣️' },
    { route: 'usmle', label: 'USMLE', icon: '⚕️' },
    { route: 'mock', label: 'Simulado', icon: '🏁' },
    { route: 'stats', label: 'Estatísticas', icon: '📊' },
    { route: 'settings', label: 'Config', icon: '⚙️' }
  ];

  function buildNav() {
    var nav = document.getElementById('sidenav');
    if (!nav) return;
    UI.clear(nav);
    nav.appendChild(UI.el('div', { class: 'nav-brand' }, [ UI.el('span', { class: 'brand-dot' }, '⚕️'), UI.el('span', {}, 'Inglês Médico') ]));
    NAV.forEach(function (n) {
      nav.appendChild(UI.el('a', { class: 'nav-link', href: '#/' + n.route, 'data-route': n.route }, [
        UI.el('span', { class: 'nav-icon' }, n.icon), UI.el('span', { class: 'nav-label' }, n.label)
      ]));
    });
  }

  function setActive(name) {
    var links = document.querySelectorAll('.nav-link');
    Array.prototype.forEach.call(links, function (a) {
      a.classList.toggle('active', a.getAttribute('data-route') === name);
    });
    // Fecha o menu móvel ao navegar.
    document.body.classList.remove('nav-open');
  }

  function registerRoutes() {
    Object.keys(window.Modules || {}).forEach(function (name) {
      Router.register(name, window.Modules[name]);
    });
    Router.setNotFound(function (mount) {
      UI.mount(mount, UI.el('div', { class: 'card center' }, [ UI.el('p', {}, 'Seção não encontrada.'), UI.el('a', { class: 'btn primary', href: '#/home' }, 'Ir para o início') ]));
    });
  }

  function boot() {
    var mount = document.getElementById('app');
    Router.setMount(mount);
    Router.setOnChange(function (r) { setActive(r.name); TTS.stop(); });
    buildNav();
    registerRoutes();
    Progress.recomputeStreak();
    Badges.check();

    // Menu móvel
    var burger = document.getElementById('burger');
    if (burger) burger.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
    var backdrop = document.getElementById('backdrop');
    if (backdrop) backdrop.addEventListener('click', function () { document.body.classList.remove('nav-open'); });

    // Indicador online/offline
    function netStatus() { document.body.classList.toggle('offline', navigator.onLine === false); }
    window.addEventListener('online', netStatus);
    window.addEventListener('offline', netStatus);
    netStatus();

    if (!location.hash) location.hash = '#/home';
    Router.start();

    // Service worker (PWA / offline)
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function (e) { /* offline não é crítico */ });
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
