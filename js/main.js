const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const closeButtons = document.querySelectorAll('#button-close');

cartButton.addEventListener("click", function () {
  modal.classList.add('is-open');
});

for (let close of closeButtons) {
  close.addEventListener("click", function () {
    modal.classList.remove('is-open');
  });
};

const buttons = document.querySelectorAll('.button-primary');

for (let button of buttons) {
  button.onmousedown = function () {
    button.classList.add('is-clicked');
  }
}

for (let button of buttons) {
  button.onmouseup = function () {
    button.classList.remove('is-clicked');
  }
  button.onmouseout = function () {
    button.classList.remove('is-clicked');
  }
}