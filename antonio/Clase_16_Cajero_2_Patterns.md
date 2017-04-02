### **CodePen Live**
[http://codepen.io/grahovsky/pen/YZdjMW](http://codepen.io/grahovsky/pen/YZdjMW)

## 1 Namespace
```javascript
//Namespace
//var myApp = myApp || {};
var miCajero = miCajero || {};

//INI fn anonima autoejecutada
(function( namespace ){
  
  namespace.info = {
    bank: "GrahoBank",
    saldo: 1000, //--> Deposito inicial del cajero para jugar
    user: "Admin", //--> Al cargar el usuario es Admin
    moneda: "€",
    numOp: 0
  }
  
})(miCajero);
//END INI CON fn anonima autoejecutada
```
## 2 Operaciones
```javascript
//Operaciones
  //Module Pattern
miCajero.Operaciones = (function(){
  
  var total;
  total = miCajero.info.saldo;
    //IF miCajero.info.user === admin
      //total = this.saldo; //miCajero.info.saldo;
    //IF miCajero.info.user === client --> 2 vueltas
      //1 --> total = miCajero.info.saldo
      //2 --> total = miCajero.info.cliente.saldo
  return {
    //Add Money(user,cantidad)
    sumar: function(cantidad){
      total += cantidad;
      return total;
    },
    //Get Money(user,cantidad)
    restar: function(cantidad){
      total -= cantidad;
      return total;
    },
    //ST CAJERO AND ST Cuenta Cliente
    total: function(){
      return total;
    }
  }
   
})();
```
## 3 Update Saldo
```javascript
//Update Saldo
miCajero.updateSaldo = function(newValue){
  
  miCajero.info.saldo = newValue;
  miCajero.Print("ON",miCajero.info.user,newValue,"exito");
  miCajero.cleanInput();
  
};
```
## 4 Gestion Input
```javascript
//INPUT
miCajero.Input = function(operation){
  
  //console.info("input",operation);
  var inputValue = document.getElementById("moneyInput").value;
  
  if(inputValue !== null && inputValue !== undefined && inputValue !== ""){
    
    var opResult;
    inputValue = parseInt(inputValue);
    
    if(operation === "add"){
      
     opResult = miCajero.Operaciones.sumar(inputValue);
     miCajero.updateSaldo(opResult);
      
    } else if(operation === "get") {
      
     opResult = miCajero.Operaciones.restar(inputValue);
       if(opResult < 0){
         miCajero.Error(501);
         miCajero.Operaciones.sumar(inputValue);
       } else {
         miCajero.updateSaldo(opResult);
       }
      
    }
    
  } else {
    miCajero.Error(401);
  }
  
};

//Clean Input
miCajero.cleanInput = function() {
  
  //console.log("CLEAN");
  document.getElementById("moneyInput").value = "";
  document.getElementById("moneyInput").placeholder = "Money to...";
  
};
```
## 5 Botones
```javascript
//BOTONES
miCajero.Botones = (function(){
  
    //Add onClick --> miCajero.Operaciones.sumar(inputValue);
    var addBtn = document.querySelector(".addMoney");
        addBtn.addEventListener("click" ,function(){
          miCajero.Input("add");
          //console.log("BTN ADD")
        });
    //Get onClick --> miCajero.Operaciones.restar(inputValue);
    var getBtn = document.querySelector(".getMoney");
        getBtn.addEventListener("click" ,function(){
          miCajero.Input("get") 
          //console.log("BTN GET")
        });
  
})();
```
## 6 Errores
```javascript
//ERRORS
miCajero.Error = function(error){
  var errorMsg;
  //400 Input Errors
  if(error === 401){
    //--> Cantidad Introducida Incorrecta
    errorMsg = "Por favor introduzca una cantidad correcta."; 
  }
  //500 Saldo Errors --> getMoney
  else if(error === 501){
    //--> Saldo en Cajero insuficiente
    errorMsg = "Saldo en Cajero insuficiente.";
  } else if(error === 502){
    //--> Saldo en Cuenta Cliente insuficiente
    errorMsg = "Cliente no dispone de saldo suficiente en su cuenta.";
  }
  //PRINT ERROR
  document.querySelector(".result").innerHTML += "<br><span class='msg error'>*** ERROR *** "+errorMsg+"<br></span>";
  //Reset Input
  miCajero.cleanInput();
}
```
## 7 Users
```javascript
//USERS --> Clonando
  //Admin
  //Cliente
    //cuenta
```
## 8 Print Resultados
```javascript
/* - - - - - - - - - - - - - - - - PRINT RESULTS - - - - - - -  - - - - - - - - - - - */
// Cuando cambie algo en el cajero print en pantalla --> .result
// ESTA SOLO SE DISPARA SI LA OPERACION ES EXITO (Sumar o Restar OK)
miCajero.Print = function(status,user,saldo,msgType){
  
  var _currency = miCajero.info.moneda;
  //ID operacion
  miCajero.info.numOp += 1;
  var _operationID = miCajero.info.numOp;
  //MSG tipo mensaje
  var msgType;
  //Info 2 print
  var info2print =  "<br>"+_operationID+" - New Info:<br>>> Cajero: "+status+" · "+user+" · Saldo en cajero: "+saldo+_currency+"<br></span>";
  
  document.querySelector(".result").innerHTML += "<span class='msg "+msgType+"'>"+info2print;
  
};
/* - - - - - - - - - - - - - - END PRINT RESULTS - - - - - - -  - - - - - - - - - - - */

//INIT PRINT ONLOAD
miCajero.Print("ON",miCajero.info.user,miCajero.info.saldo,"load");
//END INIT PRINT ONLOAD
```
