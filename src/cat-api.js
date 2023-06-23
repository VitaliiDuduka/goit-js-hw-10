// const API_KEY = live_T9tMRHSkDZ4C1I9QbJXuchUgqXQFUyMrYkbTS0h3meCNhD3skOq8fobMONlHin79;

let catsArray = [];

function fetchBreeds() {
  return fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => { if (!response.ok) {
      throw new Error(response.status);
    }
      return response.json();
    })
    .then(data => {
      catsArray = data;
      return data;
    })
}

function fetchCatByBreed(id) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then(response => { if (!response.ok) {
      throw new Error(response.status);
    }
      return response.json();
    })
    .then(data => data[0].url)
  }

export { catsArray, fetchBreeds, fetchCatByBreed };