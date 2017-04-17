### 1 - Basic Server
```javascript
/* CREATE BASIC SERVER */
/* Import HTTP module*/
var http = require('http');

/* INIT var SERVER */
var server = http.createServer().listen(process.env.PORT);

var contador = 0;
/* FN handler Requests and Responses */
function control(request,response){
    
    contador += 1;
    response.writeHead(200,{'content-type': 'text/plain; charset=utf-8'});
    response.write('¡HOLA MUNDO! '+contador);
    response.end();
    
};

server.on('request',control);

console.log(" ");
console.log("- - SERVER - -");
console.log('Servidor funcionando en http://'+process.env.IP+' Puerto:'+process.env.PORT);
console.log(" ");
```
### 2 - Reading URLS
```javascript
var url = require('url');
var demoURL = "http://localhost:3000/ruta?parametro=dato#detalle";

console.log("- - URLS - -");
console.log("El host: "+url.parse(demoURL).hostname);
console.log("El puerto: "+url.parse(demoURL).port);
console.log("La ruta: "+url.parse(demoURL).pathname);
console.log("El parametro: "+url.parse(demoURL).query);
console.log("El hash(#): "+url.parse(demoURL).hash);
console.log(" ");
```

### 3 - Create Routes
```javascript
var http = require("http");
    url = require("url");
    
var server = http.createServer().listen(process.env.PORT);
var c = 0;

var pathname;

function control(request,response){
    
    pathname = (url.parse(request.url).pathname).toLowerCase();
    
    console.info('\nPATH:',pathname)
    c += 1;
    
    if (pathname === '/' || pathname === '/index' ) {
        answer('Index');
    } else if (pathname === '/quienes-somos') {
        answer('¿Quienes somos?');

    } else if (pathname === '/donde-vamos') {
        answer('¿Dónde Vamos?');

    } else if (pathname === '/que-hacemos') {
        answer('¿Qué Hacemos?');

    } else if (pathname === '/contacto') {
        answer('Contacto');

    } else {
        error(404);
    };
    
    function answer(where){
        //PINTA MAL EL TEXTO AL PASARLO COMO PARAMETRO!!!
        response.writeHead(200, {'Content-Type': 'text-plain; charset=utf-8'});
        response.end(c+' '+where);
    };
    
    function error(which){
        response.writeHead(which, {'Content-Type': 'text-plain; charset=utf-8'});
        if(which === 404){
            response.end(c+' '+'ERROR: '+which);
        }
        
    };

};

server.on('request',control)

console.log('\n- - - START - - -');
console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/')
```
#### URLS en C9
[https://nodejs-test-grahovsky.c9users.io/](https://nodejs-test-grahovsky.c9users.io/)

[https://nodejs-test-grahovsky.c9users.io/quienes-somos](https://nodejs-test-grahovsky.c9users.io/quienes-somos)

[https://nodejs-test-grahovsky.c9users.io/donde-vamos](https://nodejs-test-grahovsky.c9users.io/donde-vamos)

[https://nodejs-test-grahovsky.c9users.io/que-hacemos](https://nodejs-test-grahovsky.c9users.io/que-hacemos)

[https://nodejs-test-grahovsky.c9users.io/Contacto](https://nodejs-test-grahovsky.c9users.io/Contacto)

[https://nodejs-test-grahovsky.c9users.io/Cont](https://nodejs-test-grahovsky.c9users.io/Cont)
