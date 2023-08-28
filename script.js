let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('box-x');
    navlist.classList.toggle('open');
};

const sr = scrollReveal({
    distance: '65px',
    duration: 2600,
    dealy: 450,
    reset: true
});

sr.reveal('.hero-text', { dealy: 200, origin: 'top' });
sr.reveal('.hero-image', { dealy: 450, origin: 'top' });
sr.reveal('.icons', { dealy: 500, origin: 'left' });
sr.reveal('.scroll-down', { dealy: 200, origin: 'right' });