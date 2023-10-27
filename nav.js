const navBtn = document.querySelector('#menu-btn'); // expands modible view
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links'); // ul

navBtn.addEventListener('click', () => {
  navLinks.classList.add('activated');
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  !isExpanded && nav.classList.add('active');
})

document.querySelectorAll('.nav-link').forEach
(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})


