    var nuevasRutas = [ ["Tetuán", 12], ["Moncloa", 19], ["Hortaleza", 21] ];

    function constructorDeTickets (estacion, tiempo) {
        return function (nombre) {
            console.log("Sr/a. "+nombre+".\n Muchas gracias por adquirir este ticket gratuito en el "+estacion+" express.\n El tiempo estimado de llegada es de "+tiempo+" minutos.\n Estamos trabajando en la mejora de nuestra vía principal, disculpe las molestias!");
        };
    }

    var tetuanExpress = constructorDeTickets ("Tetuán", 12);
    var moncloaExpress = constructorDeTickets (nuevasRutas[1][0], nuevasRutas[1][1]);
    var hortalezaExpress = constructorDeTickets (nuevasRutas[2][0], nuevasRutas[2][1]);

    tetuanExpress ("Pepe");
    moncloaExpress ("Luis");
    hortalezaExpress ("Hector");

//Otra alternativa sin declarar variable intermedia

    constructorDeTickets ("Tetuán", 12)("Pepe");

