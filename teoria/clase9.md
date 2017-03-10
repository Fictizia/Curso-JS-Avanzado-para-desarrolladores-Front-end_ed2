# Clase 9

### Trabajando con APIs

*CRUD*

- Create:
  - Method (POST):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
    - Respuesta 409 - Conflicto, ya existe
- Read:
  - Method (GET):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado
- Update:
  - Method (PUT):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
- Delete:
  - Method (DELETE):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado


![HTTP Protocolo](http://fundamentos-redes.wikispaces.com/file/view/3.3.2_Servicio_WWW_y_HTTP.jpg/255291246/960x432/3.3.2_Servicio_WWW_y_HTTP.jpg)

- Por tipología:
  - 1xx Informativas
  - 2xx Peticiones Correctas
  - 3xx Redirecciones
  - 4xx Errores Cliente
  - 5xx Errores Servidor
- [Lista de respuestas HTTP](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
- [Especificación](https://tools.ietf.org/html/rfc2616#section-10)

- Ejemplos:
	- [API RTVE](https://github.com/UlisesGascon/RTVE-API)

### AJAX

![Ajax comparación](http://gemsres.com/story/feb07/338111/fig1.jpg)

*Con Jquery*

```javascript
    function peticionJqueryAjax (url) {

	    $.ajax({
	        dataType: "json",
	        url: url,
	    })
	     .done(function( data, textStatus, jqXHR ) {
	         if ( console && console.log ) {
	             console.log( "La solicitud se ha completado correctamente." );
	             console.log( data );
	         }
	     })
	     .fail(function( jqXHR, textStatus, errorThrown ) {
	         if ( console && console.log ) {
	             console.log( "La solicitud a fallado: " +  textStatus);
	         }
	    });
	
	}
	
	peticionJqueryAjax ("<---URL---->");
```

*Vainilla JS*

- *Cambiando la cabecera*

Para cambiar datos en la cabecera se usa [.setRequestHeader()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader). Debe ser incluido antes de enviar la petición y después de abrir.

- *readyState*:
    - 0 es *uninitialized*
    - 1 es *loading*
    - 2 es *loaded*
    - 3 es *interactive*
    - 4 es *complete*

```javascript
    function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                console.info(JSON.parse(xmlHttp.responseText));
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
                console.info(JSON.parse(xmlHttp.responseText));
            }
        };
        xmlHttp.open("GET", url, true);
        // Modificación de cabeceras
        xmlHttp.send();
    }

    peticionAjax("<---URL---->");
```

**Subir Imágenes**

```javascript
var imagen = document.getElementById("imagen-formulario").files[0];
var xhr = new XMLHttpRequest(); 
xhr.open("POST", url);
xhr.setRequestHeader("Content-Type", "image/png");
xhr.onload = function (detalles) { 
    // Terminado!
};
xhr.send(imagen);
```

### JSON

- JSON.parse()
  - Analiza la cadena y retorna los valores

- JSON.stringify()
  - Analiza los valores y retorna una cadena 

### JSONP

- json (formato)
  ```javascript
    { foo: 'bar' }
  ```
- callback (cliente)
  ```javascript
    mycallback = function(data){
      alert(data.foo);
    };
  ```
  
- peticion (cliente)
  ```javascript
    var url = "http://www.example.net/sample.aspx?callback=mycallback";
  ```
  
- respuesta (servidor)
  ```javascript
    mycallback({ foo: 'bar' });
  ```

- Ejemplo de CORS y JSONP con [php de formandome](http://www.formandome.es/javascript/cors-vs-jsonp-solicitudes-ajax-entre-dominios/)
  ```php
    <?php
    header('content-type: application/json; charset=utf-8');
    header("access-control-allow-origin: *");
     
    //Cadena de conexión:
    $connect = mysql_connect("localhost", "usuario", "pwd")
    or die('Could not connect: ' . mysql_error());
     
    //seleccionamos bbdd:
    $bool = mysql_select_db("database", $connect);
    if ($bool === False){
       print "No puedo encontrar la bbdd: $database";
    }
     
    //inicializamos el cliente en utf-8:
    mysql_query('SET names utf8');
   
    $query = "SELECT * FROM futbolistas";
     
    $result = mysql_query($query) or die("SQL Error: " . mysql_error());
    $data = array();
    // obtenemos los datos:
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $data[] = array(
            'id' => $row['id'],
            'nombre' => $row['nombre'],
            'apellido' => $row['apellido'],
            'posicion' => $row['posicion'],
            'equipo' => $row['equipo'],
            'dorsal' => $row['dorsal'],
            'desc' => $row['desc'],
    	'imagen' => $row['imagen']
          );
    }
     
    //codificamos en json:
    $json = json_encode($data);
     
    //enviamos json o jsonp según venga o no una función de callback:
    echo isset($_GET['callback'])
        ? "{$_GET['callback']}($json)"
        : $json;
    ?>
  ```

Soporte en cliente (librerías):
- Jquery:
  ```javascript
    // Using YQL and JSONP
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
     
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
     
        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",
     
        // Tell YQL what we want and that we want JSON
        data: {
            q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },
     
        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        }
    });  
  ```
- [jsonp.js de Przemek Sobstel](https://github.com/sobstel/jsonp.js/blob/master/jsonp.js)
- [J50Npi.js de Roberto Decurnex](https://github.com/robertodecurnex/J50Npi/blob/master/J50Npi.js)


### Fetch, una alternativa a XMLHttpRequest

- [Fetch API by DWB](https://davidwalsh.name/fetch)
- [Introduction to fetch() By Matt Gaunt](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- [This API is so Fetching! by Mozilla Hacks](https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/)
- [That's so fetch! by Jake Archibald](https://jakearchibald.com/2015/thats-so-fetch/)
- [Can I use? Fetch](http://caniuse.com/#search=fetch)


### CORS

- [Using CORS by html5rocks](https://www.html5rocks.com/en/tutorials/cors/)
- [Control de acceso HTTP (CORS) by MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)
- [Cross-origin resource sharing en Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [Enable cross-origin resource sharing](https://enable-cors.org/)
- [crossorigin.me (Proxy)](https://crossorigin.me/)

### Ejercicios

**1 -** Sacar en el html la respuesta de [OMDB](http://omdbapi.com/) para la pelicula Hackers

```javascript
	// Tu solución
```

**2 -** Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401


```javascript
	// Tu solución
```

**3 -** Crea una web que nos permita ver los detalles almacenados en IMBD de una pelicula partiendo únicamente del título
Recursos:
- [OMDb API - The Open Movie Database](http://omdbapi.com/)

```javascript
	// Tu solución
```