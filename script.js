console.log("Вёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20\nИтоговая оценка: 100 баллов");

const burgerCnt = document.querySelector('.header__burger-cnt');
const burgerCross = document.querySelector('.header__burger-line');

const navBody = document.querySelector('.header__nav-body');

// 
function toggle(el) {
  el.style.top = (el.style.top == '0px') ? '-450px' : '0px'
}


let menuOpen = false;
burgerCnt.addEventListener('click', () => {
  if (!menuOpen) {
    burgerCnt.classList.add('open');
    toggle(navBody);
    menuOpen = true;
  } else {
    burgerCnt.classList.remove('open');
    menuOpen = false;
    toggle(navBody);
  }
  // burgerCnt.classList.toggle('cross');
});
