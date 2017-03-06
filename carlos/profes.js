var listaDivs= document.getElementsByTagName("img");

// Iteración
for (var i = 0; i < listaDivs.length; ++i) {
  var elemento = listaDivs[i];
  profe=elemento.getAttribute("title");
  //console.log("Elemento: ", elemento);
  console.log("Profe: ", profe);

}

