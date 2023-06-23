// const API_KEY = live_T9tMRHSkDZ4C1I9QbJXuchUgqXQFUyMrYkbTS0h3meCNhD3skOq8fobMONlHin79;

function fetchBreeds() {
  return fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => { if (!response.ok) {
      throw new Error(response.status);
    }
      return response.json();
    })
}

function fetchCatByBreed(id) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then(response => { if (!response.ok) {
      throw new Error(response.status);
    }
      return response.json();
    })
    }
  
export { fetchBreeds, fetchCatByBreed };