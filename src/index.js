import { loadQuote, showNextQuote } from './js/quoteGenerator';

import 'core-js';
import './scss/main.scss';
import './js/hello.js';

const nextQuoteButton = document.querySelector('.next-quote');

window.onload = function() {
  loadQuote();

  nextQuoteButton.onclick = showNextQuote;
};
