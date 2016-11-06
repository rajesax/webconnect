// Now we need to run the code that will be executed only for About page.
 
myApp.onPageInit('map-view', function (page) {

function initialize() { 

function success(position){

var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;

var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);

    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

  marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

//	icon: 'http://maps.google.com/mapfiles/ms/icons/cabs.png'

function error(error){
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    }

navigator.geolocation.getCurrentPosition(success, error);
}

initialize(); // run function 
});
 
