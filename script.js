// FAQ — comportamiento acordeón exclusivo
document.querySelectorAll('.faq details').forEach((el) => {
  el.addEventListener('toggle', () => {
    if (el.open) {
      document.querySelectorAll('.faq details').forEach((other) => {
        if (other !== el) other.open = false;
      });
    }
  });
});

// Frame picker (BLANCO / NEGRO) — estado visual
document.querySelectorAll('.frame').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.frame').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
  });
});

// Año actual en footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
