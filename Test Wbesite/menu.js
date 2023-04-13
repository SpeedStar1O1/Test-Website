
// Hamburger icon effect
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menu = document.querySelector('.menu');

  hamburgerIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});


