// console.log("Вёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20\nИтоговая оценка: 100 баллов");

console.log("Оценка 85 балллов:\nВёрстка соответствует макету. Ширина экрана 390px +48\nблок <header> +6\nсекция preview +9\nсекция steps +9\nсекция destinations +9\nсекция stories +9\nблок <footer> +6\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nнет полосы прокрутки при ширине страницы от 1440рх до 390px +7\nнет полосы прокрутки при ширине страницы от 390px до 320рх +8\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22\nпри ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку плавно появляется адаптивное меню +4\nадаптивное меню соответствует макету +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4");


const headerWrapper = document.querySelector('.header__nav-wrapper');
const active2 = document.querySelector('.active2');
const burgerCnt = document.querySelector('.header__burger-cnt');
const burgerCross = document.querySelector('.header__burger-line');

const navBody = document.querySelector('.header__nav-body');
const navItems = document.querySelectorAll('.header__nav-item');
const dotS = document.querySelectorAll('.destinations__dot');
const dotOne = document.querySelector('.destinations__dot');


// 
function toggle(el) {
  el.style.top = (el.style.top == '-43px') ? '-450px' : '-43px'
}
function toggleZero(el) {
  el.style.top = (el.style.top == '0px') ? '0px' : '0px'
}

let menuOpen = false;
burgerCnt.addEventListener('click', () => {
  if (!menuOpen) {
    burgerCnt.classList.add('open');
    toggle(navBody);
    menuOpen = true;
    headerWrapper.classList.toggle('active2');
  } else {
    burgerCnt.classList.remove('open');
    menuOpen = false;
    headerWrapper.classList.toggle('active2');
    toggle(navBody);
  }
  // burgerCnt.classList.toggle('cross');
});

// close murger menu if u clicked on any value in it
for (let navItem of navItems) {
  navItem.addEventListener('click', () => {
    burgerCnt.classList.remove('open');
    menuOpen = false;
    toggle(navBody);
  })
}
headerWrapper.addEventListener('click', () => {
  burgerCnt.classList.remove('open');
  menuOpen = false;
  toggle(navBody);
  headerWrapper.classList.remove('active2');
})


// add dots
if (window.innerWidth < 768) {
  for (let dot of dotS) {
    dot.classList.remove('active-dot');
  }
  dotOne.classList.add('active-dot');
};

