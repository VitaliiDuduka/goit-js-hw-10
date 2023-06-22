import { Report } from 'notiflix/build/notiflix-report-aio';
import { catInfo, fetchImage, fetchBreeds, breedDetails } from '../src/cat-api';

const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');

function renderBreeds() {
  loaderEl.classList.remove('is-hidden');

  fetchBreeds()
    .then(data => {
      selectEl.classList.remove('is-hidden');
      loaderEl.classList.add('is-hidden');

      data.map(cat => {
        const markup = document.createElement('option');
        markup.innerHTML = `<option value="${cat.id}">${cat.name}</option>`;
        selectEl.append(markup);
      });
    })
    .catch(error => {
      selectEl.classList.add('is-hidden');
      onError();
    });
}

renderBreeds();

function renderImage(url) {
  catInfoEl.innerHTML =
    `<div><img class="pic" src="${url}"/></div>
      <div class='cat-text'>
      <h1>${catInfo.name}</h1>
      <p class='cat-desc'>${catInfo.desc}</p
      ><p><strong>Temperament: </strong>${catInfo.temper}</p>
      </div>`;

  const picEl = document.querySelector('.pic');
  picEl.addEventListener('click', onSelect);
}

selectEl.addEventListener('change', onSelect);

function onSelect(event) {
  breedDetails(event.target.value);

  catInfoEl.classList.add('is-hidden');
  loaderEl.classList.remove('is-hidden');

  fetchImage(catInfo.id)
    .then(data => {
      catInfoEl.classList.remove('is-hidden');
      loaderEl.classList.add('is-hidden');
      return data;
    })
    .then(data => renderImage(data))
    .catch(error => {
      onError();
      loaderEl.classList.add('is-hidden');
    });
}

function onError() {
  Report.failure(
    'Ups!',
    'All the cats are sleeping now... Please, try again later',
    "Let's try again",
    {
    width: '360px',
    svgSize: '80px',
    },
  );
}


