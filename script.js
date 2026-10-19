document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#nav');
  const yearEl = document.querySelector('#year');

  // Safe year update
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Guard menu logic: only attach if elements exist
  if (!menuToggle || !nav) return;

  // Set initial accessibility attributes
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-controls', 'nav');
  menuToggle.setAttribute('aria-label', 'Otwórz menu');
  nav.setAttribute('aria-hidden', 'true');

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Zamknij menu' : 'Otwórz menu'
    );
    nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });

  // Close nav when a link is clicked
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Otwórz menu');
      nav.setAttribute('aria-hidden', 'true');
    });
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-label', 'Otwórz menu');
      nav.setAttribute('aria-hidden', 'true');
      menuToggle.focus();
    }
  });
});
