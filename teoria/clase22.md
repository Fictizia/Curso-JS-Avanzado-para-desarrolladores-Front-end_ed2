# Clase 22

### Testing

![testing_graph](http://ashleynolan.co.uk/assets/img/blog/tooling-survey/2015/q7.jpg)

- Código que verifica el funcionamiento de otro código.
- Deben poder realizarse de manera automática.
- Cubrir mayor cantidad de código posible.
- Independientes entre si.
- Capaces de ejercutarse infinidad de veces.
- Pueden agruparse en Test Suites.
- Uso de colores y mensajes claros.

- Ejemplo:
```javascript
    // Función
    function sumar (p1, p2){
      return p1 + p2;
    }

    // Test
    function testSumar(){
      if (sumar(1, 2) !== 3) {
        document.write('<p style="color: red;">sumar(1, 2) ERROR - No devuelve 3</\p>');
      } else {
        document.write('<p style="color: green;">sumar(1, 2) OK</p>');
      }

      if (sumar("2", 2) !== 4) {
        document.write('<p style="color: red;">sumar("2", 2) ERROR - No devuelve 4</p>');
      } else {
        document.write('<p style="color: green;">sumar("2", 2) OK</p>');
      }
    }
```

### Metodologías:

**Test Driven Development (TDD)**

> Desarrollo guiado por pruebas de software, o Test-driven development (TDD) es una práctica de ingeniería de software que involucra otras dos prácticas: Escribir las pruebas primero (Test First Development) y Refactorización (Refactoring). Para escribir las pruebas generalmente se utilizan las pruebas unitarias (unit test en inglés). En primer lugar, se escribe una prueba y se verifica que las pruebas fallan. A continuación, se implementa el código que hace que la prueba pase satisfactoriamente y seguidamente se refactoriza el código escrito. El propósito del desarrollo guiado por pruebas es lograr un código limpio que funcione. La idea es que los requisitos sean traducidos a pruebas, de este modo, cuando las pruebas pasen se garantizará que el software cumple con los requisitos que se han establecido [Wikiwand](https://www.wikiwand.com/es/Desarrollo_guiado_por_pruebas)
  
- Primero los test
- Depués el código (Refactorización <-> Testing)
- Ciclo de Vida:
  - Escribe los tests
  - Ejecuta los tests (Sin código, solo probando los propios tests)
  - Escribe el código suficiente para que pasen los tests.
  - Ejecuta los tests
  - Refactoriza
  - Repite


**Behavior Driven Development (BDD)**

> En la Ingeniería de Software, behavior-driven development o desarrollo guiado por el comportamiento (DGC), es un proceso de desarrollo de software que surgió a partir del desarrollo guiado por pruebas (DGP). El desarrollo guiado por el comportamiento combina las técnicas generales y los principios del DGP, junto con ideas del diseño guiado por el dominio y el análisis y diseño orientado a objetos para proveer al desarrollo de software y a los equipos de administración, con herramientas compartidas y un proceso compartido de colaboración en el desarrollo de software.

> Aunque el DGC es esencialmente una idea sobre cómo el desarrollo de software debería ser administrado tanto por los intereses del negocio como por el entendimiento técnico, la práctica del DGC asume el uso de herramientas de software especializadas para asistir en el proceso de desarrollo. Aunque estas herramientas son comúnmente desarrolladas específicamente para su uso en proyectos de DGC, se pueden ver como formas especializadas de las herramientas que asisten en el DGP. Las herramientas sirven para agregar automatización para el lenguaje ubicuo (lenguaje estructurado alrededor del modelo de dominio, utilizado en el diseño guiado por el dominio para conectar actividades entre miembros del equipo), el cual es el tema central del DGC. [Wikiwand](http://www.wikiwand.com/es/Desarrollo_guiado_por_comportamiento)
  
- Orientado al comportamiento 
- Se comprueban que las funcionalidades cumplan lo que se espera de ellas

### Frameworks y librerías:

**[QUnit](https://api.qunitjs.com/)**
- [Documentación](https://api.qunitjs.com/)
- Utilizado por jQuery
```javascript
  // Función
  function sumar (p1, p2){
    return p1 + p2;
  }

  // Test
  test("test de la funcion sumar(p1, p2)", function() {
    equal(sumar( 1, 2), 3, "1 + 2 = 3" );
    notEqual(sumar( "2", 2), "4", " 2(cadena) + 2 != 4(cadena) ");
  });
```

**[Mocha](https://mochajs.org/)**
- Muy popular
- En necesario incluir [Chai](http://chaijs.com/)
```javascript       
  // Función
  function sumar (p1, p2){
    return p1 + p2;
  }

  // Test
  mocha.setup('bdd');
  var expect = chai.expect;
  var should = chai.should();
  describe("Test de la funcion sumar(p1, p2)", function() {

    it('1 + 2 = 3', function() {
      expect(sumar( 1, 2)).to.equal(3);
    });

    it('\"2\" + 2 != \"4\"', function() {
      expect(sumar( "2", 2)).not.equal("4");
    });

  });

  mocha.run()
```

**[Jasmine](https://github.com/jasmine/jasmine)**
- [Documentación](http://jasmine.github.io/2.3/introduction.html)
- Behavior Driven Development (BDD)

**Karma**
- [Documentación](https://karma-runner.github.io/1.0/index.html)
- [Soporte a C9.io](https://karma-runner.github.io/1.0/plus/cloud9.html)

### Librerías

- **[sinonjs](http://sinonjs.org/)**


### End To End (E2E)

**Librerías**
- [Webdriver.io](http://webdriver.io/)
- [Testcafe](https://devexpress.github.io/testcafe/)
- [Nightwatchjs](http://nightwatchjs.org/)
- [Protractor](https://www.npmjs.com/package/protractor)
- [Cypress](https://www.cypress.io/)


### Node.js (backend)

- [Supertest](https://github.com/visionmedia/supertest)


### Rendimiento
- [jsPerf](http://jsperf.com/)
- [benchmark.js](http://benchmarkjs.com/)
```javascript
    var suite = new Benchmark.Suite;

    // add tests
    suite.add('RegExp#test', function() {
      /o/.test('Hello World!');
    })
    .add('String#indexOf', function() {
      'Hello World!'.indexOf('o') > -1;
    })
    .add('String#match', function() {
      !!'Hello World!'.match(/o/);
    })
    // add listeners
    .on('cycle', function(event) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
    // run async
    .run({ 'async': true });
```


### Ejercicios

**1 -** ¡Ponte a prueba! [¿Necesitas un reto?](https://github.com/liammclennan/JavaScript-Koans)

```javascript
	// Tu solución
```


**2 -** Incluye tareas de testing en tu proyecto y realiza test al menos para las partes más importantes.

```javascript
	// Tu solución
```
