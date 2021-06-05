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

  if (!favouriteQuotes) {
    favouritesBody.innerHTML += `<li class="favourites-message">You don't have any favourite quote</li>`;
    return;
  }

  favouriteQuotes.map((quote) => {
    favouritesBody.innerHTML += `
      <li class="favourites-item">
        <button class="favourites-button" quote="${quote}">
          <span class="favourites-button__label">Remove</span>
        </button>
        <span class="favourites-quote">${quote}</span>
      </li>
    `;
  });
};

export const getFavourites = () => {
  const data = localStorage.getItem('favouriteQuotes');

  if (data) {
    return JSON.parse(JSON.stringify(JSON.parse(data)));
  }
};

export const removeFromFav = (quote) => {
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
  clearFavouritesBody();
  showFavourites();
  localStorage.removeItem('favouriteQuotes');
  addNotification(messages.CLEARED);
};

window.addEventListener('DOMContentLoaded', () => {
  favouritesClearButton.onclick = clearFavourites;
  let removeButtons = document.querySelectorAll('.favourites-button');

  removeButtons.forEach((button) => {
    button.onclick = () => {
      removeFromFav(button.getAttribute('quote'));
    };
  });
});
