const API_KEY = "live_AYm3OFL5RsopcRxkS6vktyN1rahZysaNXWqUpYbk0YmAblViSMpWRz5uBAhpOooy";

async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": API_KEY
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cat breeds.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch cat breeds.");
  }
}

async function fetchCatsByBreed(breedId) {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
      headers: {
        "x-api-key": API_KEY
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cat information.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch cat information.");
  }
}

async function init() {
  const breeds = await fetchBreeds();
  console.log(breeds);
}

init();
