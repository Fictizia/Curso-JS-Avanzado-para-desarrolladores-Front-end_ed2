var tanque = function (capacidad, dimensiones, color, nivelAguaMax) {

	this.capacidad = capacidad;
	this.dimensiones = dimensiones;
	this.color = color;
	this.nivelAguaMax = nivelAguaMax;
	this.capmax=this.dimensiones[0]*this.dimensiones[1]*this.nivelAguaMax*0.001;
	this.agua = { nivel:0, nitratos:0, nitritos:0};
	this.peces={};

	this.llenar = function(entrada,nitratos,nitritos){
		  if(this.agua.nivel+entrada < this.capmax) this.agua.nivel= this.agua.nivel + entrada;
		  else this.agua.nivel=this.capmax;
		  this.agua.nitratos=nitratos;
		  this.agua.nitritos=nitritos;
        };
 	this.vaciar = function(salida){
		  if(this.agua.nivel-salida > 0) this.agua.nivel= this.agua.nivel - salida;
		  else this.agua.nivel=0;
        };
    this.ponPez = function(nombre,clase) {this.peces[nombre]=clase;};
    this.quitaPez = function(nombre) {delete this.peces[nombre];};
    this.numPecesTotal= function(){return Object.keys(this.peces).length};
    this.numPecesClase= function(clase) {
    	var count=0;
    	for(prop in this.peces){
    		if(this.peces[prop]===clase) count=count+1;
    	}
    	return count
    };
    this.numPerClase= function(){
    	var clases={};
    	for(prop in this.peces) clases[this.peces[prop]]=0;
    	for(prop in clases) clases[prop]=this.numPecesClase(prop);
    	return clases;
    };
	this.status= function() {
		var clases=this.numPerClase();
		var mensajeStatus=
		"--------------------------------\nEstado del agua\n--------------------------------\n"+
		"Agua disponible: "+this.agua.nivel+"/"+this.capmax+"l\n"+
		"Nitratos: "+this.agua.nitratos+"mg/l\n"+
		"Nitritos: "+this.agua.nitritos+"mg/l\n"+
		"--------------------------------\nEstado de los peces\n--------------------------------\n"+
		"Total de peces: "+this.numPecesTotal()+"\n";
		for(prop in clases) mensajeStatus=mensajeStatus+prop+":"+clases[prop]+"\n";
		return mensajeStatus+"\n\n\n"
	};


}

var cama = function (capacidad, dimensiones, color, nivelAguaMax, sustrato) {

	this.capacidad = capacidad;
	this.dimensiones = dimensiones;
	this.color = color;
	this.nivelAguaMax = nivelAguaMax;
	this.sustrato = sustrato;
	this.capmax=this.dimensiones[0]*this.dimensiones[1]*this.nivelAguaMax*0.001;
	this.agua = { nivel:0, nitratos:0, nitritos:0};
	this.plantas={};
	this.clases={};


	this.llenar = function(entrada,nitratos,nitritos){
		  if(this.agua.nivel+entrada < this.capmax) this.agua.nivel= this.agua.nivel + entrada;
		  else this.agua.nivel=this.capmax;
		  this.agua.nitratos=nitratos;
		  this.agua.nitritos=nitritos;
        };
 	this.vaciar = function(salida){
		  if(this.agua.nivel-salida > 0) this.agua.nivel= this.agua.nivel - salida;
		  else this.agua.nivel=0;
        };
    this.ponPlanta = function(nombre,clase) {this.plantas[nombre]=clase;};
    this.quitaPlanta = function(nombre) {delete this.plantas[nombre];};
    this.numPlantasTotal= function(){return Object.keys(this.plantas).length};
    this.numPlantasClase= function(clase) {
    	var count=0;
    	for(prop in this.plantas){
    		if(this.plantas[prop]===clase) count=count+1;
    	}
    	return count
    };
    this.numPerClase= function(){
    	var clases={};
    	for(prop in this.plantas) clases[this.plantas[prop]]=0;
    	for(prop in clases) clases[prop]=this.numPlantasClase(prop);
    	return clases
    };
	this.status= function() {
		var clases=this.numPerClase();
		var mensajeStatus=
		"--------------------------------\nEstado del agua\n--------------------------------\n"+
		"Agua disponible: "+this.agua.nivel+"/"+this.capmax+"l\n"+
		"Nitratos: "+this.agua.nitratos+"mg/l\n"+
		"Nitritos: "+this.agua.nitritos+"mg/l\n"+
		"--------------------------------\nEstado de las plantas\n--------------------------------\n"+
		"Total de plantas: "+this.numPlantasTotal()+"\n";
		for(prop in clases) mensajeStatus=mensajeStatus+prop+":"+clases[prop]+"\n";
		return mensajeStatus+"\n\n\n"
	};





}

var tanque1 = new tanque(40,[51,25.5,30.5],"Gris Claro",29);
var cama1 = new cama(10,[51,25.5,10],"Rojo",5,"Piedra volcanica");


console.log(tanque1.capmax);
console.log(tanque1.agua);
tanque1.llenar(27,4,6);
cama1.llenar(8,2,1);
console.log(cama1.agua);
console.log(tanque1.agua);
tanque1.ponPez("Juanito","Pez Limon");
tanque1.ponPez("Jorgito","Gupy");
tanque1.ponPez("Jaimito","Betta");
tanque1.ponPez("Luisito","Gupy");
cama1.ponPlanta("Planta 1","Repollo");
cama1.ponPlanta("Planta 2","Tomate");
cama1.ponPlanta("Planta 3","Repollo");
cama1.ponPlanta("Planta 4","Repollo");



console.log(tanque1.peces);
console.log(cama1.plantas);

console.log(tanque1.numPecesTotal());
console.log(tanque1.numPecesClase("Gupy"));
console.log(cama1.numPlantasTotal());
console.log(cama1.numPlantasClase("Repollo"));

tanque1.numPerClase();
console.log(tanque1.clases);
cama1.numPerClase();
console.log(cama1.clases);


cama1.quitaPlanta("Planta 3");
tanque1.quitaPez("Jaimito");
console.log(tanque1.peces);
console.log(cama1.plantas);

console.log(tanque1.numPecesTotal());
console.log(cama1.numPlantasTotal());




console.log(tanque1.status());
console.log(cama1.status());










