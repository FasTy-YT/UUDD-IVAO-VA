(function() {
  const navLinks = document.querySelectorAll('.nav-tabs a');
  const pages = {
    home: document.getElementById('page-home'),
    leadership: document.getElementById('page-leadership'),
    training: document.getElementById('page-training'),
    fleet: document.getElementById('page-fleet')
  };

  function showPage(pageId) {
    navLinks.forEach(link => link.classList.remove('active'));
    Object.values(pages).forEach(page => page.classList.remove('active'));

    const activeLink = Array.from(navLinks).find(link => link.dataset.page === pageId);
    if (activeLink) activeLink.classList.add('active');
    if (pages[pageId]) pages[pageId].classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      showPage(this.dataset.page);
    });
  });

  window.addEventListener('hashchange', function() {
    const hash = window.location.hash.replace('#', '') || 'home';
    showPage(pages[hash] ? hash : 'home');
  });

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && pages[initialHash]) {
    showPage(initialHash);
  } else {
    showPage('home');
    if (history.replaceState) {
      history.replaceState(null, '', '#home');
    }
  }
})();