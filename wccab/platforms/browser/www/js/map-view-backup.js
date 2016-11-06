// Now we need to run the code that will be executed only for About page.
 
myApp.onPageInit('map-view', function (page) {
  // Do something here for "about" page
//myApp.alert('Here comes our Map View!!!!!!!!!');

//$$(page.container).find('.content-block-inner').append("aaa");

function initialize() { 

function success(position){

var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;

var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
//alert(document.getElementById("map"));
    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);


    var marker = new google.maps.Marker({
        position: latLong,
    });

  marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());


/*
//test
    latLong = new google.maps.LatLng(latitude-.009, longitude-.004);
    marker = new google.maps.Marker({
        position: latLong
    });

Number.prototype.toRad = function() { return this * (Math.PI / 180); }; 
var R = 6371; // km 
var dLat = ((latitude-.009)-latitude).toRad();
var dLon = ((longitude-.004)-longitude).toRad(); var lat1 = latitude.toRad(); var lat2 = (latitude-.009).toRad(); var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); var d = R * c; 
//alert (d);
console.log(latitude);
console.log(longitude);
//test end*/
//alert("before wc");
/*$$.ajax({
  url: 'http://192.168.1.105:3001/api/cabs',
  success: function (data,status,xhr){
      var cabs=JSON.parse(data);
      //alert(cabs.length);
for(i=0;i<cabs.length;i++)
{
    latLong = new google.maps.LatLng(cabs[i].latitude,cabs[i].longitude);
    marker = new google.maps.Marker({
        position: latLong
    });
	marker.setMap(map);
}
  }
});*/  
//});
	//marker.setMap(map);
} 

//	icon: 'http://maps.google.com/mapfiles/ms/icons/cabs.png'
function error(error){
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    }

navigator.geolocation.getCurrentPosition(success, error);
}

initialize(); // run function 
})
 
