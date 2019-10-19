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

//  // Check if mouse is over the bubble
//  rollover(px, py) {
//    let d = dist(px, py, this.x, this.y);
//    this.over = d < this.radius;
//  }

//  display() {
//    stroke(0);
//    strokeWeight(0.8);
//    noFill();
//    ellipse(this.x, this.y, this.diameter, this.diameter);
//    if (this.over) {
//      fill(0);
//      textAlign(CENTER);
//      text(this.name, this.x, this.y + this.radius + 20);
//    }
//  }
}

class File {
  constructor(fileName, data) {
    this.fileName = fileName;
    this.data = data;
  }
}

let data = [];
let fileNames = [];
let filesArray = [];
let fires = [];
let dir = "data/FIRMS/viirs/Europe";

function preload(){
    fileNames = dir.list();
    for(let i = 0; i < fileNames.length; i++) {
        let fileData = loadStrings(fileNames[i]);
        filesArray.push(new File(fileNames[i], fileData));
    }
}

function setup(){
    background(200);
    loadData();
    console.log(fires);
}

function loadData() {
    for(let j=0; j<filesArray.length; j++){
        let fileData = filesArray[i].data;
        for(let i = 1; i < fileData.length; i++) {
            let line = split(fileData[i], ",");

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
}

function draw(){
    
}