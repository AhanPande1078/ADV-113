function preload(){

}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
webcam = createCapture(VIDEO);
webcam.hide();
}
function draw(){
image(webcam, 130,115,225,225);

fill(0,255,0);
stroke(0,255,0);
rect(26,95,50,350);
stroke(255,0,0);
fill(255,0,0);
circle(51,51,100);

fill(0,255,0);
stroke(0,255,0);
rect(376,95,50,350);
stroke(255,0,0);
fill(255,0,0);
circle(402,51,100);

fill(0,255,0);
stroke(0,255,0);
rect(26,26,350,50);
stroke(255,0,0);
fill(255,0,0);
circle(51,402,100);

fill(0,255,0);
stroke(0,255,0);
rect(26,376,350,50);
stroke(255,0,0);
fill(255,0,0);
circle(402,402,100);

stroke(255,0,0);
fill(255,0,0);
circle(51,51,100);
stroke(255,0,0);
fill(255,0,0);
circle(402,51,100);
stroke(255,0,0);
fill(255,0,0);
circle(51,402,100);
stroke(255,0,0);
fill(255,0,0);
circle(402,402,100);
}