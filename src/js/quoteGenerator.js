import { setRandomBackgroundColor } from './backgroundGenerator';
import { quotes } from './quotes';

const quotesLength = quotes.length;
const quoteBody = document.querySelector('.quote__body');

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
