function ariaChange() {
  let aria = document.getElementById('main-nav__burger-button').getAttribute('aria-expanded');
  if (aria === 'true') {
    aria = 'false';
  }
  else {
    aria = 'true';
  }
  document.getElementById('main-nav__burger-button').setAttribute('aria-expanded', aria);
}

export default ariaChange;
