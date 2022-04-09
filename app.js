const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  
  const header = document.querySelector("header");
  header.classList.toggle('active');
  
}

btnMobile.addEventListener('click', toggleMenu);



function removerMenu() {
  const header = document.querySelector("header");
  header.classList.remove('active');
}

