# Clase 20


### NPM

![npm_logo](http://ohdoylerules.com/content/images/npm-logo.svg)

- **Instalar paquetes:**
  - global:
```
    npm install -g <paquete>
```  

  - local:
```
    npm install <paquete>
```    


- **Buscar paquetes**
```
    npm search <paquete>
```

- **Información de los paquetes**
```
    npm view <paquete>
```

- **Lista de paquetes instalados**
```
    npm ls
```

- **Lista de paquetes instalados globalmente**
```
    npm ls -g
```


- **Instalando versiones especificas:**

  - la más reciente:
```  
    npm install <paquete>@latest
```  

  - versión especifica:
```  
    npm install <paquete>@1.x (1.xx.xx)
```

  - Otra versión especifica
```
    npm install <paquete>@2.10.x (2.10.x)
```

- **Paquetes desactualziados:**
```
  npm outdated
```

- **Actualizando paquetes:**
```
  npm update <paquete>
```

- **Desinstalando paquete:**
```
  npm uninstall <paquete>
```

- **Información sobre Bugs**
```
  npm bugs <paquete>
```

- **[Más comandos - CLI](https://docs.npmjs.com/cli/install)**

### Dependency Hell:

**Abyssus abyssum invocat. El abismo llama al abismo.**

- [nipster](http://nipstr.com/)
- [Nodei.co](https://nodei.co/)
- [Dependency Hell](http://www.wikiwand.com/en/Dependency_hell)
- [David Dm](https://david-dm.org/)
   - [Ejemplo Twitter-sentiments](https://david-dm.org/UlisesGascon/twitter-sentiments#info=dependencies&view=list)
   - [Ejemplo Grunt](https://david-dm.org/gruntjs/grunt#info=dependencies&view=table)
   - [Ejemplo Express](https://david-dm.org/strongloop/express)
   - [Ejemplo Bower](https://david-dm.org/bower/bower#info=dependencies&view=table)
- [ShieldsIO](http://shields.io/)
   - [Your Badge Service](http://badges.github.io/gh-badges/)


### package.json

- Datos proyecto
- Tareas
- Dependencias (dependencies y devDependencies)
- **[Documentación](https://docs.npmjs.com/files/package.json)**

- **Creación:**
```
  npm init
```

- **Guardar nuevas dependencias:**
```
 npm install <paquete> --save
```

- **Guardar nuevas dependencias (solo para entorno desarrollo):**
```
 npm install <paquete> --save -dev
```

- **Guardando versiones especificas:**
  - (1.xx.xx):
```
  npm install --save <paquete>@1.x
```

  - (2.10.x)
```
  npm install --save <paquete>@2.10.x
```

  - Latest
```
  npm install --save <paquete>@lastest
```

- **Quitando dependencias:**
```
  npm uninstall <paquete> --save
```

- **Instalamos las dependencias en el proyecto:**
  - todo:
```
  npm install (todo)
```

  - Solo production:
```
  npm install --production (solo producción)
```

  - Solo development:
```
  npm install --dev
```

- **[Semantic Versioning](http://semver.org/lang/es/)**
	- Estructura -> X.Y.Z-Extra
	- Cambio Mayor - *No retrocompatible*
	- Cambio Menor - *Retrocompatible - Nuevas funcionaldiades o cambios*
	- Parche - *Retrocompatible - Solución de errores*
	- Extras - Indicativos o versiones especiales (Beta, Alfa, x86, etc...)

### npm scripts (comandos de CLI)

- **Añadiendo comandos:**

```javascript
  // ...
  "scripts": {
      "test": "npm -v",
      "start": "node -v",
      "hola": "echo 'Hola mundo!'"
  }
  // ...
```
- **Mostrando todos los comandos:**
```
    npm run
```

- **Ejecutando comandos:**
  - test
```
    npm test
```

  - start
```
    npm start
```

  - hola
```
    npm run hola
```


### Bower

![Bower Logo](http://image.slidesharecdn.com/bower-phxjs-140515152011-phpapp02/95/bower-phoenix-javascript-meetup-1-638.jpg?cb=1400167728)

> Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

- [Bower](http://bower.io/)
- [Tendencias Bower](http://bower.io/stats/)
- [Buscador Bower](http://bower.io/search/)


**Bower**
Instalamos Bower globalmente

```
  sudo npm install -g bower
```

Dependencias
```
  /home/ubuntu/.nvm/versions/node/v4.1.1/bin/bower -> /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/bower/bin/bower
  bower@1.6.6 /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/bower
  ├── is-root@1.0.0
  ├── destroy@1.0.3
  ├── stringify-object@1.0.1
  ├── junk@1.0.2
  ├── chmodr@1.0.2
  ├── user-home@1.1.1
  ├── q@1.4.1
  ├── abbrev@1.0.7
  ├── opn@1.0.2
  ├── bower-endpoint-parser@0.2.2
  ├── bower-logger@0.2.2
  ├── lockfile@1.0.1
  ├── archy@1.0.0
  ├── graceful-fs@3.0.8
  ├── nopt@3.0.6
  ├── lru-cache@2.7.3
  ├── retry@0.6.1
  ├── tmp@0.0.24
  ├── semver@2.3.2
  ├── md5-hex@1.1.0 (md5-o-matic@0.1.1)
  ├── fs-write-stream-atomic@1.0.4 (graceful-fs@4.1.2)
  ├── p-throttler@0.1.1 (q@0.9.7)
  ├── request-progress@0.3.1 (throttleit@0.0.2)
  ├── shell-quote@1.4.3 (array-filter@0.0.1, array-reduce@0.0.0, jsonify@0.0.0, array-map@0.0.0)
  ├── chalk@1.1.1 (escape-string-regexp@1.0.3, supports-color@2.0.0, ansi-styles@2.1.0, strip-ansi@3.0.0, has-ansi@2.0.0)
  ├── bower-json@0.4.0 (intersect@0.0.3, deep-extend@0.2.11, graceful-fs@2.0.3)
  ├── promptly@0.2.0 (read@1.0.7)
  ├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
  ├── which@1.2.0 (is-absolute@0.1.7)
  ├── bower-registry-client@1.0.0 (async@0.2.10, graceful-fs@4.1.2, request-replay@0.2.0, mkdirp@0.3.5)
  ├── mkdirp@0.5.0 (minimist@0.0.8)
  ├── glob@4.5.3 (inherits@2.0.1, inflight@1.0.4, once@1.3.3, minimatch@2.0.10)
  ├── fstream-ignore@1.0.3 (inherits@2.0.1, minimatch@3.0.0)
  ├── rimraf@2.4.4 (glob@5.0.15)
  ├── insight@0.7.0 (object-assign@4.0.1, async@1.5.0, tough-cookie@2.2.1, lodash.debounce@3.1.1, configstore@1.3.0, os-name@1.0.3)
  ├── bower-config@1.2.2 (graceful-fs@4.1.2, osenv@0.1.3, optimist@0.6.1)
  ├── github@0.2.4 (mime@1.3.4)
  ├── tar-fs@1.8.1 (pump@1.0.1, tar-stream@1.3.1)
  ├── request@2.53.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.9.0, tunnel-agent@0.4.1, oauth-sign@0.6.0, isstream@0.1.2, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, qs@2.3.3, node-uuid@1.4.7, form-data@0.2.0, mime-types@2.0.14, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.4, hawk@2.3.1)
  ├── cardinal@0.4.4 (ansicolors@0.2.1, redeyed@0.4.4)
  ├── update-notifier@0.3.2 (is-npm@1.0.0, string-length@1.0.1, semver-diff@2.1.0, latest-version@1.0.1)
  ├── decompress-zip@0.1.0 (mkpath@0.1.0, touch@0.0.3, readable-stream@1.1.13, binary@0.3.0)
  ├── handlebars@2.0.0 (optimist@0.3.7, uglify-js@2.3.6)
  ├── inquirer@0.10.0 (strip-ansi@3.0.0, ansi-regex@2.0.0, figures@1.4.0, ansi-escapes@1.1.0, cli-width@1.1.0, rx-lite@3.1.2, through@2.3.8, readline2@1.0.1, cli-cursor@1.0.2, run-async@0.1.0, lodash@3.10.1)
  ├── mout@0.11.1
  └── configstore@0.3.2 (object-assign@2.1.1, xdg-basedir@1.0.1, uuid@2.0.1, osenv@0.1.3, js-yaml@3.4.5)
```

Arrancamos bower.json
```
  bower init
```

```javascript
  {
    "name": "pruebas_bower",
    "homepage": "https://github.com/UlisesGascon/Curso-in-company-NexTReT",
    "authors": [
      "ulisesgascon"
    ],
    "description": "",
    "main": "",
    "moduleType": [],
    "license": "MIT",
    "private": true,
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ]
  }
```

Buscamos paquetes
```
  bower search <paquete>
  bower search jquery
```

Instalando Paquetes
```
  bower install <paquete>
  bower install jquery
```

Instalando versiones especificas del paquete
```
  bower install <package>#<version>
```

Instalando Paquetes y guardandolos en bower.json
```
  bower install <paquete> -save
  bower install bootstrap -save
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower install bootstrap -save
  bower jquery#~2.1.4             cached git://github.com/jquery/jquery.git#2.1.4
  bower jquery#~2.1.4           validate 2.1.4 against git://github.com/jquery/jquery.git#~2.1.4
  bower bootstrap#*           not-cached git://github.com/twbs/bootstrap.git#*
  bower bootstrap#*              resolve git://github.com/twbs/bootstrap.git#*
  bower bootstrap#*             download https://github.com/twbs/bootstrap/archive/v3.3.5.tar.gz
  bower bootstrap#*              extract archive.tar.gz
  bower bootstrap#*             resolved git://github.com/twbs/bootstrap.git#3.3.5
  bower jquery#~2.1.4            install jquery#2.1.4
  bower bootstrap#~3.3.5         install bootstrap#3.3.5
```

```javascript
  // bower.json
  {
    "name": "pruebas_bower",
    "homepage": "https://github.com/UlisesGascon/Curso-in-company-NexTReT",
    "authors": [
      "ulisesgascon"
    ],
    "description": "",
    "main": "",
    "moduleType": [],
    "license": "MIT",
    "private": true,
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ],
    "dependencies": {
      "jquery": "~2.1.4",
      "bootstrap": "~3.3.5"
    }
  }
```

Borrando paquetes
```
  bower uninstall <paquete>
  bower uninstall jquery
```

Borrando paquetes  y guardandolos en bower.json
```
  bower uninstall <paquete>
  bower uninstall jquery
```

Verificando los paquetes instalados y sus dependencias
```
  bower list
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower list
  bower check-new     Checking for new versions of the project dependencies...
  pruebas_bower /home/ubuntu/workspace/profe/pruebas_bower
  ├─┬ bootstrap#3.3.5 (latest is 4.0.0-alpha)
  │ └── jquery#2.1.4 (3.0.0-alpha1+compat available)
  └── jquery#2.1.4 (latest is 3.0.0-alpha1+compat)
```

Actualizando todo
```
  bower update
```

Actualizando un paquete específico
```
  bower update <package>
```

Usando Bower
```
  bower list -paths
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower list -paths

    bootstrap: [
      'public/vendor/bootstrap/less/bootstrap.less',
      'public/vendor/bootstrap/dist/js/bootstrap.js'
    ],
    jquery: 'public/vendor/jquery/dist/jquery.js'
```

```html
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <title>Bootstrap 101 Template</title>

      <!-- Bootstrap -->
      <link href="public/vendor/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    </head>
    <body>
      <h1>Hello, world!</h1>

      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="public/vendor/jquery/dist/jquery.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="public/vendor/bootstrap/dist/js/bootstrap.js"></script>
    </body>
  </html>
```

**Bower (Entendiendo el funcionamiento)**

bower.json. ¿Qué necesitamos?
```javascript
  {
      "name": "Mi Aplicación",
      "version": "1.0.0",
      "dependencies": {
          "modernizr": "*",
          "jquery": "~2.0.2",
          "bootstrap": "*",
          "requirejs": "*"
      }
  }
```

.bowerrc ¿Donde lo necesitamos?
```javascript
  {
      "directory": "public/vendor",
      "json": "bower.json"
  }
```

Instalamos todo lo anterior
```
  bower install
```


**Bower (Trucos)**

- Se puede instalar componentes aislados primero y luego hacer *bower init* para generar el *bower.json* con todo incluido.
- Ignoramos la carpeta *bower_components* con *.gitignore*. Recuerda que haciendo *bower.init* se instala todo de nuevo.
- Instalación de paquetes más alla de los definidos en search:

- Paquetes registrados:
```
  $ bower install jquery
```

- Acesso directo -> GitHub:
```
  $ bower install desandro/masonry
```

- .git:
```
  $ bower install git://github.com/user/package.git
```

- URLs:
```
  $ bower install http://example.com/script.js
```

### Gulp

![Gulp](https://www.escael.com/wp-content/uploads/2015/06/gulpjs.jpg)
![Gulp_anatomy](http://i2.wp.com/joellongie.com/wp-content/uploads/2015/02/web-gulp-anatomy.jpg)
- **Caractísticas**
  - Filosofía de código sobre configuración
  - Basado en stream
  - No es necesario usar archivos temporales

- **Instalación**
  - Instalamos Gulp global
  ```
  npm install --global gulp
  ```

  - Incluimos la dependencia en *package.json*
  ```
  npm install --save-dev gulp
  ```

- **Tareas por defecto**
  - Creamos *gulpfile.js* y agregamos dependencias y la primera tarea por defecto
  - Definición
  ```javascript
    var gulp = require('gulp');

    gulp.task('default', function() {
      console.log("Estas en la tarea por defecto!")
    });
  ```
  - Lanzamiento
  ```
    gulp
  ```

- **Más tareas**
  - Creamos una tarea nueva para gestionar la concatenación y minificación de los archivos js.
  - Definición
  ```javascript
  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');

    gulp.task('concat-ugly', function() {
      console.log("Estas en la tarea de concatenación!")  
      gulp.src('js/sources/*.js')
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
    });
  ```
  - Instalamos las nuevas dependencias
  ```
    npm install -save gulp-concat && npm install -save gulp-uglify
  ```
  - Lanzamiento
  ```
    gulp concat-ugly
  ```

- **Agrupando tareas**
  - Definición
  ```javascript
    gulp.task('distro-lista', ['imagenes', 'css', 'js']);
  ```
  - Lanzamiento
  ```
    gulp distro-lista
  ```


- **Concatenando tareas**
  - Definición
  ```javascript
    gulp.task('css-paso-2', ['css-paso-1'], function(
      console.log("css-paso-2 empieza solo cuando... css-paso-1 haya termiando!")
    ));
  ```
  - Lanzamiento
  ```
    gulp css-paso-2
  ```

- **[Ejemplo de gulpfile.js](https://gist.github.com/torgeir/8507130)**


**Entendiendo Gulp**
- gulp.src() y gulp.dest()
  - Un solo archivo
  ```javascript
    gulp.src('client/templates/index.jade')
    // .pipe(...)
  ```
  - Múltiples archivos
  ```javascript
    gulp.src(['client/*.js', '!client/b*.js', 'client/bad.js'])
    // .pipe(...)
  ```
  - Múltiples archivos y carpetas
  ```javascript
    gulp.src('client/templates/**/*.jade')
    // .pipe(...)
  ```
  - Exclusión
  ```javascript
    !js/secreto-config.js
  ```
  - Especificando la extensión
  ```javascript
    publico/*.+(js|css)
  ```
  - [Más opciones](https://github.com/isaacs/minimatch)
- gulp.watch()
  - Monitoriza de manera activa uno o varios archivos y dispara tareas específicas cuando se hayan modificado
  ```javascript
    gulp.watch('js/source/*.js', ['js']);
  ```

**[Plugins](http://gulpjs.com/plugins/)**
- [gulp-concat](https://github.com/contra/gulp-concat)
  - Concatenación de archivos
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
  - Comprime javascript usando [UglifyJS2](https://github.com/mishoo/UglifyJS2)
- [gulp-stylus](https://www.npmjs.com/package/gulp-stylus)
  - Compilar de .styl a .css
- [gulp-coffee](https://www.npmjs.org/package/gulp-coffee)
  - Compilar de .coffee a .js
- [gulp-jade](https://www.npmjs.org/package/gulp-jade)
  - Compilador de .jade a .html
- [gulp-if](https://www.npmjs.org/package/gulp-if)
  - Control adiccional para el flujo de subtareas
- [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin)
  - Minificación de imágenes con formato .png, .jpeg, .gif y .svg
  - [Más opciones](https://github.com/sindresorhus/gulp-imagemin#imageminoptions)
- [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)
  - JSHint
- [gulp.spritesmith](https://www.npmjs.com/package/gulp.spritesmith)
  - Crea Sprites y el css adiccional en diversos formatos (.css, .json, Sass, Less)
- [gulp-zip](https://github.com/sindresorhus/gulp-zip)
  - Compresor ZIP
- [gulp-csslint](https://www.npmjs.com/package/gulp-csslint/)
  - CSS Linter
- [gulp-eslint](https://www.npmjs.com/package/gulp-eslint/)
  - [ESLint](http://eslint.org/)
- [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages/)
  - Gestiona la publicación en GitHub Pages
- [gulp-git](https://www.npmjs.com/package/gulp-git/)
  - Gestiona Git desde Gulp
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin/)
 - Minificador de HTML
- [gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont/)
  - Creando fuentes de Iconos desde archivos vectoriales
- [gulp-jsonlint](https://www.npmjs.com/package/gulp-jsonlint)
  - Linter para json
- [gulp-markdown](https://www.npmjs.com/package/gulp-markdown/)
  - Markdown a HTML
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps/)
  -  Crea SourceMaps
- [gulp-uncss](https://www.npmjs.com/package/gulp-uncss/)
  - Elimina CSS que no se use
- [gulp-jsdoc-to-markdown](https://www.npmjs.com/package/gulp-jsdoc-to-markdown/)
  - Conversor de jsdocs a markdown
- [gulp-unzip](https://www.npmjs.com/package/gulp-unzip/)
  - Descompresor ZIP
- [gulp-webstandards](https://www.npmjs.com/package/gulp-webstandards)
  - Verifica prefijos CSS, Versión de librerías js, dcoType, compatibildiad entre navegadores,  etc...
- [gulp-filesize](https://www.npmjs.com/package/gulp-filesize)
  - Muestra el tamaño de los archivos.
- [gulp-grunt](https://github.com/gratimax/gulp-grunt)
  - Tareas de Grutn funcionan en Gulp
- [gulp-shell](https://github.com/sun-zheng-an/gulp-shell)
  - Manejando comandos de terminal
- [pageres](https://github.com/sindresorhus/pageres)
  - Genera pantallazos de la web en diversos tamaños
- [PSI](https://github.com/addyosmani/psi)
  - PageSpeed Insights desde la termianl


**Grunt vs. Gulp**

  ![gulp_vs_grunt](http://theodorelee.com/wp-content/uploads/2015/04/grunt-vs-gulp.jpg)

Grunt:

![Grunt_WF](http://frontendlabs.io/wp-content/uploads/2014/08/grunt-file-manipulation.png)

Gulp:

![Gulp_WF](http://frontendlabs.io/wp-content/uploads/2014/08/gulp-file-manipulation.png)



### Yeoman
![Yeoman Logo](https://raw.githubusercontent.com/yeoman/media/master/optimized/yeoman-masthead.png)
> The Yeoman workflow comprises three types of tools for improving your productivity and satisfaction when building a web app: the scaffolding tool (yo), the build tool (Grunt, Gulp, etc) and the package manager (like Bower and npm).

- [Yeoman Instalation Working Flow](https://www.youtube.com/watch?v=zBt2g9ekiug)
- [Yeoman - Generator-webapp](https://github.com/yeoman/generator-webapp)
- [Yeoman - Santa Barbara JavaScript Meetup](http://www.slideshare.net/tim_doherty/yeoman-santa-barbara-bjava-scriptmeetup)
- [Automating Your Front-end Workflow with Yeoman 1.0 (Addy Osmani)](https://www.youtube.com/watch?v=1OAfGm_cI6Y)


**Yeoman**
Instalamos Yeoman global (incluye Grunt, Bower...)
```
  npm install yo -g
```

Instalamos globalmente el generador de proyectos web
```
  npm install --global generator-gulp-webapp
```

En la carpeta deseada lanzamos el generador para que se cree un pryecto completo
```
  yo gulp-webapp
```

Acabada la instalación con exito
```
  gulp serve
```

Preparando todo para producción
```
  gulp
```

**Yeoman (gestión de errores de instalación)**

Verificamos que es lo que no funciona.
```
  yo doctor
```

[ NO RECOMENDADO ] Entramos como root
```
  sudo yo
```

[ NO RECOMENDADO ] Forzamos la instalación de un paquete global especificando la versión.
```
  sudo npm install -force -g <paquete>@version
```

Instalación Manual de dependencias
```
  npm install && bower install
```


**Yeoman (en C9.io)**

1 - Verificar versiones
```
node --version && npm --version
```

*Resultado*
```
v4.4.3
2.14.20
```

2 - Solucionamos el problema de la instalación global en c9.io
```
echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/versions/node/v4.4.3/lib/node_modules" >> ~/.bashrc && source ~/.bashrc
```

3 - Actualizamos *NPM*
```
npm update -g npm
```


4 - Instalamos *Gulp*
```
npm install -g gulp
```

5 - Instalamos *Bower*
```
npm install -g bower
```

6 - Instalamos *yo*
```
npm install -g yo
```
*Resultado esperado:*
```
Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✔ Node.js version
✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version
✔ NODE_PATH matches the npm root
```

7 - Instalamos un generador como *[webapp](https://github.com/yeoman/generator-webapp#readme)* en la carpeta que queramos
```
npm install -g generator-webapp
```

8 - Lanzamos el generador desde la carpeta deseada
```
yo webapp  
```

- [Más info](https://c9.io/blog/how-to-use-yeoman-on-cloud9/)


**Generadores**

- [Todos los Generadores](http://yeoman.io/generators/)
  - [generator-express](https://github.com/petecoop/generator-express)
    - An express generator for Yeoman, based on the express command line tool.
  - [generator-meanjs](https://github.com/meanjs/generator-meanjs)
    - MEAN.JS Official Yeoman Generator [http://meanjs.org/](http://meanjs.org/)
  - [generator-reveal](https://github.com/slara/generator-reveal)
    - Yeoman generator for Reveal.js
  - [generator-node](https://github.com/yeoman/generator-node)
    - Create a Node.js module http://yeoman.io
  - [generator-browserify](https://github.com/vincentmac/generator-browserify)
    - A generator for Yeoman with Browserify
  - [generator-phonegap](https://github.com/hypermurea/generator-phonegap)
    - Yeoman generator for scaffolding and automating PhoneGap projects
  - [generator-webapp](https://github.com/yeoman/generator-webapp#readme)
    - A gulp.js generator for modern webapps
