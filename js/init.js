// La primer magia busca si coincide el titulo
// falta ampliar a los otros campos.
let moviesList = ""
let showMovies = function(){
let searched = document.getElementById("inputBuscar").value
  let htmlContentToAppend = "";
    for(let i = 0; i < moviesInfoArray.length; i++){
        let movie = moviesInfoArray[i];
        if (movie.title.toLowerCase().includes(searched.toLowerCase())){
            htmlContentToAppend += `
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop${i}" aria-controls="offcanvasTop${i}">
            <li class="list-group-item text-light bg-dark d-block">${movie.title} 
            ${showStars(movie.vote_average/2)}
            <p>${movie.tagline}</p></li></button>
            
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop${i}" aria-labelledby="offcanvasTopLabel${i}">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasTopLabel${i}">${movie.title} </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
              ${movie.overview}
              </div><hr>
              <div class="offcanvas-body">`
          let genresArray = movie.genres
          for(let j=0; j <genresArray.length; j++){
            let genre = genresArray[j];
            htmlContentToAppend += `${genre.name}`} 
          htmlContentToAppend +=`</div>`
          htmlContentToAppend +=`<div class="dropdown col align-self-end">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Year:   ${movie.release_date}</a></li>
            <li><a class="dropdown-item" href="#">runtime:${movie.runtime}</a></li>
            <li><a class="dropdown-item" href="#">Budget: ${movie.budget}</a></li>
            <li><a class="dropdown-item" href="#">Revenue:${movie.revenue}</a></li>
          </ul>
        </div>`}
          htmlContentToAppend +=`</div>`}    
        document.getElementById("lista").innerHTML = htmlContentToAppend;}
















// El viejo y qeuerido getJSONData
let getJSONData = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
  
}
// Funcion que me devuelve estrellas en funcion de una valor del 1 al 5
function showStars(rate){
  if (rate == 1)
  return `
  <span style="color:yellow">★</span><span style="color:grey">☆☆☆☆</span>
  `
  if (rate ==2 )
  return `
  <span style="color:yellow">★★</span><span style="color:grey">☆☆☆</span>`
  if (rate ==3)
  return `
  <span style="color:yellow">★★★</span><span style="color:grey">☆☆</span>`
  if (rate == 4)
  return `
  <span style="color:yellow">★★★★</span><span style="color:grey">☆</span>`
  else
  return `
  <span style="color:yellow">★★★★★</span>`        
  }





