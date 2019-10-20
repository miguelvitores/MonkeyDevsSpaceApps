
var mapimg;

var zoom = 1;
var clon = 0;
var clat = 0;
var ww = screen.width;
var hh = screen.height -200;
var coords = [];

let data = [];
let fires = [];
var maxBright = 0;
var minBright = 1000;

const key = 'pk.eyJ1IjoiZ3phMSIsImEiOiJjazF2eHIzNGcwODloM2xwMDY2ZWVqM3B1In0.wqodM5D8x7BiwFVUQxvdig';

$( function() {
    
    
    $( "#slider" ).slider({
        value: 292
    });
    $( "#slider" ).slider( "option", "min", 232 );
    $( "#slider" ).slider( "option", "max", 292 );
    slidermin = $( "#slider" ).slider( "option", "min");
    slidermax = $( "#slider" ).slider( "option", "max");
    $( "#slider" ).slider( "option", "step", 1 );
    slidervalue = $( "#slider" ).slider( "value" );
    console.log("slidervalue: "+slidervalue);
    
    $( "#slider" ).on("slidechange", function(){
        slidervalue = $( "#slider" ).slider( "value" );
        console.log(slidervalue);
        
        loadData();
        clear();
//        myMap = mappa.tileMap(options);
//        myMap.overlay(canvas);

        myMap.onChange(drawFires);
//        console.log(fires.length); 
    });
    
    
} );


//$( function() {
//    
////    $( "#slider" ).slider( "option", "min", 232 );
////    $( "#slider" ).slider( "option", "max", 292 );
////    $( "#slider" ).slider( "option", "step", 1 );
//    
////    $( "#slider" ).onchange = function(){
////        console.log($( "#slider" ).slider( "value" ));
////    }
//} );

class Fire {
  constructor(latitude, longitude, brightTi4, scan, track, acqDate, acqTime, satellite, confidence, version, brigthTi5, frp, daynight) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.brightTi4 = brightTi4;
    this.scan = scan;
    this.track = track;
    this.acqDate = acqDate;
    this.acqTime = acqTime;
    this.satellite = satellite;
    this.confidence = confidence;
    this.version = version;
    this.brigthTi5 = brigthTi5;
    this.frp = frp;
    this.daynight = daynight;
  }
  display() {
       stroke(0);
       strokeWeight(0.8);
       noFill();
       ellipse(this.longitud, this.latitud);
  }
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}





var opts;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError );
  } else {
    
    
  
  }
}
function showError(error){

  // Options for map
  options = {

    lat: 30,
    lng:  0,
    zoom: 3,
    studio: true, // false to use non studio styles
    //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
    //style: 'mapbox://styles/gza1/ck1xekbhg0jvy1cp1a3gtlhm7',
    style: 'mapbox://styles/mapbox/satellite-v9',

  };
}

function showPosition(position) {
  options = {

    lat: position.coords.latitude,
    lng:  position.coords.longitude,
    zoom: 8,
    studio: true, // false to use non studio styles
    //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
    //style: 'mapbox://styles/gza1/ck1xekbhg0jvy1cp1a3gtlhm7',
    style: 'mapbox://styles/mapbox/satellite-v9',

  };
}

getLocation();

const mappa = new Mappa('Mapbox', key);
let myMap;

let canvas;

function preload(){
    console.log("slidermin: "+slidermin);
    console.log("slidermax: "+slidermax);
    for(let i=slidermin; i<=slidermax; i++){
        data[i] = [];
//        data[i] = loadStrings('../MapStuff/data/FIRMS/viirs/Global/VIIRS_I_Global_VNP14IMGTDL_NRT_2019'+i+'.txt');
//        data[i] = loadStrings('../MapStuff/data/FIRMS/viirs/Europe/VIIRS_I_Europe_VNP14IMGTDL_NRT_2019'+i+'.txt');
//        data[i] = loadStrings('../MapStuff/data/FIRMS/c6/Europe/MODIS_C6_Europe_MCD14DL_NRT_2019'+i+'.txt');
        data[i] = loadStrings('../MapStuff/data/FIRMS/c6/Global/MODIS_C6_Global_MCD14DL_NRT_2019'+i+'.txt');
//        console.log(data[i]);
    }
}
function setup(){
  loadData();
//  console.log(fires);
  canvas = createCanvas(ww, hh);


  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  //var cx = mercX(clon);
  //var cy = mercY(clat);



  myMap.onChange(drawFires);

}
function draw(){

}

function drawFires(){


    clear();



  //if (myMap.map.getBounds().contains([latitudeX, longitudeX])) {
    for(let i = 0; i<fires.length; i++){
      const latitudeX = Number(fires[i].latitude);
      const longitudeX = Number(fires[i].longitude);
        const brightness = Number(fires[i].brightTi4);

      if (myMap.map.getBounds().contains([latitudeX, longitudeX])) {
        const pos = myMap.latLngToPixel(latitudeX, longitudeX);
          let coefBrillo = ((maxBright-minBright) * brightness) / (minBright/maxBright);
          let brillo = abs( log( pow(coefBrillo, exp(1)) ) );
          let coefVerde = (brightness-minBright) / (maxBright-minBright);            
//          console.log(coefVerde);
        fill(255, 255*coefVerde, 0, brillo);
        stroke(255, 255*coefVerde,0, brillo);
          let coefZoom = pow(exp( - myMap.getZoom()/3 ), -1);
        ellipse(pos.x, pos.y, coefZoom, coefZoom);
        
      }
    }

  //}

}

function loadData() {
    fires = [];
    console.log("slidervalue");
    console.log(slidervalue);
    maxBright = 0;
    minBright = 1000;
    for(let i = 1; i < data[slidervalue].length-1; i++) {
        let line = split(data[slidervalue][i], ",");

        let latitude = line[0];
        let longitude = line[1];
        let brightTi4 = line[2];
        let scan = line[3];
        let track = line[4];
        let acqDate = line[5];
        let acqTime = line[6];
        let satellite = line[7];
        let confidence = line[8];
        let version = line[9];
        let brigthTi5 = line[10];
        let frp = line[11];
        let daynight = line[12];
        
        maxBright = max(maxBright, brightTi4);
        minBright = min(minBright, brightTi4);

        

          fires.push(new Fire(latitude, longitude, brightTi4, scan, track, acqDate, acqDate, acqTime, satellite, confidence, version, brigthTi5, frp, daynight));
      }
  
}
