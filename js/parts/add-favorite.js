const favoriteButtons = document.querySelectorAll('.add-favorite');

  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('like');
    });
  });
