let catsArray = [];
let catInfo = {};

function fetchBreeds() {
  return fetch("https://api.thecatapi.com/v1/breeds").then(result =>
    result.json().then(data => {
      catsArray = data;
      return data;
    })
  );
}

function breedDetails(name) {
  catsArray.map(cat => {
    if (name === cat.name) {
      catInfo = {
        name: cat.name,
        desc: cat.description,
        temper: cat.temperament,
        id: cat.id,
      };
    }
  });
}

function fetchImage(id) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`).then(result =>
    result.json().then(data => data[0].url)
  );
}

export { catInfo, fetchBreeds, fetchImage, breedDetails };