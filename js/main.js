const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const modalDialog = document.querySelector('.modal-dialog');
const closeButtons = document.querySelectorAll('#button-close');

cartButton.addEventListener("click", function () {
  modal.classList.add('is-open');
});

for (let close of closeButtons) {
  close.addEventListener("click", function () {
    modal.classList.remove('is-open');
  });
};

// function toggleModal() {
//   modal.classList.toggle('is-open');
// }