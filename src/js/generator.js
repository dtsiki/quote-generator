import { quotes } from './quotes';

const quotesLength = quotes.length;
const quoteBody = document.querySelector('.quote__body');

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomQuoteNumber = () => {
  return getRandomNumber(0, quotesLength);
};

const setRandomQuote = () => {
  const quoteNumber = getRandomQuoteNumber();
  quoteBody.innerHTML += quotes[quoteNumber];
};

window.onload = function() {
  setRandomQuote();
};
