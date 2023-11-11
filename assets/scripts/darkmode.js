const darkmodeButton = document.querySelector('#darkmode-button');
let darkmodeState = false;

darkmodeButton.addEventListener('click', () => {
  darkmodeState ? document.body.classList.remove('darkmode') : document.body.classList.add('darkmode');
  darkmodeState = !darkmodeState;
});