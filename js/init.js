// La primer magia busca si coincide el titulo
// falta ampliar a los otros campos.
let moviesList = ""
let showMovies = function(){
let searched = document.getElementById("inputBuscar").value
console.log(searched)
  let htmlContentToAppend = "";
    for(let i = 0; i < moviesInfoArray.length; i++){
        let movie = moviesInfoArray[i];
        if (movie.title.toLowerCase().includes(searched.toLowerCase()))
            htmlContentToAppend += `
            <li class="list-group-item text-light bg-dark d-block">${movie.title}  ${showStars(movie.vote_average/2)}
            <p>${movie.tagline}</p></li>
            `

        }
             
        document.getElementById("lista").innerHTML = htmlContentToAppend;
        console.log(document.getElementById("lista"))
}

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





