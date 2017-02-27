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
    // Tu solución
```