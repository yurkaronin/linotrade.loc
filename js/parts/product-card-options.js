const productCardOptions = document.querySelectorAll('.product-card__options');

if (productCardOptions) {
  productCardOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Закрыть все остальные элементы перед открытием выбранного
      productCardOptions.forEach(otherOption => {
        if (otherOption !== option) {
          otherOption.classList.remove('show');
        }
      });

      // Открыть или закрыть выбранный элемент
      option.classList.toggle('show');
    });
  });
}
