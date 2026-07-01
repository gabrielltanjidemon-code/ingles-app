/* ui.js — Helpers de DOM e componentes reutilizáveis (vanilla).
   Sem framework: criação de elementos, escape, botão de áudio (TTS),
   seletor de velocidade, toasts, barras de progresso. */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class' || k === 'className') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k === 'dataset') Object.keys(v).forEach(function (d) { node.dataset[d] = v[d]; });
        else if (k.indexOf('on') === 0 && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
        else node.setAttribute(k, v);
      });
    }
    if (children != null) append(node, children);
    return node;
  }

  function append(node, children) {
    if (Array.isArray(children)) children.forEach(function (c) { append(node, c); });
    else if (children instanceof Node) node.appendChild(children);
    else if (children != null) node.appendChild(document.createTextNode(String(children)));
  }

  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }

  function mount(node, children) { clear(node); append(node, children); return node; }

  /* Botão de áudio: fala o texto em inglês; usa a velocidade atual do app. */
  function audioBtn(text, opts) {
    opts = opts || {};
    var b = el('button', {
      class: 'audio-btn', type: 'button', title: 'Ouvir', 'aria-label': 'Ouvir'
    }, opts.label || '🔊');
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var rate = opts.rate || (window.App && App.getRate ? App.getRate() : 1);
      if (!TTS.available()) { toast('Áudio (TTS) indisponível neste navegador.'); return; }
      TTS.speak(text, { rate: rate, lang: opts.lang || 'en-US' });
    });
    return b;
  }

  /* Seletor de velocidade 0.7 / 0.85 / 1 (herda regra da v3). */
  function speedSelector() {
    var wrap = el('div', { class: 'speed-selector', role: 'group', 'aria-label': 'Velocidade do áudio' });
    TTS.RATES.forEach(function (r) {
      var b = el('button', { type: 'button', class: 'speed-opt' }, r.label);
      if (window.App && App.getRate() === r.value) b.classList.add('active');
      b.addEventListener('click', function () {
        if (window.App) App.setRate(r.value);
        Array.prototype.forEach.call(wrap.children, function (c) { c.classList.remove('active'); });
        b.classList.add('active');
      });
      wrap.appendChild(b);
    });
    return wrap;
  }

  function progressBar(pct, label) {
    pct = Math.max(0, Math.min(100, Math.round(pct)));
    return el('div', { class: 'progress', title: (label || '') }, [
      el('div', { class: 'progress-fill', style: { width: pct + '%' } })
    ]);
  }

  function pill(text, cls) { return el('span', { class: 'pill ' + (cls || '') }, text); }

  var toastTimer = null;
  function toast(msg, ms) {
    var t = document.getElementById('toast');
    if (!t) {
      t = el('div', { id: 'toast', class: 'toast' });
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, ms || 2600);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sectionHeader(title, subtitle, right) {
    return el('div', { class: 'section-header' }, [
      el('div', {}, [
        el('h1', { class: 'section-title' }, title),
        subtitle ? el('p', { class: 'section-sub' }, subtitle) : null
      ]),
      right || null
    ]);
  }

  function backLink(to, label) {
    return el('a', { class: 'back-link', href: '#/' + to }, [ '‹ ', label || 'Voltar' ]);
  }

  window.UI = {
    esc: esc, el: el, append: append, clear: clear, mount: mount,
    audioBtn: audioBtn, speedSelector: speedSelector, progressBar: progressBar,
    pill: pill, toast: toast, shuffle: shuffle, sectionHeader: sectionHeader, backLink: backLink
  };
})();
