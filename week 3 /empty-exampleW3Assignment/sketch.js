var num = 100;
var num2 = 50;
var trex = 1000;
var zeven = 7;
var message = "hello";
var anotherMessage = "goodbye";
var heyhey = "I know a boy named ROY G BIV";
var heyyyy = "up in the sky is where he lived. His name spelled out the colors of the rainbow. This is the story of ROY G BIV"; 
var booleanVar = true;
var booleanVar2 = false;
var mouthH = 40;
var mouthW = 400;

var backgroundColor= 'red'

var randNum = 0;

var MapX= 0;



function setup() {

    createCanvas(600,400);
    background(255,0,0);
    background(255,204,0);
    background('red');
    
    //animation
    noStroke();
    randNum = random(255); //0-255
    console.log(randNum);
}

function draw() {
    
    frameRate(30);
    
    console.log(frameRate);
    
    background(backgroundColor);
    
    //ellipse(random(width), random(height),50,50)

    MapY = map(mouseY, 0, width, -10,10)
    
    MapX = map(mouseX, 0, width, -5,5)
    
    MapF = map(160, mouseY, 10,10, width)
    
   
    
    ellipse(mouseX,mouseY,10,10)

//body 
fill('green')
ellipse(250,200 + MapX,50,50);
ellipse(290,200 + MapY,50,50);
ellipse(320,170 + MapX,50,50)
ellipse(210,210 + MapY,50,50)
ellipse(170,200 + MapX,50,50)
//inner body 
fill('brown')
ellipse(250,200,30,30);
ellipse(290,200,30,30);
ellipse(320,170,30,30)
ellipse(210,210,30,30)
ellipse(170,200,30,30)
//head
fill('green')
ellipse(360 + MapX,130,100,50)
//tail 
fill('orange')
ellipse(135,180 + MapY,30 + MapY,30)
ellipse(115,170 + MapY,25 + MapY,25)
ellipse(105,160 + MapY,15 + MapY,15)
//inner tail
fill('purple')
ellipse(135,180 + MapY,15 + MapY,15)
ellipse(115,170 + MapY,11 + MapY,11)
ellipse(105,160 + MapY,7 + MapY,7)
//tounge
rect(390, 140, 30 + MapX, 5)
//eyes
fill('yellow')
ellipse(380,125,20,10)
//pupil
fill('black')
ellipse(382,127,5 + MapX,2)
//grass
fill('blue')
rect(30 + MapY, 250, 5, 50)
rect(50 + MapX, 210, 5, 50)
rect(80 + MapY, 250, 5, 50)
rect(110 + MapX, 210, 5, 50)
rect(130 + MapY, 250, 5, 50)
rect(150 + MapX, 210, 5, 50)
rect(180 + MapY, 250, 5, 50)
rect(210 + MapX, 210, 5, 50)
rect(240 + MapY, 250, 5, 50)
rect(270 + MapX, 210, 5, 50)
rect(300 + MapY, 250, 5, 50)
rect(330 + MapX, 210, 5, 50)
rect(360 + MapY, 250, 5, 50)
rect(390 + MapX, 210, 5, 50)
rect(420 + MapY, 250, 5, 50)
rect(450 + MapX, 210, 5, 50)
rect(480 + MapY, 250, 5, 50)
rect(510 + MapX, 210, 5, 50)




//ellipse(300,200,50,50);
}