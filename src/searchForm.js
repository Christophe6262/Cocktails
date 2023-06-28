import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseUrl = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
const form = get(".search-form");
const input = get("input");

// écoute le formulaire et affiche les cocktails
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim().toLowerCase();
  if (!inputValue) return;
  presentDrinks(baseUrl + inputValue);
});
