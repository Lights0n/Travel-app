// console.log("Вёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20\nИтоговая оценка: 100 баллов");

// console.log("Оценка 85 балллов:\nВёрстка соответствует макету. Ширина экрана 390px +48\nблок <header> +6\nсекция preview +9\nсекция steps +9\nсекция destinations +9\nсекция stories +9\nблок <footer> +6\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nнет полосы прокрутки при ширине страницы от 1440рх до 390px +7\nнет полосы прокрутки при ширине страницы от 390px до 320рх +8\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22\nпри ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку плавно появляется адаптивное меню +4\nадаптивное меню соответствует макету +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4");

console.log(`Ваша оценка - 125 баллов 
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа) 

2) Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) 

3) Анимации плавного перемещения для слайдера 

4) логин попап соответствует верстке его закрытие происходит при клике вне попапа 

5) логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег) 

6) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) 

`);

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
  if (window.innerWidth < 768) {
    el.style.top = (el.style.top == '-43px') ? '-450px' : '-43px'
  }
  function toggleZero(el) {
    el.style.top = (el.style.top == '0px') ? '0px' : '0px'
  }
};

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

// ====================   popup
const body = document.querySelector('body')
const popup = document.getElementById('popup');
const loginButton = document.getElementById('login-button');
// wrapper out of popup content
const popWrapper = document.getElementsByClassName('popup__wrapper');
const popOuter = document.querySelector('.popup__bgc-close');
const account = document.getElementById('account');

const signInButton = document.getElementById('popup__sign-in');
const registerButton = document.getElementById('popup-register');

function openPopup(q) {
  popup.classList.add('open');
  body.style.overflow = 'hidden';
  popOuter.classList.add('active2');

  // dont let the <a> lead us anywhere
  q.preventDefault();
}

function closePopup() {
  popup.classList.remove('open');
  body.style.overflow = 'auto';
  popOuter.classList.remove('active2');
}

popOuter.addEventListener('click', () => {
  closePopup()
})

loginButton.addEventListener('click', (el) => {
  openPopup(el);
})

account.addEventListener('click', (el) => {
  openPopup(el);
})

// =======================  make some blocks vanish
registerButton.addEventListener('click', (el) => {

  registerButton.innerHTML == 'Register'
    ? registerButton.innerHTML = 'Log in'
    : registerButton.innerHTML = 'Register';

  const welcomeText = document.querySelector('.popup__welcome');
  welcomeText.innerHTML == "Log in to your account"
    ? welcomeText.innerHTML = 'Create account'
    : welcomeText.innerHTML = 'Log in to your account';

  const haveAcc = document.querySelector('#no-acc');
  haveAcc.innerHTML == 'Don’t have an account?'
    ? haveAcc.innerHTML = 'Already have an account?'
    : haveAcc.innerHTML = 'Don’t have an account?';

  const popupSignIn = document.querySelector('#popup-signIn');
  popupSignIn.innerHTML == 'Sign In'
    ? popupSignIn.innerHTML = 'Sign Up'
    : popupSignIn.innerHTML = 'Sign In';

  const sotials = document.querySelector('.popup__sotials');
  sotials.classList.toggle('register');

  const sotialsOr = document.querySelector('.popup__or');
  sotialsOr.classList.toggle('register');

  const forgotPass = document.querySelector('.popup__pass-forgot');
  forgotPass.classList.toggle('register');
})

signInButton.addEventListener('click', (el) => {
  let emailInputVal = document.getElementById('input-email').value;
  let passwordInputVal = document.getElementById('input-password').value;
  alert(`E-mail: \n${emailInputVal}\n\nPassword: \n${passwordInputVal}`);
})


// =======================   slider

const slierRow = document.querySelector('.destinations__row');
const sliderItem = document.querySelectorAll('.destinations__item');
const sliderDots = document.querySelectorAll('.destinations__dot');

const rowStyles = getComputedStyle(slierRow);
const singleRowStyleGap = rowStyles.gap;

let currentSlide = 1
let currOffset = 0;

// sliders gap = 60px
let SliderWidth = sliderItem[0].offsetWidth + 60;
// при стрикай, закоменть, поменяй экран и стрикалка собъется, т.к. размер смещения только один раз определяется.
window.addEventListener('resize', function () {
  SliderWidth = sliderItem[0].offsetWidth + 60;
});

const leftAr = document.querySelector('.destinations__arrow-left');
const rightAr = document.querySelector('.destinations__arrow-right');

endCheck = function () {
  // rightAr.style.opacity = '1';
  // leftAr.style.opacity = '1';
  if (currentSlide > sliderItem.length - 1) {
    currentSlide = 0;
    // leftAr.style.opacity = '0.5';
  }
  else if (currentSlide < 0) {
    currentSlide = sliderItem.length - 1;
    // rightAr.style.opacity = '0.5';
  }
  else if (currentSlide == sliderItem.length - 1) {
    // rightAr.style.opacity = '0.5';
  } else if (currentSlide == 0) {
    // leftAr.style.opacity = '0.5';
  }
}

function movement(item, index) {
  sliderItem.forEach((el) => { el.classList.remove('active-dest') })
  sliderDots.forEach((el) => { el.classList.remove('active-dot') })
  currentSlide = index;
  // change shidt amount
  endCheck();
  currOffset = -(SliderWidth * (index - 1));

  slierRow.style.transform = `translateX(${currOffset}px)`;

  sliderDots[index].classList.add('active-dot');
  sliderItem[index].classList.add('active-dest');
}

// 768px+ device width slider
sliderItem.forEach((slider, index) => {
  slider.addEventListener('click', () => {
    movement(slider, index);
  })
})

// dots slider
if (window.innerWidth > 767.98) {
  sliderDots.forEach((dot, iDot) => {
    dot.addEventListener('click', () => {
      movement(dot, iDot);
    })
  })
}


if (window.innerWidth < 768) {
  sliderDots.forEach((dot, iDot) => {
    dot.addEventListener('click', () => {
      sliderItem.forEach((el) => { el.classList.remove('active-dest') })
      sliderDots.forEach((el) => { el.classList.remove('active-dot') })
      endCheck()
      currentSlide = iDot;
      sliderDots[iDot].classList.add('active-dot');
      sliderItem[iDot].classList.add('active-dest');
    })
  })
}

// arrows
// start from 1-st slide
if (window.innerWidth < 767.98) { currentSlide = 0 };

leftAr.addEventListener('click', () => {
  sliderItem.forEach((el) => { el.classList.remove('active-dest') })
  sliderDots.forEach((el) => { el.classList.remove('active-dot') })
  currentSlide -= 1;
  endCheck();
  sliderDots[currentSlide].classList.add('active-dot');
  sliderItem[currentSlide].classList.add('active-dest');
})
rightAr.addEventListener('click', () => {
  sliderItem.forEach((el) => { el.classList.remove('active-dest') })
  sliderDots.forEach((el) => { el.classList.remove('active-dot') })
  currentSlide += 1;
  endCheck();
  sliderDots[currentSlide].classList.add('active-dot');
  sliderItem[currentSlide].classList.add('active-dest');
})