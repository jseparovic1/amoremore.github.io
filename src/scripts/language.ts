/**
 * Language handling:
 * - remembers an explicit choice made through the picker
 * - on the first visit to a default-locale (en) page, redirects to the
 *   visitor's browser language if we have it
 * - open/close behaviour for the header language dropdown
 */
const KEY = 'amoremore-lang';

export function initLanguage() {
  const html = document.documentElement;
  const current = html.lang;
  const available = (html.dataset.locales ?? '').split(',').filter(Boolean);

  // the picker links already point at the current page in every locale,
  // so they double as the redirect targets
  const pickLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-lang-pick]')];
  pickLinks.forEach((a) =>
    a.addEventListener('click', () => localStorage.setItem(KEY, a.dataset.langPick!))
  );

  // close the dropdown when clicking outside of it
  document.addEventListener('click', (e) => {
    document.querySelectorAll<HTMLDetailsElement>('details[data-lang-menu][open]').forEach((menu) => {
      if (!menu.contains(e.target as Node)) menu.removeAttribute('open');
    });
  });

  // auto-detect only once, and only off the default locale, so shared
  // language-specific links and explicit choices are always respected
  if (localStorage.getItem(KEY) || current !== 'en') return;
  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  const guess = browserLangs
    .map((l) => l.slice(0, 2).toLowerCase())
    .find((l) => available.includes(l));
  if (!guess) return;
  localStorage.setItem(KEY, guess);
  if (guess === current) return;
  const target = pickLinks.find((a) => a.dataset.langPick === guess);
  if (target) window.location.replace(target.href);
}
