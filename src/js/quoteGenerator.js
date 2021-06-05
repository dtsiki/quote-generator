import { setRandomBackgroundColor } from './backgroundGenerator';
import { clearFavouritesBody, getFavourites, isQuoteAlreadyFavourite, showFavourites } from './favouriteQuotes';
import { quotes } from './quotes';

const nextQuoteButton = document.querySelector('.next-quote');
const favQuoteButton = document.querySelector('.fav-quote');
const quoteBody = document.querySelector('.quote__body');

const quotesLength = quotes.length;
let currentQuoteNumber = [];

export const setQuoteBody = (content) => {
  quoteBody.innerHTML = content;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomQuoteNumber = () => {
  return getRandomNumber(0, quotesLength);
};

export const setRandomQuote = () => {
  const quoteNumber = getRandomQuoteNumber();
  currentQuoteNumber = quoteNumber;
  setQuoteBody(quotes[quoteNumber]);
};

export const loadQuote = () => {
  setRandomQuote();
  setRandomBackgroundColor();
};

export const showNextQuote = () => {
  setQuoteBody('');
  loadQuote();
};

export const addQuoteToFav = () => {
  if (isQuoteAlreadyFavourite(quotes[currentQuoteNumber])) return;

  let currentFavouriteQuotes = getFavourites();

  if (currentFavouriteQuotes) {
    currentFavouriteQuotes.push(quotes[currentQuoteNumber]);
    localStorage.setItem('favouriteQuotes', JSON.stringify(currentFavouriteQuotes));
  } else localStorage.setItem('favouriteQuotes', JSON.stringify([quotes[currentQuoteNumber]]));

  clearFavouritesBody();
  showFavourites();
};

window.addEventListener('DOMContentLoaded', () => {
  loadQuote();
  showFavourites();

  nextQuoteButton.onclick = showNextQuote;
  favQuoteButton.onclick = addQuoteToFav;
});
