
var mapimg;

var zoom = 1;
var clon = 0;
var clat = 0;
var ww = 1024;
var hh = 512;

const key = 'pk.eyJ1IjoiZ3phMSIsImEiOiJjazF2eHIzNGcwODloM2xwMDY2ZWVqM3B1In0.wqodM5D8x7BiwFVUQxvdig'

// Options for map
const options = {
  lat: 30.846218,
  lng:  0,
  zoom: 2,
  studio: true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  style: 'mapbox://styles/gza1/ck1xekbhg0jvy1cp1a3gtlhm7',
};
const mappa = new Mappa('Mapbox', key);
let myMap;

let canvas;

function preload(){
  
  var fires = loadStrings();


 
}
function setup(){
  //   createCanvas(ww, hh);
  // translate(width / 2, height / 2);
  // imageMode(CENTER);
  // image(mapimg, 0, 0);
  canvas = createCanvas(ww, hh);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}
function draw(){
  
}

