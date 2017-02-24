console.log('');
console.log('Ejercicio1');

var i;
var action;

/*
while(i <= 8){
	action = i <= 3? " no " : "";
	console.log("El tren número " + i + action +" está funcionando");
	i++;
}

console.log('');
console.log('Ejercicio2');

i = 1;
action = "";

do{
	action = i <= 3? " no " : "";
	console.log("El tren número " + i + action +" está funcionando");
	i++;
}while(i <= 8);


console.log('');
console.log('Ejercicio3');

for(var i = 0; i < 8; i++){
	action = i <= 3? " no " : "";
	console.log("El tren número " + i + action +" está funcionando");
}


console.log('');
console.log('Ejercicio4');

for(var i = 1; i <= 10; i++){
	var res = "El tren " + i; 
	if(i === 10) res += "de servicio nocturno ";
	res  += i <= 3? "no " : "";
	res += action + " está funcionando";
	console.log(res);
}

console.log('');
console.log('Ejercicio5');
var data = {
	nofunct: 3,
	nigthly: [10, 12],
	total: 20
}
trainStatus(data);
function trainStatus(data){
	for(var i = 1; i <= data.total; i++){
		var res = "El tren número " + i + " "; 
		res  += i <= data.nofunct? "no " : "";
		for(var j in data.nigthly){
			if(i === data.nigthly[j]) res += "de servicio nocturno ";
		}
		res += action + "está funcionando";
		console.log(res);
	}
}

console.log('');
console.log('Ejercicio6');
var data = {
	nofunct: 3,
	nigthly: [10, 12],
	total: 20
}
trainStatus(data);
function trainStatus(data){
	for(var i = 1; i <= data.total; i++){
		var res = "El tren número " + i + " "; 
		res  += i <= data.nofunct? "no " : "";
		for(var j in data.nigthly){
			if(i === data.nigthly[j]) res += "de servicio nocturno ";
		}
		res += action + "está funcionando";
		console.log(res);
	}
}
*/
console.log('');
console.log('Ejercicio7');
var data = {
	nofunct: {
		items: 3,
		text: "no funciona "
	},
	nigthly: {
		items: [10, 12],
		text: "de servicio nocturno "
	},
	party: {
		items: [13],
		text: "de fiesta "
	},
	total: 20,
	date: "jueves"
}
trainStatus(data);
function trainStatus(data){
	for(var i = 1; i <= data.total; i++){
		var res = "El tren número " + i + " ";
		res += parseProp(i, data.nigthly);
		res += parseProp(i, data.party);
		res  += i <= data.nofunct.items? data.nofunct.text : "está funcionando";
		console.log(res);
	}
}
function parseProp(i, n){
	for(var j in n.items){
		if(i === n.items[j]){
			return n.text
		}
	}
	return "";
}





