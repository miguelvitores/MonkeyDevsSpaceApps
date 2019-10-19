let noiseVal;
let noiseScale = 0.02;
let cont = 0;
let maxNoiseVal = 0;

function setup() {
    createCanvas(400, 400);
    getMaxNoise();
}

function draw() {
    background(0);
    renderNoise();
}

function getMaxNoise(){
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            noiseDetail(8, 0.2);
            noiseVal = noise(x * noiseScale, y * noiseScale);
            maxNoiseVal = max(noiseVal, maxNoiseVal);
            console.log(maxNoiseVal);
        }
    }
}

function renderNoise() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            noiseDetail(8, 0.2);
            noiseVal = noise((mouseX + x) * noiseScale, (mouseY + y) * noiseScale);
            if(noiseVal<maxNoiseVal/3){
                stroke(noiseVal * 255, noiseVal * 255 - 255/3, noiseVal * 255/5);
            }else if(noiseVal<2*maxNoiseVal/3){
                stroke(noiseVal * 255/5, noiseVal * 255, noiseVal * 255 - 255/3);
            }else{
                stroke(noiseVal * 255 - 255/3, noiseVal * 255/5, noiseVal * 255);
            }
            point(x, y);
            /*if(floor(cont/1000)==0){
                console.log(noiseVal);
                cont=0;
            }
            cont++;*/
        }
    }
}