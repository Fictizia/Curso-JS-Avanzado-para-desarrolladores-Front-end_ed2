## 1 - Captura los emails del siguiente texto.
```javascript

```

## 2 - Captura el DNI y NIE

#### DNI
```javascript

// regEX --> \d{8}[-]?[A-Z]

(function(){
	var cadena = [];
      cadena[0] = "12345678-A";
      cadena[1] = "11223344A";
      cadena[2] = "A11223344";
      cadena[3] = "1234567K";

  var l = cadena.length;

	for(var i=0;i<l;i++){

		var regEX = /\d{8}[-]?[A-Z]/.test(cadena[i]);
		console.log(cadena[i]+" cumple "+regEX);

	}
}());

//Results on console
// 12345678-A cumple true
// 11223344A cumple true
// A11223344 cumple false
// 1234567K cumple false

```

#### NIE
```javascript

// regEX --> ([A-Z])([-]?)(\d{7})([-]?)([A-Z])

(function(){
	var cadena = [];
      cadena[0] = "X-1234567-A";
      cadena[1] = "X1234567A";
      cadena[2] = "Z1234567M";
      cadena[3] = "X-1233456";
	    cadena[4] = "1234567";

  var l = cadena.length;

	for(var i=0;i<l;i++){

		var regEX = /([A-Z])([-]?)(\d{7})([-]?)([A-Z])/.test(cadena[i]);
		console.log(cadena[i]+" cumple "+regEX);

	}
}());
```

## 3 - Comprobar la seguridad de una contraseña
```javascript

```
