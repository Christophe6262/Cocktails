import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const section = get(".section-center");
const title = get(".title");

const displayDrinks = async ({ drinks }) => {
  // cache le chargement
  hideLoading();
  if (!drinks) {
    title.textContent = "sorry";
    section.innerHTML = null;
    return;
  } else {
    title.textContent = "";
    const innerDrink = drinks.map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
          </article>
        </a>
 `;
    });
    section.innerHTML = innerDrink.join("");
    return section;
  } // affiche les cocktails
};

export default displayDrinks;
