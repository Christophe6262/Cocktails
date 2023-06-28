import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  // récupère les infos du cocktail
  const id = localStorage.getItem("drinks");
  if (id === null) {
    window.location = "index.html";
  } else {
    const cocktails = await fetchDrinks(url + id);
    // affiche les infos du cocktail
    displayDrink(cocktails);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  presentDrink();
});
