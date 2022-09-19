const urlData =  "https://japceibal.github.io/japflix_api/movies-data.json"
let buscador = document.getElementById("inputBuscar")
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(urlData).then(function(resultObj){
        if (resultObj.status === "ok"){
            moviesInfoArray = resultObj.data
            console.log(moviesInfoArray)
        
        }
        // if (buscador.value !== ""){
        // showMovies()}
        
        document.getElementById("btnBuscar").addEventListener("click", function(){
            showMovies();
        });
    })
        
}
)

