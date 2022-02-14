const swiper = new Swiper('.main-slider', {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.main-slider__arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
  });

  let burger = document.querySelector('.menu-burger');
  let closeMenu = document.querySelector('.header__menu-close');
  let menuMobile = document.querySelector('.header');

  burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
  })

  menuMobile.addEventListener('click', () => {
    menuMobile.style.display = 'none';
  })

  //воспроизведение видео по клику нф кнопку
  const modalWindow = document.querySelector('.modal');
  const buttonModal= document.querySelector('.main__button-play');

  buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
  })

  //закрытие окна по клику вне его

  modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    
    if (!isModal) {
      modalWindow.classList.remove('active');
    }
  })

