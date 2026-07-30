import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => {
    header.classList.toggle('bg-ink/90', window.scrollY > 40);
    header.classList.toggle('backdrop-blur-md', window.scrollY > 40);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function init() {
  initHeader();

  if (reducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  // hero: staggered rise of kicker, logo, tagline, CTAs
  gsap.fromTo(
    '[data-hero-item]',
    { autoAlpha: 0, y: 36 },
    { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out', delay: 0.15 }
  );

  // hero photo: slow Ken Burns drift
  document.querySelectorAll('[data-kenburns]').forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 1.08, xPercent: 1.5 },
      { scale: 1, xPercent: 0, duration: 9, ease: 'power1.out' }
    );
  });

  // scroll hint: gentle float
  gsap.to('[data-scroll-hint]', { y: 8, duration: 1.4, yoyo: true, repeat: -1, ease: 'sine.inOut' });

  // sections: fade-and-rise on scroll
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 48 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%' },
      }
    );
  });

  // grids: stagger children
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((grid) => {
    gsap.fromTo(
      grid.querySelectorAll('.gs-reveal'),
      { autoAlpha: 0, y: 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: { trigger: grid, start: 'top 80%' },
      }
    );
  });

  // large photos: subtle parallax, strength via data-parallax="<percent>"
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((img) => {
    const strength = parseFloat(img.dataset.parallax || '6');
    gsap.fromTo(
      img,
      { yPercent: -strength },
      {
        yPercent: strength,
        ease: 'none',
        scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  });

  // distance numerals: count up once visible
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseInt(el.dataset.count || '0', 10);
    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => {
        el.textContent = String(Math.round(counter.value));
      },
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
