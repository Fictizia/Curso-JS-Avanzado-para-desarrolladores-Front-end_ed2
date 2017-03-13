var seciones= document.getElementsByTagName("section");


for (var i = 1; i < 5 ; ++i) {

	var tituloSec=secciones[i].getElementsByTagName("h2")[0].textContent
	var idSec=secciones[i].id;
	console.log("");
	console.log("");
	console.log(tituloSec);
	console.log("------------------------------------------");
	var elemento= document.getElementById(idSec);
	var listaCursos= elemento.getElementsByTagName("strong");


	// Iteración
	for (var j = 0; j < listaCursos.length; ++j) {
  		console.log(listaCursos[j].textContent);
	}

}

