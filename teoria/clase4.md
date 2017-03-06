# Clase 4

#### Cajero Automático

![cajero automatico](https://news.bitcoin.com/wp-content/uploads/2015/10/Bitcoin-ATM.jpg)

El objetivo de este ejercicio es crear un cajero automático que funcione solamente con la consola del navegador.

- Importante: 
	- No es necesario incluir Html o css
	- No es necesario encapsular el código en una función anónima

- Objetivos:
	- Crear el cajero como un objeto literal
	- Añadir detalles como empresa, tipo, materiales, tamaño, moneda, etc...
	- Añadir métodos para el usuario administrador (añadir y retirar dinero del deposito)
	- Añadir métodos para el administrador (agregar y quitar clientes de la lista de clientes autorizados)
	- Añadir métodos para los clientes (añadir y retirar efectivo)
	- Añadir métodos para validar los clientes (Clientes autorizados) y las cantidades (números reales)

- Objetivos opcionales: 
	- Agrupa las operaciones realizadas en grupos (éxito o fracaso)
	- Crear un sistema de log que registre todas las operaciones que se realizan con la mayor cantidad de detalles
		- Tipo de error - "info" o "error".
		- origen del error - "usuario", "maquina" o "administrador".
		- (opcional) código de error - código de error
		- (opcional) detalles - Descripción del error.
	- Añadir un método para resetear (borrar) el log
		- (opcional) utilizar como parámetro un número que nos permite borrar el log solo si no se llega a una determinada cantidad de operaciones registradas.

- Consejos:
	- Refactoriza a menudo
	- Desarrolla paso a paso, usa comentarios y pseudocódigo si es necesario
	- Mantén el código fácil
	- Utiliza herramientas como [jsHint](http://jshint.com/)

```javascript
	var debugMode = true;

	function logger(mensaje) {
	    if (debugMode) console.info(mensaje)
	}

	var clientesBD = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	var cajeroAutomatico = {

	    // Propiedades
	    empresaPropietaria: "SuperExpress",
	    modelo: "Al-201",
	    año: 2010,
	    serie: "01 Beta",
	    tipo: "Prototipo",
	    unidadMedida: "metros",
	    alto: 1,
	    ancho: 0.5,
	    largo: 0.5,
	    unidadPeso: "Kg",
	    peso: 600,
	    materiales: ["acero", "plástico", "cables", "circuitos"],
	    clientesAutorizados: clientesBD,
	    moneda: "Euros",
	    dineroDisponible: 65000,
	    volumenMedida: "m3",

	    // Métodos
	    sistema: {
	        /**
	         * Añade información sobre todo lo que ocurre en cajeroAutomatico.log.(logNUMERO).
	         * Actualiza cajeroAutomatico.logTotal con operaciones fallidas y operaciones realizadas.
	         * @param {string} tipo - "info" o "error".
	         * @param {string} origen - "usuario", "maquina" o "administrador".
	         * @param {string} codigo - código de error
	         * @param {string} detalles - Descripción del error.
	         */
	        dataLog: function(tipo, origen, codigo, detalles) {
	            cajeroAutomatico["operaciones fallidas"] = cajeroAutomatico["operaciones fallidas"] || 0;
	            cajeroAutomatico["operaciones realizadas"] = cajeroAutomatico["operaciones realizadas"] || 0;
	            cajeroAutomatico.logTotal = cajeroAutomatico.logTotal || 1;
	            cajeroAutomatico.log = cajeroAutomatico.log || [];
	            cajeroAutomatico.logTotal = cajeroAutomatico["operaciones fallidas"] + cajeroAutomatico["operaciones realizadas"];
	            cajeroAutomatico.log[cajeroAutomatico.logTotal] = [cajeroAutomatico.logTotal, tipo, origen, codigo, detalles]
	        },
	        esCliente: function(nombre) {
	            if (cajeroAutomatico.clientesAutorizados === 0) {
	                logger("La lista esta vacía.");
	                return false;
	            } else {
	                if (cajeroAutomatico.clientesAutorizados.indexOf(nombre) !== -1) {
	                    logger(nombre + " eres cliente de " + cajeroAutomatico.empresaPropietaria);
	                    return true;
	                } else {
	                    logger(nombre + " no encontrado!");
	                    return false;
	                }
	            }
	        },
	        esNumero: function(n) {
	            return !isNaN(parseFloat(n)) && isFinite(n);
	        },
	        operacionRealizada: function() {
	            if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
	                cajeroAutomatico["operaciones realizadas"] = 1;
	                logger("Primera operación realizada con éxito!");
	            } else {
	                cajeroAutomatico["operaciones realizadas"]++;
	                logger("La operación #" + cajeroAutomatico["operaciones realizadas"] + " realizada con éxito!");
	            }
	        },
	        operacionFallida: function() {
	            if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
	                cajeroAutomatico["operaciones fallidas"] = 1;
	                logger("ERROR: Primera operación fallida!");
	            } else {
	                cajeroAutomatico["operaciones fallidas"]++;
	                logger("ERROR: La operación #" + cajeroAutomatico["operaciones fallidas"] + " fallo!");
	            }
	        },
	        borrandoDatosVacios: function(objeto, propiedad, valorMinimo) {
	            if (objeto[propiedad] <= valorMinimo) {
	                delete objeto[propiedad];
	                return true;
	            } else {
	                return false;
	            }
	        }
	    },
	    administrador: {
	        agregarCliente: function(nombre, lista) {
	            lista.push(nombre);
	            cajeroAutomatico.sistema.operacionRealizada();
	            cajeroAutomatico.sistema.dataLog("info", "administrador", 11, "Ingreso de " + nombre + " a la base de datos de clientes");
	            return true;
	        },
	        quitarCliente: function(nombre, lista) {
	            if (lista.length === 0) {
	                if (debugMode) {
	                    console.log("La lista esta vacía.");
	                }
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "maquina", 12, "Eliminacion de " + nombre + " fallida. Base de datos, vacía.");
	                return false;
	            } else {
	            	var posicion = lista.indexOf(nombre)
	                if ( posicion !== -1) {
	                    lista.splice(posicion, 1);
	                    logger("El Cliente \"" + nombre + "\" eliminado con éxito!");
	                    logger(lista);
	                    cajeroAutomatico.sistema.operacionRealizada();
	                    cajeroAutomatico.sistema.dataLog("info", "administrador", 13, "Eliminado " + nombre + " de la base de datos de clientes");
	                    return true;
	                } else {
	                    logger("El cliente \"" + nombre + "\" no encontrado!");
	                    cajeroAutomatico.sistema.operacionFallida();
	                    cajeroAutomatico.sistema.dataLog("error", "maquina", 14, "Eliminacion de " + nombre + " fallida. Cliente inexistente.");
	                    return false;
	                }
	            }
	        },
	        agregarDinero: function(cantidad) {
	            if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	                cajeroAutomatico.sistema.operacionRealizada();
	                cajeroAutomatico.sistema.dataLog("info", "administrador", 7, "Ingreso de " + cantidad + cajeroAutomatico.moneda);
	                logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                return true;
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "administrador", 8, "Ingreso fallido por " + cantidad + " - errónea.");
	                logger(cantidad + " No es un numero valido!");
	                return false;
	            }
	        },
	        quitarDinero: function(cantidad) {
	            if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	                cajeroAutomatico.sistema.operacionRealizada();
	                cajeroAutomatico.sistema.dataLog("info", "administrador", 9, "Retirada de " + cantidad + cajeroAutomatico.moneda);
	                logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                return true;
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "administrador", 10, "Retirada fallida por " + cantidad + " - errónea.");
	                logger(cantidad + " No es un numero valido!");
	                return false;
	            }
	        }
	    },
	    cliente: {
	        retirarEfectivo: function(nombre, cantidad) {
	            if (cajeroAutomatico.sistema.esCliente(nombre)) {
	                if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                    cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	                    cajeroAutomatico.sistema.operacionRealizada();
	                    cajeroAutomatico.sistema.dataLog("info", "usuario", 1, "Retirada de " + cantidad + cajeroAutomatico.moneda + " por " + nombre);
	                    logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                    return true;
	                } else {
	                    cajeroAutomatico.sistema.operacionFallida();
	                    cajeroAutomatico.sistema.dataLog("error", "usuario", 2, "Retirada fallida por " + cantidad + " errónea. Usuario: " + nombre);
	                    logger(cantidad + " No es un numero valido!");
	                    return false;
	                }
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "usuario", 3, nombre + " No es cliente");
	                logger(nombre + " No eres un cliente de " + cajeroAutomatico.empresaPropietaria + "!");
	                return false;
	            }
	        },
	        ingresarEfectivo: function(nombre, cantidad) {
	            if (cajeroAutomatico.sistema.esCliente(nombre)) {
	                if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                    cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	                    cajeroAutomatico.sistema.operacionRealizada();
	                    cajeroAutomatico.sistema.dataLog("info", "usuario", 4, "Ingreso de " + cantidad + cajeroAutomatico.moneda + " por " + nombre);
	                    logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                    return true;
	                } else {
	                    cajeroAutomatico.sistema.operacionFallida();
	                    cajeroAutomatico.sistema.dataLog("error", "usuario", 5, "Ingreso fallido por " + cantidad + " - errónea. Usuario: " + nombre);
	                    logger(cantidad + " No es un numero valido!");
	                    return false;
	                }
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "usuario", 6, nombre + " No es cliente");
	                logger(nombre + " No eres un cliente de " + cajeroAutomatico.empresaPropietaria + "!");
	                return false;
	            }
	        }
	    }
	};


	/* Demo

	cajeroAutomatico.administrador.agregarCliente ("yo mismo", clientesBD)
	cajeroAutomatico.administrador.quitarCliente ("yo mismo", clientesBD)
	cajeroAutomatico.administrador.quitarCliente ("yo mismo", clientesBD)
	cajeroAutomatico.administrador.quitarDinero (1000)
	cajeroAutomatico.administrador.quitarDinero ("Mucho!!")
	cajeroAutomatico.administrador.agregarDinero (1000000)
	cajeroAutomatico.administrador.agregarDinero ("Poco!")
	
	cajeroAutomatico.cliente.ingresarEfectivo ("Yo mismo", 1000);
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", "Poco!");
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", 10);
	cajeroAutomatico.cliente.retirarEfectivo("Yo mismo", 1000)
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", "Muchoo!");
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", 10000);

	cajeroAutomatico.sistema.borrandoDatosVacios(cajeroAutomatico, "operaciones realizadas", 0);
	
	*/
```