(function () {
  var ROWS = 2;
  var galleries = Array.prototype.slice.call(document.querySelectorAll('.gallery'));

  function columnCount(gallery) {
    var cols = getComputedStyle(gallery).gridTemplateColumns;
    return cols && cols !== 'none' ? cols.split(' ').length : 1;
  }

  galleries.forEach(function (gallery) {
    var items = Array.prototype.slice.call(gallery.querySelectorAll('.gallery__item'));
    var expanded = false;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-more';
    button.textContent = 'View More';
    gallery.insertAdjacentElement('afterend', button);

    function update() {
      var limit = expanded ? items.length : columnCount(gallery) * ROWS;
      items.forEach(function (item, i) {
        item.classList.toggle('gallery__item--hidden', i >= limit);
      });
      button.hidden = expanded || items.length <= limit;
    }

    function expand() {
      expanded = true;
      update();
    }

    button.addEventListener('click', expand);
    gallery._expand = expand;

    window.addEventListener('resize', update);
    update();
  });

  // Reveal items targeted by a URL hash (e.g. homepage slideshow links).
  function revealHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var target = id && document.getElementById(id);
    if (!target || !target.classList.contains('gallery__item--hidden')) return;
    target.closest('.gallery')._expand();
    target.scrollIntoView();
  }

  window.addEventListener('hashchange', revealHash);
  revealHash();
})();
