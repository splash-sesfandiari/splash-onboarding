// Nav active state
const page = document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach(link => {
  if (link.dataset.nav === page) link.classList.add('is-active');
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Application form submit
const form = document.getElementById('apply-form');
const successEl = document.getElementById('apply-success');
const errorEl = document.getElementById('form-error');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) valid = false;
    });
    if (!valid) {
      errorEl.hidden = false;
      errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    errorEl.hidden = true;
    document.getElementById('apply-form-container').hidden = true;
    successEl.hidden = false;
    successEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
