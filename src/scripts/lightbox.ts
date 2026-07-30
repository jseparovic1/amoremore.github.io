/** Minimal dependency-free lightbox with keyboard and swipe support. */
export function initLightbox() {
  const gallery = document.querySelector<HTMLElement>('[data-lightbox-gallery]');
  const overlay = document.querySelector<HTMLElement>('[data-lightbox]');
  if (!gallery || !overlay) return;

  const image = overlay.querySelector<HTMLImageElement>('[data-lightbox-img]')!;
  const counter = overlay.querySelector<HTMLElement>('[data-lightbox-counter]')!;
  const buttons = [...gallery.querySelectorAll<HTMLButtonElement>('[data-lightbox-index]')];

  // resolve the largest srcset candidate of each thumbnail for crisp full-screen viewing
  const sources = buttons.map((btn) => {
    const img = btn.querySelector('img')!;
    const srcset = img.getAttribute('srcset');
    if (!srcset) return { src: img.currentSrc || img.src, alt: img.alt };
    const candidates = srcset.split(',').map((entry) => {
      const [url, width] = entry.trim().split(/\s+/);
      return { url, width: parseInt(width || '0', 10) };
    });
    candidates.sort((a, b) => b.width - a.width);
    return { src: candidates[0].url, alt: img.alt };
  });

  let current = 0;
  let touchStartX = 0;

  function render() {
    const { src, alt } = sources[current];
    image.src = src;
    image.alt = alt;
    counter.textContent = `${current + 1} / ${sources.length}`;
  }

  function open(index: number) {
    current = index;
    render();
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
    document.body.style.overflow = '';
  }

  const step = (dir: number) => {
    current = (current + dir + sources.length) % sources.length;
    render();
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => open(parseInt(btn.dataset.lightboxIndex!, 10)));
  });
  overlay.querySelector('[data-lightbox-close]')!.addEventListener('click', close);
  overlay.querySelector('[data-lightbox-prev]')!.addEventListener('click', () => step(-1));
  overlay.querySelector('[data-lightbox-next]')!.addEventListener('click', () => step(1));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  overlay.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  overlay.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 48) step(dx > 0 ? -1 : 1);
  }, { passive: true });
}
