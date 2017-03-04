

var cuentas={};

var cajero={

entidad:"BBVA",
id:"1234",
moneda:"euros",
keyAdmin:"cafebabe1234",
saldo:0,
ingresoCajero:function(dinero,keyAdmin){
						if(cajero.keyAdmin==keyAdmin) {
							cajero.saldo=cajero.saldo+dinero;
							console.log("Ingreso en cajero de "+dinero+" euros. Saldo en cajero: "+cajero.saldo+" euros");
						}
						else console.log("Clave de administrador no valida");
					},

crearCliente:function(numCuenta,key,keyAdmin){
						if(keyAdmin===cajero.keyAdmin) {
							cuentas[numCuenta]={saldo:0,key:key};
							console.log("Cuenta "+numCuenta+" creada");
						}
						else console.log("Clave de administrador no valida");
					},

borrarCliente:function(numCuenta,keyAdmin){
						if(keyAdmin===cajero.keyAdmin) {
							delete cuentas[numCuenta];
							console.log("Cuenta "+numCuenta+" eliminada");
						}
						else console.log("Clave de administrador no valida");
					},


ingresoCliente:function(dinero,numCuenta,key){
						if(cuentas[numCuenta].key===key){
							cuentas[numCuenta].saldo=cuentas[numCuenta].saldo+dinero;
							cajero.saldo=cajero.saldo+dinero;
							console.log("Ingreso de efectivo en cuenta "+numCuenta+" de "+dinero+" euros. Saldo en cuenta: "+cuentas[numCuenta].saldo);
						} else console.log("Clave de usuario no valida");
					},

retiradaCliente:function(dinero,numCuenta,key){
						if(cuentas[numCuenta].key===key){
							cuentas[numCuenta].saldo=cuentas[numCuenta].saldo-dinero;
							cajero.saldo=cajero.saldo-dinero;
							console.log("Retirada de efectivo en cuenta "+numCuenta+" de "+dinero+" euros. Saldo en cuenta: "+cuentas[numCuenta].saldo);
						} else console.log("Clave de usuario no valida");
					},





}

cajero.ingresoCajero(2000,"cafebabe1234");


cajero.crearCliente("qwerty1234","ca12","cafebabe1234");
cajero.crearCliente("abcde4567","ab45","cafebabe1234");
cajero.crearCliente("bacaf7788","vfgh","cafebabe1234");
cajero.crearCliente("asdfg6543","iopl","cafebabe1234");


cajero.ingresoCliente(5000,"qwerty1234","ca12");
cajero.ingresoCliente(300,"abcde4567","ab45");
cajero.ingresoCliente(8900,"bacaf7788","vfgh");
cajero.ingresoCliente(6500,"asdfg6543","iopl");

cajero.retiradaCliente(900,"bacaf7788","vfgh");
cajero.retiradaCliente(150,"qwerty1234","ca12");

console.log(cuentas);

console.log(cajero);

cajero.borrarCliente("abcde4567","cafebabe1234");
console.log(cuentas);


