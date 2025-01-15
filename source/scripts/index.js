/* в этот файл добавляет скрипты*/
const buttonWrapper = document.querySelector('.button-wrapper');
const burgerButton = document.querySelector('.burger-button');
const navigationList = document.querySelector('.navigation__list');

if(navigationList.classList[1] === 'navigation__list--show') {
  navigationList.classList.remove('navigation__list--show');
  burgerButton.classList.remove('burger-button--hide');
}

buttonWrapper.addEventListener('click', () => {

  burgerButton.classList.toggle('burger-button--show');
  navigationList.classList.toggle('navigation__list--show');
});
