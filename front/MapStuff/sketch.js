
var mapimg;

var zoom = 1;
var clon = 0;
var clat = 0;
var ww = screen.width;
var hh = screen.height -200;
var coords = [];

let data = [];
let fires = [];

const key = 'pk.eyJ1IjoiZ3phMSIsImEiOiJjazF2eHIzNGcwODloM2xwMDY2ZWVqM3B1In0.wqodM5D8x7BiwFVUQxvdig'

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




// Options for map
const options = {

  lat:30,
  lng:  0,
  zoom: 4,
  studio: true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  //style: 'mapbox://styles/gza1/ck1xekbhg0jvy1cp1a3gtlhm7',
  style: 'mapbox://styles/mapbox/satellite-v9',

};
getLocation();

const mappa = new Mappa('Mapbox', key);
let myMap;

let canvas;

function preload(){

  data = loadStrings('../MapStuff/VIIRS_I_Europe_VNP14IMGTDL_NRT_2019232.txt');

}
function setup(){

  loadData();
  console.log(fires);
  canvas = createCanvas(ww, hh);


  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  //var cx = mercX(clon);
  //var cy = mercY(clat);



  myMap.onChange(drawFires);
  fill(255, 0, 0);
  stroke(255,0,0);

}
function draw(){

}

function drawFires(){


    clear();



  //if (myMap.map.getBounds().contains([latitudeX, longitudeX])) {
    for(let i = 0; i < fires.length-1; i++){



      const latitudeX = Number(fires[i].latitude);
      const longitudeX = Number(fires[i].longitude);


      if (myMap.map.getBounds().contains([latitudeX, longitudeX])) {
        const pos = myMap.latLngToPixel(latitudeX, longitudeX);
        ellipse(pos.x, pos.y, 3, 3);

      }
    }

  //}

}

function loadData() {

      for(let i = 1; i < data.length; i++) {
          let line = split(data[i], ",");

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

          fires.push(new Fire(latitude, longitude, brightTi4, scan, track, acqDate, acqDate, acqTime, satellite, confidence, version, brigthTi5, frp, daynight));
      }

}
