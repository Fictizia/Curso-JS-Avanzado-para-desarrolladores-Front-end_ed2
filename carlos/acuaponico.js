var tanque = function (capacidad, dimensiones, color, nivelAguaMax) {

	this.capacidad = capacidad;
	this.dimensiones = dimensiones;
	this.color = color;
	this.nivelAguaMax = nivelAguaMax;
	this.capmax=this.dimensiones[0]*this.dimensiones[1]*this.nivelAguaMax*0.001;
	this.agua = 0;

	this.llenar = function(entrada){
		  if(this.agua+entrada < this.capmax) this.agua= this.agua + entrada;
		  else this.agua=this.capmax;
        }
 	this.vaciar = function(salida){
		  if(this.agua+entrada > 0) this.capacidad= this.capacidad - salida;
		  else this.agua=0;
        }     


}

var cama = function (capacidad, dimensiones, color, nivelAguaMax, sustrato) {

	this.capacidad = capacidad;
	this.dimensiones = dimensiones;
	this.color = color;
	this.nivelAguaMax = nivelAguaMax;
	this.sustrato = sustrato;


}

var tanque1 = new tanque(40,[51,25.5,30.5],"Gris Claro",29);

console.log(tanque1.capmax);
console.log(tanque1.agua);
tanque1.llenar(27);
console.log(tanque1.agua);



