import { setRandomBackgroundColor } from './backgroundGenerator';
import { messages } from './constants/messages';
import { quotes } from './constants/quotes';
import { clearFavouritesBody, getFavourites, isQuoteAlreadyFavourite, showFavourites } from './favouriteQuotes';
import { addNotification } from './notifications';

const nextQuoteButton = document.querySelector('.next-quote');
const favQuoteButton = document.querySelector('.fav-quote');
const quoteBody = document.querySelector('.quote__body');

const quotesLength = quotes.length;
let currentQuoteNumber = [];

const setQuoteBody = (content) => {
  quoteBody.innerHTML = content;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomQuoteNumber = () => {
  return getRandomNumber(0, quotesLength);
};

const setRandomQuote = () => {
  const quoteNumber = getRandomQuoteNumber();
  currentQuoteNumber = quoteNumber;
  setQuoteBody(quotes[quoteNumber]);
};

const loadQuote = () => {
  setRandomQuote();
  setRandomBackgroundColor();
};

const showNextQuote = () => {
  setQuoteBody('');
  loadQuote();
};

const addQuoteToFav = () => {
  if (isQuoteAlreadyFavourite(quotes[currentQuoteNumber])) {
    addNotification(messages.ALREADY_ADDED);
    return;
  }

  const currentFavouriteQuotes = getFavourites();

  if (currentFavouriteQuotes) {
    currentFavouriteQuotes.push(quotes[currentQuoteNumber]);
    localStorage.setItem('favouriteQuotes', JSON.stringify(currentFavouriteQuotes));
  } else localStorage.setItem('favouriteQuotes', JSON.stringify([quotes[currentQuoteNumber]]));

  addNotification(messages.ADDED);

  clearFavouritesBody();
  showFavourites();
};

window.addEventListener('DOMContentLoaded', () => {
  loadQuote();
  showFavourites();

  nextQuoteButton.onclick = showNextQuote;
  favQuoteButton.onclick = addQuoteToFav;
});
