import { messages } from './constants/messages';
import { addNotification } from './notifications';

const favouritesBody = document.querySelector('.favourites');
const favouritesClearButton = document.querySelector('.fav-clear');

export const isQuoteAlreadyFavourite = (quote) => {
  const favouriteQuotes = getFavourites();
  if (favouriteQuotes) return favouriteQuotes.indexOf(quote) > -1;
};

export const clearFavouritesBody = () => {
  favouritesBody.innerHTML = '';
};

export const showFavourites = () => {
  const favouriteQuotes = getFavourites();

  if (!favouriteQuotes?.length) {
    favouritesClearButton.classList.add('button--disabled');
    favouritesClearButton.disabled = true;
    favouritesBody.innerHTML = `<li class="favourites-message">You don't have any favourite quote</li>`;
    return;
  }

  favouritesClearButton.classList.remove('button--disabled');
  favouritesClearButton.disabled = false;
  favouriteQuotes.forEach((quote) => {
    favouritesBody.innerHTML += `
      <li class="favourites-item">
        <button class="favourites-button" quote="${quote}" onclick="">
          <span class="favourites-button__label">Remove</span>
        </button>
        <span class="favourites-quote">${quote}</span>
      </li>
    `;
  });

  addRemoveButtonEvents();
};

export const getFavourites = () => {
  const data = localStorage.getItem('favouriteQuotes');

  if (data) {
    return JSON.parse(JSON.stringify(JSON.parse(data)));
  }
};

const addRemoveButtonEvents = () => {
  const removeButtons = document.querySelectorAll('.favourites-button');

  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      removeFromFav(button.getAttribute('quote'));
    });
  });
};

const clearRemoveButtonEvents = () => {
  const removeButtons = document.querySelectorAll('.favourites-button');

  removeButtons.forEach((button) => {
    button.removeEventListener('click', () => {
      removeFromFav();
    });
  });
};

const removeFromFav = (quote) => {
  const favouriteQuotes = getFavourites();

  if (favouriteQuotes) {
    favouriteQuotes.splice(favouriteQuotes.indexOf(quote), 1);
    localStorage.setItem('favouriteQuotes', JSON.stringify(favouriteQuotes));
    clearFavouritesBody();
    showFavourites();
    addNotification(messages.REMOVED);
  }
};

const clearFavourites = () => {
  const favouriteQuotes = getFavourites();

  if (!favouriteQuotes?.length) {
    addNotification(messages.EMPTY);
    return;
  }
  clearFavouritesBody();
  localStorage.removeItem('favouriteQuotes');
  addNotification(messages.CLEARED);
  clearRemoveButtonEvents();
  showFavourites();
};

window.addEventListener('DOMContentLoaded', () => {
  favouritesClearButton.onclick = clearFavourites;
});
