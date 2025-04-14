const buttons = document.querySelectorAll('.red_button');
const cards = document.querySelectorAll('.card');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const card = cards[index];
        card.classList.toggle('active');

        button.textContent = card.classList.contains('active') ? 'Read Less' : 'Read More';
    });
});

document.querySelectorAll('.scroll').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  

let BtnButton = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overley-menu')

BtnButton.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})


