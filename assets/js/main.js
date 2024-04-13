const charsHidden = document.querySelectorAll('.chars-hidden');
const charsBtn = document.querySelector('.chars-btn');
const show = 'show';

const toggleShow = (e) => {
  charsHidden[e.targetdataExpandChar].classList.toggle(show);
};

