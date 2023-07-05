import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

function toggleLoader(show) {
  loader.style.display = show ? "block" : "none";
}

function toggleError(show) {
  error.style.display = show ? "block" : "none";
}

function clearBreedSelect() {
  breedSelect.innerHTML = "";
}

function addBreedOption(breed) {
  const option = document.createElement("option");
  option.value = breed.id;
  option.textContent = breed.name;
  breedSelect.appendChild(option);
}

async function handleBreedSelectChange(event) {
  const breedId = event.target.value;
  toggleLoader(true);
  toggleError(false);
  catInfo.innerHTML = "";

  try {
    const cat = await fetchCatByBreed(breedId);
    displayCatInfo(cat);
  } catch (error) {
    toggleError(true);
  } finally {
    toggleLoader(false);
  }
}

function displayCatInfo(cat) {
  const image = document.createElement("img");
  image.src = cat.url;
  catInfo.appendChild(image);

  const name = document.createElement("h2");
  name.textContent = cat.breeds[0].name;
  catInfo.appendChild(name);

  const description = document.createElement("p");
  description.textContent = cat.breeds[0].description;
  catInfo.appendChild(description);

  const temperament = document.createElement("p");
  temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
  catInfo.appendChild(temperament);
}
console.log("Page loaded");
async function initPage() {
    toggleLoader(true);
    toggleError(false);
    catInfo.innerHTML = "";
  
    try {
      const breeds = await fetchBreeds();
      console.log(breeds); // Перевірка виводу порід у консоль
      breedSelect.innerHTML = "";
      breeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
      breedSelect.addEventListener("change", handleBreedSelectChange);
    } catch (error) {
      toggleError(true);
    } finally {
      toggleLoader(false);
    }
  }
  
  initPage();
  