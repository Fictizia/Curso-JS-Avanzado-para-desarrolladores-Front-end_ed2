const vorpal = require('vorpal')();

var cajero = {
	currentUser: null,
	clientes: [],
	ingresar: function(args, callback){
		cajero.currentUser.saldo += args.cantidad;
		callback();
	},
	retirar: function(args, callback){
		cajero.currentUser.saldo -= args.cantidad;
		callback();
	},
	addCliente: function(args, callback){
		cajero.clientes.push({
			id: cajero.clientes.length,
			user: args.nombre,
			pass: '1234',
			saldo: 0
		});
		callback();
	},
	removeCliente: function(args, callback){
		var id = cajero.getClientId(args.nombre);
		if(id !== -1){
			cajero.clientes.splice(id, 1);
			log = "se elimino el cliente " + args.nombre;
		}else{
			log = "No se encontró el cliente " + args.nombre;
		}
		vorpal.log(log);
		callback();
	},
	login: function(args, callback){
		cajero.setCurrentUser(args.user);
		callback();
	},
	printClientes: function(args, callback){
		vorpal.log(cajero.clientes);
		callback();
	},
	setCurrentUser: function(nombre){
		cajero.currentUser = cajero.clientes[cajero.getClientId(nombre)];
	},
	getClientId: function(name){
		return cajero.clientes.map(x => x.user).indexOf(name);
	}
}

vorpal
	.delimiter('cajero$')
	.show();

vorpal
  .command('login <user> <pass>')
  .action(cajero.login);

vorpal
  .command('ingresar <cantidad>')
  .action(cajero.ingresar);

vorpal
  .command('retirar <cantidad>')
  .action(cajero.retirar);

vorpal
  .command('addCliente <nombre>', 'otrafuncion')
  .action(cajero.addCliente);

vorpal
  .command('removeCliente <nombre>')
  .action(cajero.removeCliente);

vorpal
  .command('printClientes')
  .action(cajero.printClientes);



