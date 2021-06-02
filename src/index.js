import { setRandomBackgroundColor } from './js/backgroundGenerator';
import { setRandomQuote } from './js/quoteGenerator';

import 'core-js';
import './scss/main.scss';
import './js/hello.js';

window.onload = function() {
  setRandomQuote();
  setRandomBackgroundColor();
};
