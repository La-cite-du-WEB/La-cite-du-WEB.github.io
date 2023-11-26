const audio = new Audio("assets/sfx/flashbang.mp3");

const darkmode = () => {
  if (localStorage.getItem('darkmode') === 'true') {
    document.querySelector('body').classList.add('darkmode');
    document.querySelector('#darkmode-button span').textContent = "Flash Bang";
    document.querySelector("#darkmode-button iconify-icon").icon = "ph:sun-light";

  } else {
    document.querySelector('body').classList.remove('darkmode');
    document.querySelector('#darkmode-button span').textContent = "Dark Mode";
    document.querySelector('body').style.display = "none";
    setTimeout(() => {
      document.querySelector('body').style.display = "block";
    }, 200);
    document.querySelector("#darkmode-button iconify-icon").icon = "ph:moon-light";
  }
};

darkmode();

document.querySelector('#darkmode-button').addEventListener('click', () => {
  if (localStorage.getItem('darkmode') === 'false') {
    localStorage.setItem('darkmode', 'true');

  } else {
    audio.play();
    localStorage.setItem('darkmode', 'false');
  } darkmode();
});
