// Namespace
var app = app || {};

// Funcion Anónima autoejecutada
app.cajero = (function(window) {

    // Privado
    var euro2bitcoin = 0.00328138;
    var euro2dolar= 1.06479;
    var debugMode = true;
    var volumenRequerido = true;
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
             * @param {number} codigo - código de error
             * @param {string} detalles - Descripción del error.
            */
            dataLog: function(tipo, origen, codigo, detalles) {
                cajeroAutomatico["operaciones fallidas"] = cajeroAutomatico["operaciones fallidas"] || 0;
                cajeroAutomatico["operaciones realizadas"] = cajeroAutomatico["operaciones realizadas"] || 0;
                cajeroAutomatico.logTotal = cajeroAutomatico.logTotal || 1;
                cajeroAutomatico.log = cajeroAutomatico.log || [];
                cajeroAutomatico.logTotal = cajeroAutomatico["operaciones fallidas"] + cajeroAutomatico["operaciones realizadas"];
                cajeroAutomatico.log[cajeroAutomatico.logTotal] = [cajeroAutomatico.logTotal, tipo, origen, codigo, detalles];
            },
            esCliente: function(nombre) {
                if (cajeroAutomatico.clientesAutorizados === 0) {
                    if (debugMode) {
                        console.warn("La lista esta vacía.");
                    }
                    return false;
                } else {
                    for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
                        if (cajeroAutomatico.clientesAutorizados[i] == nombre) {
                            if (debugMode) {
                                console.info(nombre + " eres cliente de " + cajeroAutomatico.empresaPropietaria);
                            }
                            return true;
                        } else if (i == cajeroAutomatico.clientesAutorizados.length - 1) {
                            if (debugMode) {
                                console.warn(nombre + " no encontrado!");
                            }
                            return false;
                        }
                    }
                }
            },
            esNumero: function(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            },
            operacionRealizada: function() {
                if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
                    cajeroAutomatico["operaciones realizadas"] = 1;
                    if (debugMode) {
                        console.info("Primera operación realizada con éxito!");
                    }
                } else {
                    cajeroAutomatico["operaciones realizadas"]++;
                    if (debugMode) {
                        console.info("La operación #" + cajeroAutomatico["operaciones realizadas"] + " realizada con éxito!");
                    }
                }
            },
            operacionFallida: function() {
                if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
                    cajeroAutomatico["operaciones fallidas"] = 1;
                    if (debugMode) {
                        console.warn("ERROR: Primera operación fallida!");
                    }
                } else {
                    cajeroAutomatico["operaciones fallidas"]++;
                    if (debugMode) {
                        console.warn("ERROR: La operación #" + cajeroAutomatico["operaciones fallidas"] + " fallo!");
                    }
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
                    for (var i = 0; i < lista.length; i++) {
                        if (lista[i] == nombre) {
                            lista.splice(i, 1);
                            if (debugMode) {
                                console.log("El Cliente \"" + nombre + "\" eliminado con éxito!");
                                console.log(lista);
                            }
                            cajeroAutomatico.sistema.operacionRealizada();
                            cajeroAutomatico.sistema.dataLog("info", "administrador", 13, "Eliminado " + nombre + " de la base de datos de clientes");
                            return true;
                        } else if (i == lista.length - 1) {
                            if (debugMode) {
                                console.log("El cliente \"" + nombre + "\" no encontrado!");
                            }
                            cajeroAutomatico.sistema.operacionFallida();
                            cajeroAutomatico.sistema.dataLog("error", "maquina", 14, "Eliminacion de " + nombre + " fallida. Cliente inexistente.");
                            return false;
                        }
                    }
                }
            },
            agregarDinero: function(cantidad) {
                if (cajeroAutomatico.sistema.esNumero(cantidad)) {
                    cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
                    cajeroAutomatico.sistema.operacionRealizada();
                    cajeroAutomatico.sistema.dataLog("info", "administrador", 7, "Ingreso de " + cantidad + cajeroAutomatico.moneda);
                    if (debugMode) {
                        console.info("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
                    }
                    return true;
                } else {
                    cajeroAutomatico.sistema.operacionFallida();
                    cajeroAutomatico.sistema.dataLog("error", "administrador", 8, "Ingreso fallido por " + cantidad + " - errónea.");
                    if (debugMode) {
                        console.warn(cantidad + " No es un numero valido!");
                    }
                    return false;
                }
            },
            quitarDinero: function(cantidad) {
                if (cajeroAutomatico.sistema.esNumero(cantidad)) {
                    cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
                    cajeroAutomatico.sistema.operacionRealizada();
                    cajeroAutomatico.sistema.dataLog("info", "administrador", 9, "Retirada de " + cantidad + cajeroAutomatico.moneda);
                    if (debugMode) {
                        console.info("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
                    }
                    return true;
                } else {
                    cajeroAutomatico.sistema.operacionFallida();
                    cajeroAutomatico.sistema.dataLog("error", "administrador", 10, "Retirada fallida por " + cantidad + " - errónea.");
                    if (debugMode) {
                        console.warn(cantidad + " No es un numero valido!");
                    }
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
                        if (debugMode) {
                            console.info("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
                        }
                        return true;
                    } else {
                        cajeroAutomatico.sistema.operacionFallida();
                        cajeroAutomatico.sistema.dataLog("error", "usuario", 2, "Retirada fallida por " + cantidad + " errónea. Usuario: " + nombre);
                        if (debugMode) {
                            console.warn(cantidad + " No es un numero valido!");
                        }
                        return false;
                    }
                } else {
                    cajeroAutomatico.sistema.operacionFallida();
                    cajeroAutomatico.sistema.dataLog("error", "usuario", 3, nombre + " No es cliente");
                    if (debugMode) {
                        console.warn(nombre + " No eres un cliente de " + cajeroAutomatico.empresaPropietaria + "!");
                    }
                    return false;
                }
            },
            ingresarEfectivo: function(nombre, cantidad) {
                if (cajeroAutomatico.sistema.esCliente(nombre)) {
                    if (cajeroAutomatico.sistema.esNumero(cantidad)) {
                        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
                        cajeroAutomatico.sistema.operacionRealizada();
                        cajeroAutomatico.sistema.dataLog("info", "usuario", 4, "Ingreso de " + cantidad + cajeroAutomatico.moneda + " por " + nombre);
                        if (debugMode) {
                            console.info("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
                        }
                        return true;
                    } else {
                        cajeroAutomatico.sistema.operacionFallida();
                        cajeroAutomatico.sistema.dataLog("error", "usuario", 5, "Ingreso fallido por " + cantidad + " - errónea. Usuario: " + nombre);
                        if (debugMode) {
                            console.warn(cantidad + " No es un numero valido!");
                        }
                        return false;
                    }
                } else {
                    cajeroAutomatico.sistema.operacionFallida();
                    cajeroAutomatico.sistema.dataLog("error", "usuario", 6, nombre + " No es cliente");
                    if (debugMode) {
                        console.warn(nombre + " No eres un cliente de " + cajeroAutomatico.empresaPropietaria + "!");
                    }
                    return false;
                }
            }
        },
        eventos: {
            agregar: null,
            quitar: null,
            cache: function (e) {
                if (debugMode) {
                var conexion = (navigator.onLine) ? 'sí': 'no';
                var type = e.type;
                console.log('Conectado: ' + conexion+', Evento: ' + type +", \nMás Información: %O", e);
                }
            },
            manejador: function(evento) {
                if (debugMode) {
                    console.group("Manejador de Eventos");

                    console.log("-----------------------------");
                    console.log("Type: " + evento.type); // Tipo
                    console.log("Bubbles: " + evento.bubbles); // sube por el DOM
                    console.log("Cancelable: " + evento.cancelable);
                    console.log("CurrentTarget: ", evento.currentTarget);
                    console.log("DefaultPrevented: " + evento.defaultPrevented);
                    console.log("EventPhase: " + evento.eventPhase);
                    console.log("Target: ", evento.target);
                    console.log("TimeStamp: " + evento.timeStamp);
                    console.log("IsTrusted: " + evento.isTrusted); // true - Usuario o false - Script
                    console.log("=============================");

                    console.groupEnd();
                }
            }
        },
        ui: {
            detalles: function () {
                var detallesCajero = '<div><p><b>Detalles Técnicos:</b>';
                detallesCajero = 'Es un cajero de la empresa '+ cajeroAutomatico.empresaPropietaria + '.';
                detallesCajero += ' El modelo '+cajeroAutomatico.modelo+' de la serie '+cajeroAutomatico.serie+ '('+cajeroAutomatico["año"]+').';
                detallesCajero += ' Es un '+cajeroAutomatico.tipo+' con un peso estimado de '+cajeroAutomatico.peso+cajeroAutomatico.unidadPeso;
                detallesCajero += ' y un volumen de '+cajeroAutomatico.volumen+'.</br>';
                
                if(cajeroAutomatico.materiales.length){
                    detallesCajero += '<b>Materiales presentes:</b><ul>';
                    for (var i = 0; i < cajeroAutomatico.materiales.length; i++ ) {
                        detallesCajero += '<li>'+cajeroAutomatico.materiales[i]+'</li>';
                    }
                    detallesCajero += '</ul>';
                }
                
                detallesCajero += '</p><p><b>Clientes Autorizados ('+cajeroAutomatico.clientesAutorizados.length+'):</b></p>';
                detallesCajero += '<ul>';
                for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
                    detallesCajero += '<li>'+cajeroAutomatico.clientesAutorizados[i]+'</li>';
                }
                detallesCajero += '</ul>';
                
                
                
                if(cajeroAutomatico.log){
                    detallesCajero += '<p><b>Información Operativa:</b></p>';
                    detallesCajero += '<p>Total de Operaciones: '+cajeroAutomatico.log.length+'</p>';
                }
                
                if(cajeroAutomatico["operaciones realizadas"]){
                    detallesCajero += '<p>Operaciones Exitosas: ' + cajeroAutomatico["operaciones realizadas"]+ '</p>';
                }
                
                if(cajeroAutomatico["operaciones fallidas"]){
                    detallesCajero += '<p>Operaciones Fallidas: ' + cajeroAutomatico["operaciones fallidas:"]+'</p>';
                }
                
                detallesCajero += '</p><p><b>Información Financiera:</b></p>';
                detallesCajero += '<p>Dinero disponible: '+cajeroAutomatico.dineroDisponible+' '+cajeroAutomatico.moneda+' | '+(cajeroAutomatico.dineroDisponible*euro2bitcoin).toFixed(2)+' Bitcoins | '+(cajeroAutomatico.dineroDisponible*euro2dolar).toFixed(2)+' Dolares </p>';
                detallesCajero += '</div>';
                document.querySelector("#informacion").innerHTML = detallesCajero;
            },
            detallesLog: function(){
                if (cajeroAutomatico.log){
                    var detallesLogCajero = '<table class="table table-hover">';
                    detallesLogCajero += '<thead><tr>';
                    detallesLogCajero += '<td>#ID</td>';
                    detallesLogCajero += '<td>Tipo</td>';
                    detallesLogCajero += '<td>Causa</td>';
                    detallesLogCajero += '<td>Código</td>';
                    detallesLogCajero += '<td>Descripción</td>';
                    detallesLogCajero += '</tr></thead><tbody>';
                    
                    console.info(cajeroAutomatico.log);
                    console.log(cajeroAutomatico.log.length);
                    console.log(cajeroAutomatico.log[0]);
                    console.log(cajeroAutomatico.log[1][1]);
                    
                    for(var i = 1; i <= cajeroAutomatico.log.length-1; i++){
                        
                        if(cajeroAutomatico.log[i][1] === "error"){
                            detallesLogCajero += '<tr class="danger">';
                        } else {
                            detallesLogCajero += '<tr>';
                        }
                        
                        detallesLogCajero += '<td>'+cajeroAutomatico.log[i][0]+'</td>';
                        detallesLogCajero += '<td>'+cajeroAutomatico.log[i][1]+'</td>';
                        detallesLogCajero += '<td>'+cajeroAutomatico.log[i][2]+'</td>';
                        detallesLogCajero += '<td>'+cajeroAutomatico.log[i][3]+'</td>';
                        detallesLogCajero += '<td>'+cajeroAutomatico.log[i][4]+'</td>';
                        detallesLogCajero += '</tr>';

                    }
                    
                    detallesLogCajero += '</tbody></table>';
                    document.querySelector("#log").innerHTML = detallesLogCajero;
                    
                }
            }
        }
    };

    // Init-time branching
    if (typeof window.addEventListener === 'function') {
        cajeroAutomatico.eventos.agregar = function(el, type, fn) {
            el.addEventListener(type, fn, false);
        };
        cajeroAutomatico.eventos.quitar = function(el, type, fn) {
            el.removeEventListener(type, fn, false);
        };
    } else { // Soporte para IE8
        cajeroAutomatico.eventos.agregar = function(el, type, fn) {
            el.attachEvent('on' + type, fn);
        };
        cajeroAutomatico.eventos.quitar = function(el, type, fn) {
            el.detachEvent('on' + type, fn);
        };
    }

    if (volumenRequerido) {
        cajeroAutomatico.volumen = cajeroAutomatico.alto * cajeroAutomatico.ancho * cajeroAutomatico.largo + " " + cajeroAutomatico.volumenMedida;
    }

    // -- Control de Eventos --
    
    // Eventos Usuario
    cajeroAutomatico.eventos.agregar(document.querySelector("#ingresarEfectivoCliente"), 'click', function (e) {
        var usuarioCliente = document.getElementById("usuarioCliente").value;
        var dineroCliente = parseInt(document.getElementById("dineroCliente").value, 10);
        cajeroAutomatico.cliente.ingresarEfectivo(usuarioCliente, dineroCliente);
        cajeroAutomatico.eventos.manejador(e);
    });
    
    cajeroAutomatico.eventos.agregar(document.querySelector("#retirarEfectivoCliente"), 'click', function (e) {
        var usuarioCliente = document.getElementById("usuarioCliente").value;
        var dineroCliente = parseInt(document.getElementById("dineroCliente").value, 10);
        cajeroAutomatico.cliente.retirarEfectivo(usuarioCliente, dineroCliente);
        cajeroAutomatico.eventos.manejador(e);
    });
    

    // Eventos Administrador
    
    cajeroAutomatico.eventos.agregar(document.querySelector("#retirarEfectivoAdministrador"), 'click',  function (e) {
        var dineroAdministrador = parseInt(document.getElementById("dineroAdministrador").value, 10);
        cajeroAutomatico.administrador.quitarDinero(dineroAdministrador);
        cajeroAutomatico.eventos.manejador(e);
    });
    
    cajeroAutomatico.eventos.agregar(document.querySelector("#ingresarEfectivoAdministrador"), 'click', function (e) {
        var dineroAdministrador = parseInt(document.getElementById("dineroAdministrador").value, 10);
        cajeroAutomatico.administrador.agregarDinero(dineroAdministrador);
        cajeroAutomatico.eventos.manejador(e);
    });
    
    cajeroAutomatico.eventos.agregar(document.querySelector("#eliminarClienteAdministrador"), 'click', function (e) {
        var usuarioAdministrador = document.getElementById("usuarioAdministrador").value;
        cajeroAutomatico.administrador.quitarCliente(usuarioAdministrador, clientesBD);
        cajeroAutomatico.eventos.manejador(e);
    });
    
    cajeroAutomatico.eventos.agregar(document.querySelector("#agregarClienteAdministrador"), 'click', function (e) {
        var usuarioAdministrador = document.getElementById("usuarioAdministrador").value;
        cajeroAutomatico.administrador.agregarCliente(usuarioAdministrador, clientesBD);
        cajeroAutomatico.eventos.manejador(e);
    });


    cajeroAutomatico.eventos.agregar(document.querySelector("#informacionAdministrador"), 'click', function (e) {
        cajeroAutomatico.ui.detalles();
        cajeroAutomatico.ui.detallesLog();
        cajeroAutomatico.eventos.manejador(e);
    });

    cajeroAutomatico.eventos.agregar(document.querySelector("#muteAdministrador"), 'click', function (e) {
        if(debugMode){
            debugMode = false;
            console.clear();
        } else {
            debugMode = true;
        }
        cajeroAutomatico.eventos.manejador(e);
    });
    
    // Eventos Cache
    cajeroAutomatico.eventos.agregar(window.applicationCache, 'cached', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });
    
    cajeroAutomatico.eventos.agregar(window.applicationCache, 'checking', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });

    cajeroAutomatico.eventos.agregar(window.applicationCache, 'downloading', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });

    cajeroAutomatico.eventos.agregar(window.applicationCache, 'error', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });

    cajeroAutomatico.eventos.agregar(window.applicationCache, 'noupdate', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });

    cajeroAutomatico.eventos.agregar(window.applicationCache, 'obsolete', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });

    cajeroAutomatico.eventos.agregar(window.applicationCache, 'progress', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });

    cajeroAutomatico.eventos.agregar(window.applicationCache, 'updateready', function (e) {
        cajeroAutomatico.eventos.cache(e);
    });

// Público
return {secreto: "¿Sorprendido?"};

})(window);