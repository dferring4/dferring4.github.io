/* ===== Digitize DFW — shared script ===== */
(function () {
  // current year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // mobile nav toggle
  var t = document.getElementById('navToggle'),
      m = document.getElementById('menu');
  if (t && m) {
    t.addEventListener('click', function () {
      var open = m.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    m.querySelectorAll('a').forEach(function (a) {
      // don't close when tapping a dropdown parent on mobile
      if (!a.parentElement.classList.contains('has-drop')) {
        a.addEventListener('click', function () { m.classList.remove('open'); });
      }
    });
  }

  // scroll reveals
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // email obfuscation — any element with class "js-email"
  var user = 'david', dom = 'digitizedfw.com';
  var mail = 'mailto:' + user + '@' + dom + '?subject=Digitizing%20quote';
  document.querySelectorAll('.js-email').forEach(function (b) {
    b.setAttribute('href', mail);
  });
})();
