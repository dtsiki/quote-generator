const notificationBody = document.querySelector('.notification__message');
const notificationButton = document.querySelector('.notification__button');
const notificationsContainer = document.querySelector('.notification');

export const addNotification = (message) => {
  notificationBody.innerHTML = message;
  notificationsContainer.classList.add('notification--active');
};

export const hideNotification = () => {
  notificationsContainer.classList.remove('notification--active');
  notificationBody.innerHTML = '';
};

window.addEventListener('DOMContentLoaded', () => {
  notificationButton.onclick = hideNotification;
});
