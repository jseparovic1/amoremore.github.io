/** Builds a mailto: draft from the contact form - no backend involved. */
export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;

  // pre-select the apartment when arriving via ?apartment=Amore|More
  const wanted = new URLSearchParams(window.location.search).get('apartment');
  const select = form.querySelector<HTMLSelectElement>('select[name="apartment"]');
  if (wanted && select) {
    const match = [...select.options].find(
      (o) => o.value.toLowerCase() === wanted.toLowerCase()
    );
    if (match) select.value = match.value;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const dates = String(data.get('dates') || '').trim();
    const apartment = String(data.get('apartment') || '').trim();
    const message = String(data.get('message') || '').trim();

    const subjectParts = ['AmoreMore inquiry'];
    if (apartment) subjectParts.push(apartment);
    if (dates) subjectParts.push(dates);

    const bodyLines = [message, '', name];
    if (dates) bodyLines.push(`Dates: ${dates}`);
    if (apartment) bodyLines.push(`Apartment: ${apartment}`);

    const email = form.dataset.email!;
    const url = `mailto:${email}?subject=${encodeURIComponent(subjectParts.join(' - '))}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = url;
  });
}
