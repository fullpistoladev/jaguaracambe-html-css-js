
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  
  const header = document.querySelector("header");
  header.classList.toggle('active');
  const active = header.classList.contains('active');
  
}

btnMobile.addEventListener('click', toggleMenu);
