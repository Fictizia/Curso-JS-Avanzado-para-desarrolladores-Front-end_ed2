# Clase 21

### NVM  (manejando varias versiones de Node)

- **Comrpobando la version de NVM:**
```
    nvm --version
```

- **Instalando una version:**
```
    nvm install 0.12
```

- **Desinstalando una version:**
```
    nvm uninstall 0.12
```

- **Usar una version (globalmente):**
```
  nvm use 0.12
```

- **Usando versiones (por proyecto):**
```
    echo 0.12 > .nvmrc
```

```
    nvm use
```


### Actualizando Node (método alternativo)
- Sin soporte a Windows
- Instalando el [paquete n](https://www.npmjs.com/package/n)
```
npm install -g n
```
- **Opciones**
```
  n                              Output versions installed
  n latest                       Install or activate the latest node release
  n -a x86 latest                As above but force 32 bit architecture
  n stable                       Install or activate the latest stable node release
  n lts                          Install or activate the latest LTS node release
  n <version>                    Install node <version>
  n use <version> [args ...]     Execute node <version> with [args ...]
  n bin <version>                Output bin path for <version>
  n rm <version ...>             Remove the given version(s)
  n --latest                     Output the latest node version available
  n --stable                     Output the latest stable node version available
  n --lts                        Output the latest LTS node version available
  n ls                           Output the versions of node available
```



### Malas Prácticas:
- No tener en cuenta los problemas de portabilidad. Cada sistema operativo tiene sus propios comandos (Unix vs. Win).
- Forzar al sistema operativo a continuar la ejecucción de Node
	- `process.stdin.resume();`
- Objetos globales al estilo *window*. **Mala idea**
```javascript
	global.config = require('config');
```
- Usar dependencias de otros modulos directamente al nivel de la aplicación
```javascript
	require('./node_modules/express/node_modules/connect')
```
- No entender las dependencias cruzadas de tu proyecto
- No estudiar tus dependencias directas
- No desarrollar tus propias librerías de utilidades y recursos comunes para situaciones recurrentes
- No entender la filosofía de JavaScript
- Actualizarte siguiendo tu instinto o reglas fijas como SemVer.
- Sigue las modas... aplicando filosofías y frameworks que estan pensados para resolver situaciones distintas a la tuya.





### Buenas Práticas:
- Anclar las versiones de las dependéncias en el *package.json*
	- Mal
	```javascript
		//...
		"dependencies": {
			"express": ">=3.2.0"
		},
		//...
	```
	- Bien
	```javascript
		//...
		"dependencies": {
			"express": "3.2.0"
		},
		//...
	```
- Modulos, modulos y más modulos... estructura tu codigo en archivos y agrupalo por funcionaldiades.
- Trabaja tu propio codigo como si de librerías se tratara.
- El alma de tu aplicación es *package.json*. Mantenlo al día
- Piensa en los demás. ¡No trabajas solo! Documenta, testea, estructura y encapsula.
- Manten en mente los diversos entornos (development, production y que tu aplicación se adpate fácil)
```javascript
		//config
		module.exports: {
			'production': {
				token: "xxxxx",
				port: 8080
				//etc...
			},
			'development': {
				token: "yyyyy",
				port: 3000
				//etc...
			}
		}
```
- Programa siempre pensando en que se puedan intercambiar las piezas, librerías y modulos evolucionan a otro ritmo que tu proyecto.
- Programa pensando en la estructura.
- Refactoriza amenudo.
- Se la corriente en el rio y no la piedra. Respeta el principio de ([no acción 无为](https://www.wikiwand.com/es/Wu_wei));
- La flexibilidad de JavaScript es tu mejor aliado.
- No anides en exceso, usa manejadores y otros artilúgios
![funciones en funciones](https://jordankasper.com/js-testing/images/meme-functions.jpg)
- La velocidad en Node... se basa en eventos. Usa eventos, emite tus propios eventos.
- No se trata de hacer asíncrono lo que es síncrono... sino de pensar asincronamente.
![cuchara](https://i.ytimg.com/vi/huPf4MgPrlI/hqdefault.jpg)


### Ejercicios

**1 -** Crearemos una landing partiendo de una idea original y divertida.

Objetivos:
- Para ello utilizaremos algun generador.

```javascript
	// Tu solución
```

**2 -** Utiliza Gulp para optimizar el flujo de trabajo de tu proyecto personal

```javascript
	// Tu solución
```
