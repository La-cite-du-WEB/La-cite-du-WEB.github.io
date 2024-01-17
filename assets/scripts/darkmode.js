const audio = new Audio("assets/sfx/flashbang.mp3");
const themes = ['Dark', 'Light'];
const texts = ['Flash Bang', 'Dark Mode'];
const icons = ['ph:sun-light', 'ph:moon-light'];

document.getElementById("darkmode-button").addEventListener('click', () => {
  let actual_theme = document.documentElement.getAttribute("theme-override")
                    || localStorage.getItem('theme-override')
                    || 'Dark';
  let other_theme = +(actual_theme==='Dark');

  document.documentElement.setAttribute('theme-override', themes[other_theme]);
  document.querySelector('#darkmode-button span').textContent = texts[other_theme];
  document.querySelector("#darkmode-button iconify-icon").icon = icons[other_theme];
  localStorage.setItem('theme-override', themes[other_theme]);
  // if the actual theme is dark that means we switched to light mode
  if (actual_theme === 'Dark') {
    audio.play();
    document.querySelector('body').style.display = "none";
    setTimeout(() => {
      document.querySelector('body').style.display = "block";
    }, 200);
  }

});

(() =>{
  console.log(themes[+(window.matchMedia("(prefers-color-scheme: dark)").matches)])
  let saved_theme = localStorage.getItem('theme-override')
                  || themes[+(!window.matchMedia("(prefers-color-scheme: dark)").matches)]
                  || 'Dark';
  let theme_index = +(saved_theme === 'Light')
  document.documentElement.setAttribute('theme-override', saved_theme);
  document.querySelector('#darkmode-button span').textContent = texts[theme_index];
  document.querySelector("#darkmode-button iconify-icon").icon = icons[theme_index];
})()