let favorites = JSON.parse(localStorage.getItem("favorites")) || []; // traer lo del localStorage

let favoritesList = "";// crear variable vacia para guardar lo que nos viene del for

for (let i = 0; i < favorites.length; i++) { // recorremos con un for para que nos coja todo rellenar la variable
    favoritesList += ` 
      <div>
        <h4>${favorites[i]}</h4>
        <button id ="ButtonRem" onclick="removeFavorites(${i})">Eliminar</button>
      </div>
    `
  }

  document.querySelector("#Favoritos").innerHTML = favoritesList;// Pintar la variable en pantalla

  function removeFavorites(name) {
    favorites.splice(name, 1); // eliminar elemento del array de favoritos y actualiza la longitud del array(googleando)

    localStorage.setItem("favorites", JSON.stringify(favorites)); // Actualiza la lista del local localStorage 

    favoritesList = ""; // cadena vacia que guardaremos la lista actualizada 
    
    for (let i = 0; i < favorites.length; i++) { // con un for actualizamos la lista de favoritos recorriendo todo
      favoritesList += `
        <div >
          <h4>${favorites[i]}</h4>
          <button id="ButtonRem" onclick="removeFavorites(${i})">Eliminar</button>
        </div>
      `
    }
    document.querySelector("#Favoritos").innerHTML = favoritesList; // pintar la lista actualizada
  }