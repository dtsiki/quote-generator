export const setRandomBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = '#' + randomColor;
};

export const resetBackgroundColor = () => {
  document.body.style.backgroundColor = '#8a2be2';
};
