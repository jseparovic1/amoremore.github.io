/**
 * Guest portal: client-side gate with a shared password. This keeps casual
 * visitors out; it is not real security - do not put secrets in the page.
 */
const PASSWORD = 'amoremore';
const AUTH_KEY = 'amoremore-guest';
const APARTMENT_KEY = 'amoremore-guest-apartment';

export function initGuestPortal() {
  const login = document.getElementById('guest-login');
  const choose = document.getElementById('guest-choose');
  const detail = document.getElementById('guest-detail');
  if (!login || !choose || !detail) return;

  const views = [login, choose, detail];
  const show = (view: HTMLElement) => {
    views.forEach((v) => v.classList.toggle('hidden', v !== view));
  };

  const render = () => {
    if (localStorage.getItem(AUTH_KEY) !== 'ok') return show(login);
    const apartment = localStorage.getItem(APARTMENT_KEY);
    if (apartment !== 'amore' && apartment !== 'more') return show(choose);
    detail
      .querySelectorAll<HTMLElement>('[data-guest-detail]')
      .forEach((el) => el.classList.toggle('hidden', el.dataset.guestDetail !== apartment));
    show(detail);
  };

  const form = document.querySelector<HTMLFormElement>('[data-guest-form]');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector<HTMLInputElement>('input[name="password"]');
    const error = document.getElementById('guest-error');
    if ((input?.value ?? '').trim().toLowerCase() === PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'ok');
      error?.classList.add('hidden');
      render();
    } else {
      error?.classList.remove('hidden');
      input?.select();
    }
  });

  document.querySelectorAll<HTMLElement>('[data-guest-apartment]').forEach((btn) =>
    btn.addEventListener('click', () => {
      localStorage.setItem(APARTMENT_KEY, btn.dataset.guestApartment!);
      render();
    })
  );
  document.querySelectorAll<HTMLElement>('[data-guest-switch]').forEach((btn) =>
    btn.addEventListener('click', () => {
      localStorage.removeItem(APARTMENT_KEY);
      render();
    })
  );
  document.querySelectorAll<HTMLElement>('[data-guest-logout]').forEach((btn) =>
    btn.addEventListener('click', () => {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(APARTMENT_KEY);
      render();
    })
  );

  render();
}
