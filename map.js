//Google maps starter code: https://developers.google.com/maps/gmp-get-started
let map;
let road=false;



//remove points of interest code: https://stackoverflow.com/questions/8406636/how-to-remove-all-from-google-map
var styleArray = [
  {
    featureType: "poi",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "road",
    stylers: [
      { visibility: "on" }
    ]
  }
];

//starter init code provided by google maps API starter oage
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.243034040448466, lng: -118.5275756263537 },
    zoom: 16,

    mapTypeId: 'satellite' , //force map type to road map not satelite

    gestureHandling: "none",
    disableDefaultUI: true, //disables user interface
    zoomControl: false, //removes Zoom Control
    mapTypeControl: false,  //removes maptype Control
    scaleControl: false,  //removes scale Control
    streetViewControl: false, //removes streetview Control
    rotateControl: false, //removes rotate Control
    fullscreenControl: false, //removes full screen Control
    draggable: false, //removes dragging Control

  });
  map.setOptions({styles: styleArray}); //set map style to remove points of interest

}

function swapMap() //toggle between two map styles
{
  if(road===true)
  {
    map.setMapTypeId('satellite');  //setmapTypeID retrived from https://developers.google.com/maps/documentation/javascript/maptypes
    road=false;
  }
  else
  {
    map.setMapTypeId('roadmap');  //setmapTypeID retrived from https://developers.google.com/maps/documentation/javascript/maptypes
    road=true;
  }
}
