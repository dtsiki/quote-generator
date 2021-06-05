const closeModalButton = document.querySelector('.modal-close');
const openModalButton = document.querySelectorAll('.modal-open');
const modalContainer = document.querySelector('.modal');

const openModal = () => {
  modalContainer.classList.add('modal--active');
};

const closeModal = () => {
  modalContainer.classList.remove('modal--active');
};

document.addEventListener('DOMContentLoaded', () => {
  closeModalButton.onclick = closeModal;

  openModalButton.forEach((openModalBtn) => {
    openModalBtn.onclick = () => {
      openModal();
    };
  });
});
