const darkmode = () => {
  if (localStorage.getItem('darkmode') === 'true') {
    document.querySelector('body').classList.add('darkmode');

  } else {
    document.querySelector('body').classList.remove('darkmode');
  }
};

darkmode();

document.querySelector('#darkmode-button').addEventListener('click', () => {
  if (localStorage.getItem('darkmode') === 'false') {
    localStorage.setItem('darkmode', 'true');

  } else {
    localStorage.setItem('darkmode', 'false');
  }

  darkmode();
});