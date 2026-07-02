/* sw.js — Service worker: cache-first do app shell para funcionamento offline.
   Requisições a origens externas (ex.: API da Anthropic) NÃO são interceptadas. */
var CACHE = 'ingmed-v2';
var ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/styles.css',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'js/core/storage.js',
  'js/core/srs.js',
  'js/core/tts.js',
  'js/core/stt.js',
  'js/core/textmatch.js',
  'js/core/ui.js',
  'js/core/router.js',
  'js/core/progress.js',
  'js/core/badges.js',
  'js/core/ai.js',
  'data/medvocab.js',
  'data/medabbrev.js',
  'data/clinicalcomm.js',
  'data/oet_listening.js',
  'data/oet_reading.js',
  'data/oet_writing.js',
  'data/oet_speaking.js',
  'data/usmle_clinical.js',
  'js/modules/common.js',
  'js/modules/home.js',
  'js/modules/vocab.js',
  'js/modules/comm.js',
  'js/modules/listening.js',
  'js/modules/reading.js',
  'js/modules/writing.js',
  'js/modules/speaking.js',
  'js/modules/usmle.js',
  'js/modules/oet_mock.js',
  'js/modules/stats.js',
  'js/modules/settings.js',
  'js/app.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  // Não intercepta origens externas (deixa a API da IA ir direto à rede).
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        // Cacheia respostas válidas do mesmo domínio para uso offline futuro.
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // Offline: para navegação, devolve o app shell.
        if (req.mode === 'navigate') return caches.match('index.html');
      });
    })
  );
});
