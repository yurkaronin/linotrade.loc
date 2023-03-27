const productCardOptions = document.querySelectorAll('.product-card__options');
if (productCardOptions) {
  productCardOptions.forEach(option => {
    option.addEventListener('click', () => {
      option.classList.toggle('show');
    });
  });
};
