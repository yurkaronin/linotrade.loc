// кнопка каталога
  // Find the element with the class .catalog-btn-call
  const catalogBtn = document.getElementById('catalog-btn-call');

  // Track the click event
  catalogBtn.addEventListener('click', () => {
    // Add or remove the .open css class on the clicked element
    catalogBtn.classList.toggle('open');

    // Add or delete the .catalog-menu-open class to the body tag
    document.body.classList.toggle('catalog-menu-open');
  });
