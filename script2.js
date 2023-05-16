

callToAPI("https://hp-api.onrender.com/api/characters");


 //Creo funcion con fetch para llamar a la api i poder sacar leer 
 //la informacion con el 1r then y con el 2do then la puedo manipular
function callToAPI(url) { 
  fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res);// veo la info que tengo
      let harry = ""; // creo variable vacia
      for (let i = 0; i < 25; i++) { // bucle for para sacar info de 25 personajes dentro de la api                           
        
        harry += ` 
          <div id ="ListaApi">
            <h3>${res[i].name}</h3>
            <h5>House: ${res[i].house}</h5>
            <img class ="ImageApi" src="${res[i].image}">
            <button id ="ButtonAdd" onclick="addFavorites('${res[i].name}')">add Favs</button>
          </div>

        `
      }                 //dentro de la variable "harry" almaceno toda info que yo quiera para pintar en pantalla con el document.querySelector
                          // button on click = "addFavorites" llama a funcion addFavorites y le pasa el "name" obtenido en "res" (API) 
      document.querySelector("#HPM2").innerHTML = harry;
    })                  // Pintamos en pantalla todo lo que esta dentro de "harry" //
  }

  function addFavorites(name) { // Creo funcion para traerme el name del mi button "Añadir a favorites" 
   
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []; 
    // creo variable favorites =  obtener la lista que tenemos en localStorage en formato objeto
    // Si no hay nada en el localStorage para que no me de error utilizo el operador '|| []' (esta parte la encontre googleando)
  
    if (!favorites.includes(name)) { // creamos un if ( que si nombre no esta iculido en "favorite" lo incluia con el push)
     
         favorites.push(name);
      
         localStorage.setItem("favorites", JSON.stringify(favorites));//  almacena la lista actulizada convertiendo en una cadena Json
    }else {
         alert("Este personaje ya fue añadido a favoritos");// si por el contrario ya esta añadido nos salta un aviso
    }
  }



