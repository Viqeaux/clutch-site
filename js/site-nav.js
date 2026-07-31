// Site-wide navigation: a floating wax seal button (bottom-right of every
// page) that pops open into a small fan of links. Injected via JS so the
// markup/behavior lives in one place instead of being copy-pasted into
// every HTML file.
(function () {
  const NAV_LINKS = [
    { href: 'index.html', label: 'Archive', files: ['index.html', ''] },
    { href: 'meet-the-clutch.html', label: 'Meet The Clutch', files: ['meet-the-clutch.html'] },
    { href: 'how-its-made.html', label: "How It's Made", files: ['how-its-made.html'] },
    { href: 'toolkit/', label: 'DM Toolkit', files: [] },
  ];

  function currentFile() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1);
  }

  // Synthesized "reveal" sound — a warm, rising choir-like swell instead of
  // a percussive jingle. A handful of detuned voices glide up into a soft
  // chord, colored through a vocal-formant-ish filter, with a light
  // shimmer riding on top. No audio file needed/downloaded.
  function playChestOpenSound() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!window.__clutchAudioCtx) window.__clutchAudioCtx = new Ctx();
      const ctx = window.__clutchAudioCtx;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const end = now + 1.5;

      // Formant-ish filter gives the swell a vocal "ahh" color instead of
      // sounding like a plain synth chord.
      const formant = ctx.createBiquadFilter();
      formant.type = 'bandpass';
      formant.frequency.setValueAtTime(750, now);
      formant.Q.setValueAtTime(1.3, now);

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      masterGain.gain.linearRampToValueAtTime(0.55, now + 0.24);
      masterGain.gain.setValueAtTime(0.55, now + 0.38);
      masterGain.gain.exponentialRampToValueAtTime(0.001, end);
      masterGain.connect(formant).connect(ctx.destination);

      // A small choir of detuned voices rising up into a soft chord.
      const voices = [
        { freq: 220.0, detune: -7 },
        { freq: 220.0, detune: 7 },
        { freq: 329.63, detune: -4 },
        { freq: 440.0, detune: 4 },
      ];

      voices.forEach((v) => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(v.freq * 0.88, now);
        osc.frequency.exponentialRampToValueAtTime(v.freq, now + 0.4);
        osc.detune.setValueAtTime(v.detune, now);

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(5, now);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(3, now);
        lfo.connect(lfoGain).connect(osc.detune);
        lfo.start(now);
        lfo.stop(end);

        const voiceGain = ctx.createGain();
        voiceGain.gain.setValueAtTime(0.16, now);
        osc.connect(voiceGain).connect(masterGain);
        osc.start(now);
        osc.stop(end);
      });

      // A light shimmer that fades in just after the swell starts.
      const shimmer = ctx.createOscillator();
      shimmer.type = 'sine';
      shimmer.frequency.setValueAtTime(1760, now);
      const shimmerGain = ctx.createGain();
      shimmerGain.gain.setValueAtTime(0, now);
      shimmerGain.gain.linearRampToValueAtTime(0.05, now + 0.45);
      shimmerGain.gain.exponentialRampToValueAtTime(0.0001, end);
      shimmer.connect(shimmerGain).connect(ctx.destination);
      shimmer.start(now);
      shimmer.stop(end);
    } catch (e) {
      // Audio is a nice-to-have — never let it break navigation.
    }
  }

  function init() {
    const file = currentFile();
    const items = NAV_LINKS.filter((l) => !l.files.includes(file));
    if (items.length === 0) return;

    const nav = document.createElement('div');
    nav.className = 'site-nav';

    const menu = document.createElement('div');
    menu.className = 'site-nav-menu';

    items.forEach((link, i) => {
      const a = document.createElement('a');
      a.className = 'site-nav-item';
      a.href = link.href;
      a.textContent = link.label;
      a.style.setProperty('--tx', `${-(8 + i * 22)}px`);
      a.style.setProperty('--ty', `${-(78 + i * 68)}px`);
      a.style.setProperty('--delay', `${i * 0.06}s`);
      menu.appendChild(a);
    });

    const seal = document.createElement('button');
    seal.type = 'button';
    seal.className = 'site-nav-seal';
    seal.setAttribute('aria-label', 'Site navigation');
    seal.setAttribute('aria-expanded', 'false');
    seal.innerHTML = `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" stroke-width="3"/>
        <path d="M50 20 L58 42 L82 42 L62 56 L70 78 L50 64 L30 78 L38 56 L18 42 L42 42 Z" stroke-width="2.6" stroke-linejoin="round"/>
      </svg>
    `;

    function close() {
      nav.classList.remove('open');
      seal.setAttribute('aria-expanded', 'false');
    }

    function toggle() {
      const opening = !nav.classList.contains('open');
      nav.classList.toggle('open', opening);
      seal.setAttribute('aria-expanded', String(opening));
      if (opening) playChestOpenSound();
    }

    seal.addEventListener('click', (e) => {
      e.stopPropagation();
      toggle();
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    nav.appendChild(menu);
    nav.appendChild(seal);
    document.body.appendChild(nav);

    // Hide the seal while a lightbox (reader or portrait) is open — its
    // zoom controls sit in the same corner, and there's no need to jump
    // to another page mid-read anyway.
    const overlays = document.querySelectorAll('.lightbox-overlay');
    if (overlays.length > 0) {
      const updateVisibility = () => {
        const anyOpen = [...overlays].some((o) => !o.hidden);
        nav.classList.toggle('nav-hidden', anyOpen);
        if (anyOpen) close();
      };
      overlays.forEach((o) => {
        new MutationObserver(updateVisibility).observe(o, { attributes: true, attributeFilter: ['hidden'] });
      });
      updateVisibility();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
