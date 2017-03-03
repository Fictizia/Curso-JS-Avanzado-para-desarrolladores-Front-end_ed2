# Clase 6

### Open Source Weekends (OSWeekends)

![company](https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/b/d/3/a/highres_456588442.jpeg)

**Lugar**
    - [Campus Madrid](https://www.campus.co/madrid/es)
**Fecha**
    - Sábado, 4 de Marzo. 10:30-14:30
**Contenido**
    - Microcharla de React con [xDae](https://github.com/xdae)
    - Microtaller de Git y Github con [cbravobernal](https://github.com/cbravobernal)
    - Grupos de Trabajo y Proyectos activos
**Apuntate**
    - [Meetup](https://www.meetup.com/es-ES/Open-Source-Weekends/events/236844606/)
    - [Slack](https://invitations-osweekends.herokuapp.com/)

### BOM (Browser Object Model)

![DOM, BOM y JS](http://javascript.info/files/tutorial/browser/JSTop.png)

**window.history**
- propiedades:
```javascript
	history.length
```
- Métodos:
```javascript
	// Ir atras
	history.go(-1);
	history.back();
	
	// Ir adelante
	history.go(1);
	history.forward();
```

**window.navigator**
- Propiedades:
```javascript
	function conversorTiempo(segundos){
		var fecha = new Date(segundos * 1000);
		var hh = fecha.getUTCHours();
		var mm = fecha.getUTCMinutes();
		var ss = fecha.getSeconds();

		if (hh < 10) {hh = "0"+hh;}
		if (mm < 10) {mm = "0"+mm;}
		if (ss < 10) {ss = "0"+ss;}

		return hh+":"+mm+":"+ss;
	}

	function informacionSistema(){
		console.log("appCodeName:", window.navigator.appCodeName);
		console.log("appName:", window.navigator.appName);
		console.log("appVersion:", window.navigator.appVersion);
		console.log("platform:", window.navigator.platform);
		console.log("product:", window.navigator.product);
		console.log("userAgent:", window.navigator.userAgent);
		console.log("javaEnabled:", window.navigator.javaEnabled());
		console.log("language (used):", window.navigator.language);
		console.log("language (support):", window.navigator.languages);
		console.log("conectado a internet?", window.navigator.onLine);
		console.log("mimeTypes:",window.navigator.mimeTypes);
		console.log("Plugins:", navigator.plugins);

		navigator.getBattery().then(function(bateria){
			console.log("Batería cargando?", bateria.charging)
			
			if(bateria.charging){
				console.log("Tiempo de carga:", bateria.chargingTime)
			}
			console.log("Batería %:", bateria.level*100)
			console.log("Tiempo restante:", conversorTiempo(bateria.dischargingTime))

		});

	}
```

**window.screen**
- Propiedades:
```javascript
	function informacionPantalla(){
		console.log("availTop:", window.screen.availTop);
		console.log("availLeft:", window.screen.availLeft);
		console.log("availHeight:", window.screen.availHeight);
		console.log("availWidth:", window.screen.availWidth);
		console.log("colorDepth:", window.screen.colorDepth);
		console.log("height:", window.screen.height);
		console.log("left:", window.screen.left);
		console.log("orientation:", window.screen.orientation);
		console.log("pixelDepth:", window.screen.pixelDepth);
		console.log("top:", window.screen.top);
		console.log("width:", window.screen.width);
	}
```



**Window.location y Document.location**

- Propiedades:
```javascript
	function informacionEnlace(url){
	
		var enlace = document.createElement('a');
		enlace.href = url || 'https://fictizia.com:3000/formacion/curso_javascript?q=JS#contenido-curso';
		
		console.log("href:" ,enlace.href);
		console.log("protocol:", enlace.protocol);
		console.log("host:", enlace.host);
		console.log("hostname:", enlace.hostname);
		console.log("port:", enlace.port);
		console.log("pathname:", enlace.pathname);
		console.log("search:", enlace.search);
		console.log("hash:", enlace.hash);
		console.log("origin:", enlace.origin);
	}
```

- Métodos:
	- .assign() *Carga una página nueva*
	```javascript
		document.location.assign('http://fictizia.com/formacion/curso_javascript');
	```
	- .reload() *Recarga*
	```javascript
		document.location.reload(); // Recarga
		document.location.reload(true); // Recarga sin usar el cache
		document.location.reload(forcedReload); // Recarga SIEMPRE sin usar el cache
	```
	- .replace() *Carga una página nueva, sustituyendo la actual en el historial*
	```javascript
		document.location.replace('http://fictizia.com/formacion/curso_javascript');
	```
	- .toString() *Devuelve el href como cadena*
	```javascript
		var enlace = document.createElement('a');
		enlace.href = 'http://fictizia.com/formacion/curso_javascrip';
		
		console.log("toString:" ,enlace.toString());
	```


### DOM

- **[DOM - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)**
- **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)**
- **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)**
- **[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)**


IMPORTANTE:  Los retornos de *Node.childNodes* y *document.querySelectorAll* - NO son arrays. 

```javascript

var listaDivs = document.querySelectorAll('div');

// Iteración
for (var i = 0; i < listaDivs.length; ++i) {
  var elemento = listaDivs[i];
  console.log("Elemento: ", elemento);
}

// Conversión
var listaDivsArray = Array.prototype.slice.call(listaDivs);
```

### Estilos con Javascript
```javascript
// getter
window.getComputedStyle(document.getElementById("id"));
window.getComputedStyle(document.body).getPropertyValue('display');
// setter
document.body.style.display="none";
document.getElementById("id").style.display="none";
```


### Selectors

- [Soporte](http://caniuse.com/#search=querySelector)

- Convencional:
    - getElementById():
    ```javascript
        // <tag id = "x" >
        document.getElementById("id");
    ```
    
    - getElementsByName():
    ```javascript
        // <tag name = "x" >
        document.getElementsByName("fname");
    ```
    
    - getElementsByTagName():
    ```javascript
        // <tag >
        document.getElementsByTagName("input");
    ```

- Selectores CSS3:

    - URL que empieza con "javascript:"
    ```javascript
        a[href^="javascript:"] {color:blue;}
    ```
    
    - URL que contiene "google.es"
    ```javascript
        a[href*="google.es"] {color:orange;}
    ```
    
    - URL que termina con ".pdf"
    ```javascript
        a[href$=".pdf"] {color:red;}
    ```


- Comprobando disponibilidad del API:
```javascript
// op.1 - Positivo

    if( document.querySelector && document.querySelectorAll ){
        console.info("querySelector() y querySelectorAll() estan soportados!!")
    } else {
        console.warn("querySelector() y querySelectorAll() no estan soportados!!")
    }
// op.2 - Negativo

    if( typeof document.querySelector !== "function" && typeof document.querySelectorAll !== "function" ){
        console.warn("querySelector() y querySelectorAll() no estan soportados!!")
    } else {
        console.info("querySelector() y querySelectorAll() estan soportados!!")
    }

```

- querySelector():
Devuelve el primer elemento que coincida con el selector 

```html
    <div id="miDiv">
        <span id="miId5" class="miClase" title="cinco"></span>
        <span id="miId4" class="miClase" title="cuatro"></span>
        <span id="miId3" class="miClase" title="tres"></span>
        <span id="miId2" class="miClase" title="dos"></span>
        <span id="miId1" class="miClase" title="uno"></span>
    </div> 
```

```javascript
    document.getElementById('miId1').title // uno
    document.querySelector('#miDiv .miClase').title // cinco
    document.querySelector('#miDiv #miId1.miClase').title // uno
    document.querySelector('#miDiv .inventado').title // ERROR -> undefined
    document.querySelector('#miDiv .miClase[title^=u]').title // uno
```

- querySelectorAll():
Devuelve todos los elementos que coincida con el selector en un pseudo-array
```javascript
    document.querySelectorAll('#miDiv .miClase') // [<span id="miId5" ... ]
    document.querySelectorAll('p') // todos los parrafos
    document.querySelectorAll('div, img') // todos los divs e imágenes
    document.querySelectorAll('a > img') // todos las imágenes contenidas en enlaces
```

### Conversión a Arrays

- Mas info en [Convert NodeList to Array de David Walsh](https://davidwalsh.name/nodelist-array)
```javascript

//Opción 1
var nodesArray = Array.prototype.slice.call(document.querySelectorAll("div"));

//Opción 2
var nodesArray = [].slice.call(document.querySelectorAll("div"));
```

### Trabajar sin JQuery

- **[You Might Not Need Jquery](http://youmightnotneedjquery.com/)**
- **[You Might Not Need Jquery(en GitHub)](https://github.com/HubSpot/youmightnotneedjquery)**


### Extras

- [15 JavaScript Methods For DOM Manipulation for Web Developers](http://www.hongkiat.com/blog/dom-manipulation-javascript-methods/)
- [The Basics of JavaScript DOM Manipulation](http://callmenick.com/post/basics-javascript-dom-manipulation)

### Ejercicios

**¡No pierdas el tren!** Llevemos pocos días de curso pero han sido intensos...

Para la próxima clase tienes que haber terminado los ejercicios del cajero automático y del sistema acuapónico.


**¡Toma la delantera!** Empieza a pensar en el proyecto personal....

- ¿Qué tema te apaasiona lo suficiente para no rendirte con las dificultades?
- ¿Qué librerías te gustaría utilizar?
- En cuanto a los datos... ¿De donde sacar la información?