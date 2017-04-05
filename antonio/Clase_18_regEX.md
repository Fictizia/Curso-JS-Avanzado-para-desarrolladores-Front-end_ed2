## 1 - Captura los emails del siguiente texto.
```javascript
// regEX --> wip --> ^(?=.*\w)([0-9a-zA-Z]*[@][0-9a-zA-Z]*[.])$
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
		console.log(cadena[i]+" is "+regEX);

	}
}());

//Results on console
// 12345678-A is true
// 11223344A is true
// A11223344 is false
// 1234567K is false

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
		console.log(cadena[i]+" is "+regEX);

	}
}());

//Results on console
// X-1234567-A is true
// X1234567A is true
// Z1234567M is true
// X-1233456 is false
// 1234567 is false

```

## 3 - Comprobar la seguridad de una contraseña
```javascript

// regEX --> ((?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%])(?!.*[#&]).{6,20})
// ?=.* --> positive look ahead
// ?!.* --> negative look ahead

(function(){

var pass = [];
pass[0] = "123c4A90a%";
pass[1] = "ada34d&sba";
pass[2] = "s#asdAr";
pass[3] = "1234549987a";

  var l = pass.length;

	for(var i=0;i<l;i++){

		var regEX = /((?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%])(?!.*[#&]).{6,20})/.test(pass[i]);
		console.log(pass[i]+" is "+regEX);

	}
}());

//Results on console
// 123c4A90a% is true
// ada34d&sba is false
// s#asdAr is false
// 1234549987a is false

```
