

let key = '?api_key=4adb59ec9a677a24e9098f3069908adb'






axios.get('https://api.themoviedb.org/3/discover/movie' + key).then(res => {
  console.log('res.data.results: ', res.data.results);
  const containerEl = document.querySelector('.movies');
  res.data.results.forEach(movie => {
    const el = document.createElement('div');
    el.classList.add('movie');
    el.innerHTML = `
      <img class="movie__img" src="https://image.tmdb.org/t/p/original${movie.poster_path}">
      <h4>${movie.title}</h4>
    `;

    el.addEventListener('click', function() {
      getDetails(movie);
    });

    containerEl.append(el);
  });

}).catch(err => {
  console.log('fail', err);
});

const containerEl = document.querySelector('.details');
containerEl.addEventListener('click', function(event) {
  if (this !== event.target) return;
  this.classList.remove('shown')
});

function getDetails(movie) {
  axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits` + key).then(res => {
    console.log('res: ', res);
    containerEl.classList.add('shown');
    console.log('containerEl.firstChild: ', containerEl.firstChild);
    containerEl.firstElementChild.innerHTML = `
      <img class="movie__img" src="https://image.tmdb.org/t/p/original${movie.poster_path}">
      <h4>${movie.title}</h4>
      <p>
        ${res.data.cast.map(item => item.character).join(', ')}
      </p>
    `;
  });
}


axios.get('https://api.themoviedb.org/3/movie/475303' + key).then(res => {
  console.log('details: ', res.data);
});
axios.get('https://api.themoviedb.org/3/movie/475303/credits' + key).then(res => {
  console.log(res.data);
});

axios.get('https://api.themoviedb.org/3/person/3223' + key).then(res => {
  console.log(res.data);
});



// ?api_key=4adb59ec9a677a24e9098f3069908adb
// https://image.tmdb.org/t/p/original/

// /movie/{movie_id}
// /movie/{movie_id}/credits
// /person/{person_id}
// /person/{person_id}/movie_credits



