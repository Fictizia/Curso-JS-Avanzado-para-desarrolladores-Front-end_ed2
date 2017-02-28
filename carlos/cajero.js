
var cuentas={
	"abcd1234":1008,
	"dfde5555":1234,
	"cafe4567":12023,
};

var cajero={

entidad:"BBVA",
id:"1234",
moneda:"euros",
ingresoCliente:function(dinero,numCuenta){
						cuentas[numCuenta]=cuentas[numCuenta]+dinero;
						cajero.saldo=cajero.saldo+dinero;
					},
ingresoCajero:function(dinero){
						cajero.saldo=cajero.saldo+dinero;
					},
retiradaCliente:function(dinero,numCuenta){
						cuentas[numCuenta]=cuentas[numCuenta]-dinero;
						cajero.saldo=cajero.saldo-dinero;
					},

saldo:1000



}


cajero.ingresoCliente(50,"abcd1234");
cajero.retiradaCliente(50,"cafe4567");


console.log("Saldo Cajero: "+cajero.saldo);
console.log("Saldo Cuenta abcd1234: "+cuentas.abcd1234);
console.log("Saldo Cajero cafe4567: "+cuentas.cafe4567);