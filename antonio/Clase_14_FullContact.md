## *Codepen Live*
[https://codepen.io/grahovsky/pen/RpYZyO](https://codepen.io/grahovsky/pen/RpYZyO)

- - -

### 1 Init Firebase
~~~
// Initialize Firebase --> V3
var config = {
  apiKey: "AIzaSyBce7z20_LG94V7rnnzWJltHGCeFl0Sah8",
  authDomain: "grahovsky-js-auth.firebaseapp.com",
  databaseURL: "https://grahovsky-js-auth.firebaseio.com",
  storageBucket: "grahovsky-js-auth.appspot.com",
  messagingSenderId: "1092272135393"
};

firebase.initializeApp(config);

var items = firebase.database().ref().child('contacts');
var queryID = firebase.database().ref().child('querySearch');

//DELETE ALL ITEMS ON FIREBASE
function deleteDB() {
  items.remove();
  queryID.remove();
  document.querySelector(".error").innerHTML = "All items deleted."
};
document.querySelector(".delete").addEventListener("click" , deleteDB);
//DELETE TO START THE PARTY
~~~

### 2 RECOGER VALORES De inputs
~~~
var usermail;
document.querySelector(".save").addEventListener("click" , pickupInputs);

function pickupInputs() {  
  
  //PICK UP INPUTS --> falta Trim
  usermail = document.getElementById("userMail").value;
    if(usermail !== undefined && usermail !== "") {
        searchUser(usermail);
    } else {
      document.querySelector(".error").innerHTML = "ERROR: please write a valid email";  
    }
}
//END RECOGER VALORES De inputs
~~~

### 3 Buscamos Usuario en Firebase
~~~
function searchUser(mail) {
    
  //Hay elementos en la db? 
  if(dbHasChildren === true) { 
    //Buscamos en la db si existe el item en la db?
      //Index OF added to Rules
      queryID.orderByChild("id").equalTo(mail).once("value", function(snapshot) {
        
        var check = snapshot.val();
        //console.log("QUERY!",check);
        
        if(check === null){
          //IF NO EXISTE EN LA DB --> Buscamos en FullContact --> Ajax --> msAjax(mail);
          //console.log("BUILDING",mail);
          buildURL(mail);
          
        } else {
          
          document.querySelector(".error").innerHTML = "El usuario con email "+mail+" ya existe en la db."
          
        }
      });
      
  } else {
    //La DB está vacía
    //Buscamos en FullContact --> Ajax --> msAjax(mail);
    //console.log("BUILDING",mail);
    buildURL(mail);
  }
  
}
//END Buscamos Usuario en Firebase
~~~

### 4 FULL CONTACT AJAX CALLS
~~~
function buildURL(mail) {
  var apiKey = "635abda172755efe";
  var urlAPI = "https://api.fullcontact.com/v2/person.json?apiKey="+apiKey+"&email="+mail;
  //AJAX CALL
  //console.log("Search input:",usermail);
  msAjax(urlAPI,saveUser);
}

function msAjax(url,callback) {

    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() {
        
        if (xmlHttp.readyState === 4) {
            
            if (xmlHttp.status >= 100 && xmlHttp.status <= 399) {
                
                var itemInfo = JSON.parse(xmlHttp.responseText);
                //saveUser(itemInfo);
                callback(itemInfo);
                console.log(itemInfo);

            } else if (xmlHttp.status >= 400 && xmlHttp.status <= 600) {

                //console.error("ERROR!");
                var error = (JSON.parse(xmlHttp.responseText));
                document.querySelector(".error").innerHTML = "ERROR: "+error.status+" "+ error.message;

            }
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
};

//FullContact TESTS
//var email = "antonio@freshcore.es";
//var urlAPI = "https://api.fullcontact.com/v2/person.json?apiKey="+apiKey+"&email="+email;
//var twitter = "Hashtag_genius";
//var urlAPI = "https://api.fullcontact.com/v2/person.json?apiKey="+apiKey+"&twitter="+twitter;
//var name = "adam%20mayerich";
//var urlAPI = "https://api.fullcontact.com/v2/name/normalizer.json?apiKey="+apiKey+"&q="+name;

//END FULL CONTACT AJAX CALLS
~~~

### 5 SAVE USER
~~~
function saveUser(itemInfo) {
  
  items.push({
    fullName: itemInfo.contactInfo.fullName,
    likelihood: itemInfo.likelihood,
    details: JSON.stringify(itemInfo)
  });
  
  queryID.push({
    //id = text from input
    id: usermail 
  });
  
  document.querySelector(".error").innerHTML = "El usuario con email "+usermail+" ha sido guardado."
  
}

//END SAVE USER
~~~

### 6 EXISTE LA DB? HAY ELEMENTOS? --> OnLoad
~~~
var dbHasChildren;
var ref = firebase.database().ref();
ref.once("value", function(snapshot){
  dbHasChildren = snapshot.child("querySearch").hasChildren(); // false
  //console.log("Snapshot:",dbHasChildren);
  //return dbHasChildren;
});
//END EXISTE LA DB? HAY ELEMENTOS?
~~~

### 7 Print Results
~~~
function printRes(who) {
  
   document.querySelector(".error").innerHTML = "Contacto "+who+" ya existe en DB.";
  
}
~~~
