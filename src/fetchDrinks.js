import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
  // montre le chargement
  showLoading();

  // récupère les cocktails
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`http response error : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
