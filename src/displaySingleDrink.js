import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (data) => {
  // cache le chargement
  hideLoading();

  const {
    strDrink,
    strInstructions: instruction,
    strDrinkThumb,
  } = data.drinks[0];

  const obj = Object.entries(data.drinks[0]);

  const filterObj = obj.filter((item) => {
    if (item[0].includes("strIngredient") && item[1] !== null) {
      return item;
    }
  });

  // Pour chaque élement du tableau, il doit me retourner un li avec l'élément dedans

  const fobj = filterObj.map((e) => {
    return `
    <li><i class="fas fa-wine-glass"></i>  ${e[1]}</li>`;
  });

  const img = get(".drink-img");
  const name = get(".drink-name");
  const description = get(".drink-description");
  const ingredient = get(".drink-ingredients");

  ingredient.innerHTML = fobj.join("");
  name.textContent = strDrink;
  img.src = strDrinkThumb;
  description.textContent = instruction;

  // affiche les infos d'un cocktail
};

export default displayDrink;
