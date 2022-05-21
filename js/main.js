$(function () {
  $('.header__burger').on('click', function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('html').toggleClass('lock');
  });

  $('.menu__btn').on('click', function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('.popup').addClass('active');
  });

  $('.seo-reviews__tabs-top-item').on('click', function (e) {
    e.preventDefault();

    $('.seo-reviews__tabs-top-item').removeClass('seo-reviews__tabs-top-item--active');
    $(this).addClass('seo-reviews__tabs-top-item--active');

    $('.seo-reviews__tabs-content-item').removeClass('seo-reviews__tabs-content-item--active');
    $($(this).attr('href')).addClass('seo-reviews__tabs-content-item--active');
  });

  $('[data-collapse]').on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('collapse');

    $this.toggleClass('active');
  });

  let buttonContent = '';

  document.addEventListener('click', function (event) {
    console.log(event);
    if (!event.target.matches('.content_toggle')) return;

    const clickedButton = event.srcElement;
    const elems = clickedButton.parentNode.querySelectorAll('.content_block');

    elems.forEach((item) => {
      item.classList.toggle('hide');
      if (item.classList.contains('hide')) {
        clickedButton.innerHTML = buttonContent;
      } else {
        buttonContent = 'Показать всё';
        clickedButton.innerHTML = 'Скрыть';
      }
    });
    return false;
  });

  $('.intro__btn').on('click', function (event) {
    $('.popup').toggleClass('active');
    $('html').toggleClass('lock');
  });

  // ADDED SLIDERS
  new Swiper('.swiper1', {
    width: 1500,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    initialSlide: 0,
    slideToClickedSlide: true,
  });

  new Swiper('.swiper2', {
    // Optional parameters
    width: 1500,
    loop: false,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    // centeredSlides: true,
    initialSlide: 0,
    slideToClickedSlide: true,
  });

  new Swiper('.swiper3', {
    // Optional parameters
    width: 1500,
    loop: false,
    slidesPerView: 'auto',
    initialSlide: 0,
    slideToClickedSlide: true,
  });

  new Swiper('.swiper4', {
    breakpoints: {
      640: {
        enabled: true,
        // slideToClickedSlide: true,
        width: 1400,
        loop: false,
        slidesPerView: 'auto',
        initialSlide: 0,
      },
    }
    // slideToClickedSlide: true,
  });

  new Swiper('.swiper5', {
    spaceBetween: 20,
    width: 380,

    breakpoints: {
      960: {
        enabled: false,
        // slideToClickedSlide: true,
      },
      640: {
        enabled: true,
        loop: false,
        slideToClickedSlide: true,
      },
      320: {
        enabled: true,
        loop: false,
      },
    },
  });
});
// /.ADDED SLIDERS

// FIXED HEADER
$(function () {
  var header = $('#header'),
    introH = $('#intro').innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed header */
  checkScroll(scrollOffset);

  $(window).on('scroll', function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }
});
// /.FIXED HEADER



const formS = document.querySelectorAll('.form-data');
const popup = document.querySelector('.popup');
const popupThanks = document.querySelector('.popup__thanks');
const popupNotValid = document.querySelector('.popup__notValid');
const popupCloseNotValid = document.querySelector('.popup__closeValid');
const popupClose = document.querySelector('.popup__close');
const popupCloseThanks = document.querySelector('.popup__close-thanks');
const fullName = document.getElementById('site').value;
const phone = document.getElementById('phone').value;
const popupLinks = document.querySelectorAll('.popup-link');
// const btnSub = document.querySelector('.btn-submit-form');
const btnForm = document.querySelector('.btnForm');
// const btnIntro = document.querySelector('.btnIntro');
let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

let span = document.querySelector('.span');

async function fetchData() {
  try {
    const formData = {
      name: fullName,
      phone: phone,
    };
    // const res = await axios.post('https://ww1uzy2qda.api.quickmocker.com/illia', formData);
    // console.log(res);
    popup.classList.remove('active');
    popupThanks.classList.add('active');
    $('html').toggleClass('lock');
  } catch (error) {
    console.error(error);
  }
}

// document.addEventListener('click', function (event) {
//   event.preventDefault();
//   if (!event.target.matches('.btnForm')) return;
//   const clickedButton = event.srcElement;
//   const elems = clickedButton.parentNode.querySelectorAll('.btnForm');

//   elems.forEach(() => {
//     if (!validate(reg, inp.value)) {
//       notValid(inp, span, 'NOT WORKING');
//     } else {
//       valid(inp, span, '');
//       fetchData();
//     }
//   });

//   return false;
// });

const buttons = document.querySelectorAll(".btnForm");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let inp;
    // если содержимое нажатой кнолки ОСТАВИТЬ ЗАЯВКУ, в переменную inp записать содержимое значение инпута с необхожимым id
    if (buttons[i].innerHTML === "ОСТАВИТЬ ЗАЯВКУ") {
      inp = document.getElementById('phone');
    } else {
      inp = document.getElementById("phoneInPopup"); 
    }

    console.log('we are here')

    if (!validate(reg, inp.value)) {
      notValid(inp);
    } else {
      valid(inp);
      fetchData();
    }
  });
}

function validate(regex, inp) {
  console.log(regex, inp);

  return regex.test(inp);
}

function notValid(inp) {
  popupNotValid.classList.add('active');
  $('html').addClass('lock');
  inp.classList.add('is-invalid');
 
}

function valid(inp) {
  popupThanks.classList.add('active');
  inp.classList.remove('is-invalid');
  inp.classList.add('is-valid');
}

popupClose.onclick = function () {
  popup.classList.remove('active');
  $('html').removeClass('lock');
};

popupCloseThanks.onclick = function () {
  popupThanks.classList.remove('active');
  $('html').removeClass('lock');
};

popupCloseNotValid.onclick = function () {
  popupNotValid.classList.remove('active');
  $('html').removeClass('lock');
};
