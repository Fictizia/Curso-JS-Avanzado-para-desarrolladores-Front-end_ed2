var Tanque = function(capacidad, color, nivel){
	this.capacidad = capacidad;
	this.color = color;
	this.nivel = nivel;
	this.peces = [];

	this.addAgua = function(litros){
		this.nivel = comprueba.call(this, litros);
	}.bind(this);

	function comprueba(litros){
		if(this.capacidad < this.nivel + litros){
			return 'has sobrepasado la capacidad del tanque';
		}else if (this.nivel + litros < 0){
			return 'has dejado el tanque seco';
		}else{
			return this.nivel + litros;
		}
	}

	this.addPez = function(tipo){
		if(this.peces.length > 0){
			for(var i in this.peces){
				if(this.peces[i].tipo === tipo){
					this.peces[i].cantidad++;
				}else{
					add.call(this, tipo);
				}
			}
		}else{
			add.call(this, tipo);
		}
		function add(tipo){
			this.peces.push({
				tipo: tipo,
				cantidad: 1
			});
		}
	}.bind(this);
}

var Cama = function(capacidad, color, sustrato){
	this.capacidad = capacidad;
	this.color = color;
	this.sustrato = sustrato;
	this.plantas = [];
	this.addPlanta = function(nombre, clase){
		this.plantas.push({
			nombre: nombre,
			clase: clase,
			activa: true
		});
	}.bind(this);
	this.removePlanta = function(nombre){
		for(var i in this.plantas){
			if(this.plantas[i].nombre === nombre){
				this.plantas[i].activa = false;
			}
		}
	}.bind(this);
}

var hidro = {
	tanques: [],
	camas: []
}
hidro.tanques.push(new Tanque(40, 'gris', 29));
hidro.camas.push(new Cama(10, 'rojo'));

hidro.tanques[0].addAgua(-6);
hidro.tanques[0].addPez('sardina');
hidro.tanques[0].addPez('bonito');
hidro.tanques[0].addPez('sardina');

hidro.camas[0].addPlanta('pino', 'arbol');

hidro.camas[0].removePlanta('pino');

console.log(JSON.stringify(hidro));
