/* js/main.js — Shared across all pages */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky nav ── */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── Hamburger ── */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll Reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => ro.observe(el));

  /* ── Dropdown click toggle (for touch/click on desktop) ── */
  document.querySelectorAll('.has-drop > a').forEach(link => {
    link.addEventListener('click', function(e) {
      const parent = this.closest('.has-drop');
      const dropdown = parent.querySelector('.dropdown');
      if (!dropdown) return;
      // If the link has a real destination (not just #), allow nav on second click
      const isOpen = parent.classList.contains('open');
      // Close all others
      document.querySelectorAll('.has-drop.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) {
        e.preventDefault();
        parent.classList.add('open');
      }
    });
  });
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.has-drop')) {
      document.querySelectorAll('.has-drop.open').forEach(el => el.classList.remove('open'));
    }
  });

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
