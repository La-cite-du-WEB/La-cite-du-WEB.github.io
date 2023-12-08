const cardgrid = document.querySelector(".cardgrid");
import {accounts} from "./accounts.js"

console.log(accounts)

const addCard = (account_name, imageurl) => {
    let newcard = document.createElement('div', );
    newcard.classList.add("card");
    newcard.style.backgroundImage = `url('${imageurl}')`;
    newcard.innerHTML = `
<div class="icon-bar">
        <iconify-icon icon="ph:heart-fill" width="32" height="32"></iconify-icon>
    <span>${account_name}</span>
</div>  
`
    cardgrid.appendChild(newcard);
}

const scrollProgress = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
  return Math.floor((winScroll / height) * 100);
}

var requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key':'api_key=live_12QBMwuHk3S5B9rBTJcSm1Q1bTSx84LLLWFCgLYLOAOb98Jjh1nSCrDHXpfiS0FI'
  },
  redirect: 'follow'
};

const fetchImages = (n) => {
  let account;
  for (let i=0;i<n;i++) {
    account = accounts[Math.floor(Math.random() * accounts.length)]

    fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&order=RANDOM&page=0&limit=1&breed=${account.breed}`, requestOptions)
    .then(response => response.json())
    .then(result => addCard(account.name, result[0]['url']))
    .catch(error => console.log('error', error));
  }
}

fetchImages(20);

document.addEventListener("scroll", () => {
  if (scrollProgress() > 75) {
    fetchImages(7)
  }
});
