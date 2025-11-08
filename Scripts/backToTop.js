(function() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const showAt = 200;

  function show() { btn.classList.add('show'); }
  function hide() { btn.classList.remove('show'); }

  window.addEventListener('scroll', () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    y > showAt ? show() : hide();
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.gsap && (window.ScrollToPlugin || (window.gsap.plugins && window.gsap.plugins.ScrollToPlugin))) {
      try { gsap.registerPlugin(ScrollToPlugin); } catch(e){}
      gsap.to(window, { duration: 0.7, ease: 'power2.out', scrollTo: { y: 0 } });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
  });
})();