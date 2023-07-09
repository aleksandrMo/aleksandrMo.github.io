const footerBtns = document.querySelectorAll('.footer__copy__category__small__btn');

for (const btn of footerBtns) {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('hide');
  });

  const ps = btn.parentElement.getElementsByTagName('p').length;
  btn.parentElement.style.maxHeight = ps * 33 + 26 + 'px';
}

const headerShadow = document.querySelector('.header__bg__shadow');
headerShadow.addEventListener('click', () => {
  deActiveNav();
});

const navBtn = document.querySelector('.nav__btn__active');
navBtn.addEventListener('click', () => {
  if (navBtn.classList.contains('active')) {
    deActiveNav();
  } else {
    deActiveNav();
    dataTable.classList.remove('input');
    navBtn.classList.add('active');
  }
});

const telBtn = document.querySelector('.tel__btn');
telBtn.addEventListener('click', () => {
  if (!popup.classList.contains('active')) {
    if (telBtn.classList.contains('active')) {
      deActiveNav();
    } else {
      deActiveNav();
      telBtn.classList.add('active');
    }
  }
});

const lngBtn = document.querySelector('.lng__btn');
lngBtn.addEventListener('click', () => {
  if (lngBtn.classList.contains('active')) {
    deActiveNav();
  } else {
    deActiveNav();
    lngBtn.classList.add('active');
  }
});

const burgerBtn = document.querySelector('.nav__burger');
burgerBtn.addEventListener('click', () => {
  if (burgerBtn.classList.contains('active')) {
    deActiveNav();
  } else {
    deActiveNav();
    burgerBtn.classList.add('active');
  }
});

const dataTable = document.querySelector('.header__table');
const inputBig = document.querySelector('.search__big');
const inputBigClose = document.querySelector('.search__big__del');
const searchSmallBtn = document.querySelector('.header__custom__input');
searchSmallBtn.addEventListener('click', () => {
  if (searchSmallBtn.classList.contains('active')) {
    if (inputBig !== document.activeElement && inputBigClose !== document.activeElement) {
      deActiveNav();
    }
  } else {
    deActiveNav();
    searchSmallBtn.classList.add('active');
  }
});
inputBig.addEventListener('input', () => {
  if (inputBig.value) dataTable.classList.add('input');
});

inputBigClose.addEventListener('click', () => {
  inputBig.value = '';
  inputBig.focus();
});

const navFirstBtn = document.querySelector('.nav__first');
navFirstBtn.addEventListener('click', () => {
  navFirstBtn.classList.toggle('active');
});

function deActiveNav() {
  navBtn.classList.remove('active');
  telBtn.classList.remove('active');
  lngBtn.classList.remove('active');
  burgerBtn.classList.remove('active');
  searchSmallBtn.classList.remove('active');
  navFirstBtn.classList.remove('active');
  inputSmall.value = '';
  inputBig.value = '';
}
function deActiveNavResize() {
  navBtn.classList.remove('active');
  telBtn.classList.remove('active');
  lngBtn.classList.remove('active');
  burgerBtn.classList.remove('active');
  navFirstBtn.classList.remove('active');
}

window.addEventListener('scroll', () => {
  deActiveNav();
});
window.addEventListener('resize', () => {
  deActiveNavResize();
  if (window.innerWidth <= 1280) {
    inputBig.value = '';
  } else inputSmall.value = '';
});

const searchCloseBtn = document.querySelector('.search__del');
const inputSmall = document
  .querySelector('.header__small__search__custom')
  .getElementsByTagName('input')[0];
searchCloseBtn.addEventListener('click', () => {
  inputSmall.value = '';
  inputSmall.focus();
});

const smallNabLists = document.querySelectorAll('.nav__has__list');
for (const list of smallNabLists) {
  const listBtn = list.querySelector('.nav__active__show__main');
  listBtn.addEventListener('click', () => {
    if (list.classList.contains('active')) {
      deActiveList();
    } else {
      deActiveList();
      list.classList.add('active');
      list.style.maxHeight =
        list.getElementsByTagName('a').length * 36 + listBtn.offsetHeight + 2 + 'px';
    }
  });

  if (list.classList.contains('active')) {
    list.style.maxHeight =
      list.getElementsByTagName('a').length * 36 + listBtn.offsetHeight + 2 + 'px';
  }
}

function deActiveList() {
  for (const list of smallNabLists) {
    list.style.maxHeight = '';
    list.classList.remove('active');
  }
}

let inputBigPos = inputBig.getBoundingClientRect();
const cont = document.querySelector('.cont');
const main = document.querySelector('.main');
document.documentElement.style.setProperty('--results-height', window.innerHeight - 165 + 'px');
document.documentElement.style.setProperty('--input-big-width', inputBig.offsetWidth + 'px');
document.documentElement.style.setProperty(
  '--input-big-left',
  inputBigPos.left - (main.offsetWidth - cont.offsetWidth) / 2 + 'px',
);

window.addEventListener('resize', () => {
  inputBigPos = inputBig.getBoundingClientRect();
  document.documentElement.style.setProperty('--results-height', window.innerHeight - 165 + 'px');
  document.documentElement.style.setProperty('--input-big-width', inputBig.offsetWidth + 'px');
  document.documentElement.style.setProperty(
    '--input-big-left',
    inputBigPos.left - (main.offsetWidth - cont.offsetWidth) / 2 + 'px',
  );
});

//popup
const popupBtns = document.querySelectorAll('.popup__open');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__content__text');
const popupBtnDone = document.querySelector('.popup__btn__done');
const popupDone = document.querySelector('.popup__content__done');
for (const btn of popupBtns) {
  btn.addEventListener('click', () => {
    popup.classList.add('active');
    popupForm.classList.add('active');
    popupDone.classList.remove('active');
    deActiveNav();
  });
}

popupBtnDone.addEventListener('click', () => {
  popupForm.classList.remove('active');
  popupDone.classList.add('active');
});

const popupBtnsClose = document.querySelectorAll('.popup__btn__close');
for (const btn of popupBtnsClose) {
  btn.addEventListener('click', popupClose);
}
const popupBg = document.querySelector('.popup__bg');
popupBg.addEventListener('click', popupClose);

function popupClose() {
  popup.classList.remove('active');
}
