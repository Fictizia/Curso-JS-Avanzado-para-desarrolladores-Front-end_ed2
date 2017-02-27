//Campo 0: OK/NOK -> Tren Funcionando/Tren no funcionando
//Campo 1: D/N -> Tren diurno / tren nocturno
//Campo 2: F/NF -> Tren fiestero / tren no fiestero

var trenes=[
["OK","D","NF"],
["OK","D","NF"],
["OK","D","NF"],
["OK","D","NF"],
["NOK","D","NF"],
["NOK","D","NF"],
["NOK","D","NF"],
["NOK","D","NF"],
["OK","D","NF"],
["OK","N","NF"],
["OK","D","NF"],
["OK","N","NF"],
["OK","D","F"],
];

var operativos=0;

function logger(element, index, array) {
    if(element[0]=="OK") {console.log("El tren número "+(index+1)+" esta funcionando");++operativos;}
    else console.log("El tren número "+index+" no esta funcionando");
    if(element[1]=="N") console.log("El tren número "+(index+1)+" es nocturno");
    if(element[2]=="F") console.log("El tren número "+(index+1)+" es fiestero");

}


trenes.forEach(logger);
console.log("Trenes funcionando: "+operativos);
