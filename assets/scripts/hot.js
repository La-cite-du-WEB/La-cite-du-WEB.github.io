const cardgrid = document.querySelector(".cardgrid");
import {accounts} from "./accounts.js"

console.log(accounts)

function addCard(account_name,account_username, account_logo_url, image_url) {
  let card = document.createElement("div");
  card.className = "card";
  card.setAttribute("username", account_username)

  let cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  let cardCreatorLogo = document.createElement("div");
  cardCreatorLogo.className = "card-creator-logo";
  cardCreatorLogo.style.backgroundImage = "url('" + account_logo_url + "')";

  let cardCreatorName = document.createElement("div");
  cardCreatorName.className = "card-creator-name";
  let span = document.createElement("span");
  span.textContent = account_name;
  cardCreatorName.appendChild(span);


  cardHeader.appendChild(cardCreatorLogo);
  cardHeader.appendChild(cardCreatorName);

  let cardImage = document.createElement("div");
  cardImage.className = "card-image";
  cardImage.style.backgroundImage = "url('" + image_url + "')";


  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";

  let heartIcon = document.createElement("iconify-icon");
  heartIcon.setAttribute("style", "--hover-color:hsl(0, 69%, 59%);");
  heartIcon.setAttribute("icon", "ph:heart-fill");

  let cartIcon = document.createElement("iconify-icon");
  cartIcon.setAttribute("style", "--hover-color:hsl(239, 69%, 59%);");
  cartIcon.setAttribute("icon", "ph:shopping-cart-simple-fill");

  cardFooter.appendChild(heartIcon);
  cardFooter.appendChild(cartIcon);


  card.appendChild(cardHeader);
  card.appendChild(cardImage);
  card.appendChild(cardFooter);

  cardgrid.appendChild(card);
}


const scrollProgress = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
  return Math.floor((winScroll / height) * 100);
}

let requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key':'live_12QBMwuHk3S5B9rBTJcSm1Q1bTSx84LLLWFCgLYLOAOb98Jjh1nSCrDHXpfiS0FI'
  },
  redirect: 'follow'
};

const fetchImages = (n) => {
  fetch(`https://api.thecatapi.com/v1/images/search?&size=med&mime_types=jpg,png,gif&format=json&has_breeds=true&order=RANDOM&page=0&limit=${n}`, requestOptions)
  .then(response => response.json())
  .then(results => {
    console.log(results);
    results.forEach(cat => {
      let cat_breed = cat["breeds"]["0"]["id"]
      let account = accounts.filter(acc => {
        return acc.breed == cat_breed;
      })[0]
      if (!account) return;
      addCard(account.name, account.username, account.logo, cat["url"])
    })

    
  })
  .catch(error => console.log('error', error));
}


document.addEventListener("scroll", () => {
  if (scrollProgress() > 90) {
    fetchImages(200)
  }
});


document.addEventListener("click", (event) => {
  const target = event.target;
  let clicked_card = undefined;
  if (target.className.slice(0, 4) != "card" || target.tagName == "ICONIFY-ICON") return;


  clicked_card = document.elementsFromPoint(event.x,event.y).filter(e => {return e.className == "card"})[0]
  window.location.href = `/pages/creators/${clicked_card.getAttribute("username")}.html`;
  
})


fetchImages(250);
