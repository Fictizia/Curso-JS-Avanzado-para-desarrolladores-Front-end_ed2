## Ejercicio 1

### Live > https://codepen.io/grahovsky/pen/peWEwj

if ("geolocation" in navigator) {

  console.log("DENTRO IF");
  // WATCH --> en mobile ok <--
  
  
  /*
  options = {
    enableHighAccuracy: false,
    timeout: 500,
    maximumAge: 0
  };
  
  navigator.geolocation.watchPosition(success, error, options);
  */
  // --> END WATCH
  
  // SOLO POSICION 
  navigator.geolocation.getCurrentPosition(success, error);
  // END SOLO POSICION

  //CALLBACKS EXITO Y ERRORES
  function success(user) {
    var pos = user.coords;
    console.warn(pos)
    document.getElementById('printRes').innerHTML = "Lat: "+pos.latitude+" Long: "+pos.longitude;
  }
  
  function error(error) {
    
    console.warn("Error code:",error.message)
    document.getElementById('printRes').innerHTML = "Error Code "+error.code+" <br />"+error.message;
    
  }
  
} else {
  console.warn("Geolocation no soportado :-( ");
}

## END EJERCICIO 1

# Ejercicio 2

### Live > http://codepen.io/grahovsky/pen/mWBWxa

//CSS
<style>
* {margin:0;padding:0;box-sizing:boder-box;}

#map {

width:100%;
/*max-width:320px;*/
height:100vh;
  
}
</style>
//HTML + JS
<div id="map">
  
 
</div>

<script type="text/javascript">

var map;
    
function initMap() {
  
var myLatLng = {lat: 34.0399935, lng: -118.256498};
//var myLatLng = locations[0];
  
map = new
  
google.maps.Map(document.getElementById('map'), {
    //CENTERING MAP
    center: myLatLng,
    zoom: 12
  });

//Custom Map Styles
var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#80f0ff"
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#ffead0"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff3f34"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f8915"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#efa6b1"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#27ff0c"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff0000"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

map.setOptions({styles: styles});
//END CUSTOM STYLE
//ICON LOS ANGELES
var image = 'http://sports.cbsimg.net/images/mlb/logos/50x50/LAA.png';
  var laMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
  
/*
var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Los Angeles B****!'
  });
*/
//END ICON LOS ANGELES

//CALLING METRO API
printRes(metroAPIurl);
  
}

var metroAPIurl = "http://api.metro.net/agencies/lametro/vehicles/";

var locations = [];

function printRes(apiUrl) {

    console.info("START");
    callingAjax(apiUrl, function(dataInfo){

    	//console.log("Data: "+JSON.stringify(dataInfo));
      
      for(var n in dataInfo.items) {

      	locations[n] = {lat: dataInfo.items[n].latitude, lng: dataInfo.items[n].longitude};
        printMarker(locations[n]);
        //console.log(locations[n]);
      }
      //VEHICLES
      function printMarker(pos) {
        
        //console.info("Printing Marker at",pos);
        var marker = new google.maps.Marker({
          position: pos
        });
        marker.setMap(map);
        //CLUSTERS
        /*
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var vehicles = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: pos,
            label: labels[i % labels.length]
          });
        });
        */
        //END CLUSTERS     
      }
			//END VEHICLES
      
    });

}
  
function callingAjax(url,callback) {

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {

            //console.info(JSON.parse(xmlHttp.responseText));
            var dataInfo = JSON.parse(xmlHttp.responseText);
            callback(dataInfo);

        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {

            console.error("ERROR! 404");
            console.warn(JSON.parse(xmlHttp.responseText));

        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
};
  
</script>

<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBce7z20_LG94V7rnnzWJltHGCeFl0Sah8&callback=initMap">
  
</script>

## END EJERCICIO 2
