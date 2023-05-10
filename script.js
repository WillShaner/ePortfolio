// Toggle the dropdown menu on mobile screens
const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
  console.log('hit')
});
