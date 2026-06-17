/**
 * DESKNOTE — desknote-app.js
 * Interactions de la landing page.
 * Commenté en français pour faciliter l'explication.
 */


/* ════════════════════════════
   1. MENU MOBILE
════════════════════════════ */

var burger     = document.getElementById('burger');
var mobileMenu = document.getElementById('mobile-menu');
var mobileClose= document.getElementById('mobile-close');

// Ouvrir le menu
burger.addEventListener('click', function() {
  mobileMenu.classList.add('ouvert');
});

// Fermer le menu avec le bouton ✕
mobileClose.addEventListener('click', function() {
  fermerMenu();
});

// Fermer le menu (appelé aussi depuis les liens du menu)
function fermerMenu() {
  mobileMenu.classList.remove('ouvert');
}


/* ════════════════════════════
   2. NAVBAR AU SCROLL
════════════════════════════ */

var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ════════════════════════════
   3. ANIMATIONS AU SCROLL
   Les éléments .reveal
   apparaissent quand ils
   entrent dans l'écran.
════════════════════════════ */

var elementsReveal = document.querySelectorAll('.reveal');

var observateur = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observateur.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

elementsReveal.forEach(function(el) {
  observateur.observe(el);
});


/* ════════════════════════════
   4. FAQ ACCORDÉON
════════════════════════════ */

var faqBoutons = document.querySelectorAll('.faq-btn');

faqBoutons.forEach(function(bouton) {
  bouton.addEventListener('click', function() {

    var item = bouton.parentElement;
    var estOuvert = item.classList.contains('ouvert');

    // Fermer tous les items
    document.querySelectorAll('.faq-item').forEach(function(i) {
      i.classList.remove('ouvert');
    });

    // Ouvrir celui qui était fermé
    if (!estOuvert) {
      item.classList.add('ouvert');
    }

  });
});


/* ════════════════════════════
   5. LIEN ACTIF AU SCROLL
════════════════════════════ */

var sections = document.querySelectorAll('section[id]');
var navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
  var position = window.scrollY + 140;

  sections.forEach(function(section) {
    var debut = section.offsetTop;
    var fin   = debut + section.offsetHeight;

    if (position >= debut && position < fin) {
      navLinks.forEach(function(lien) {
        lien.classList.remove('actif');
      });
      var lienActif = document.querySelector('.nav-link[href="#' + section.id + '"]');
      if (lienActif) {
        lienActif.classList.add('actif');
      }
    }
  });
});
