var num= 100;
var num2= 50;
var trex= 1000;
var zeven= 7;
var message= "hello";
var anotherMessage = "goodbye";
var heyhey= "I know a boy named ROY G BIV";
var heyyyy= "up in the sky is where he lived. His name spelled out the colors of the rainbow. This is the story of ROY G BIV"; 
var booleanVar= true;
var booleanVar2= false;
var mouthH= 40;
var mouthW= 400;

var eye1X= 70;
var eye1Y= 70;

var eye2offset= 20;

var backgroundColor= 'yellow'

var randNum = 0;

var MapX= 0;
    
//DRAWING NOTES 
    
   

function setup() {
 createCanvas(600,400);
    background(255,0,0);
    background(255,204,0);
    background('grey');
    
    console.log("width: " + width + " " + "height: "+ height); 
    
    noStroke();
    randNum = random(255); //0-255
    console.log(randNum);
    
}

function draw() {

frameRate(30);
    
    console.log(frameRate);
    
    background(backgroundColor);
    
    ellipse(random(width), random(height),50,50)
   
    MapX = map(mouseX, 0, width, -10,10)
    
    fill('green')
    ellipse(mouseX,mouseY,10,10)
    
  //(x,y,width,height)
    //eye1
    fill('red')
    ellipse(eye1X + MapX,eye1Y,100,100);
    
    //pupil 1
    fill('blue')
    ellipse(eye1X,eye1Y,20,50);
    
    //triangle nose
    // (x,f,tip)
    triangle(180,250,270,100,370,250);
    
    //nose
    fill('red');
    ellipse(250,200,45,45);
    ellipse(width/2,height/2,45,45);
    
    //eye2
    ellipse(500 + MapX, 70, 100, 100);
    
    //pupil 2
    fill('blue')
    ellipse(500, 70, 20, 50);
    
    //the mouth rectangle 
    fill('white')
    rect(50, 300, 500, 40);
    stroke(125);
    strokeWeight(10);
    
    //the mouth line 
    line(50, 320, 550, 320);
    noStroke();
    
    //toungue
    //randNum = random(256);
    //fill(randNum,0,0);
    arc(280,300,200,100, 0, PI)
    

    //NOTES
    //PI is a half 
    //HALFPI is a quarter 
    //quarter is half of a quarter 
    //NOTES I DONT UNDERSTAND>>>?
    //eye1
    //x,y, width, height
    //ellipse(eye1X,eye1Y,50,50);
    
    //eye2
    //fill('blue')
    //ellipse(eye1X + eye2offset, eye1Y +eye2offset, 100, 100);
    
   // MORE NOTES:
   // MAP(MoveX, 0, Widthm 0, 10)
    
}

function mousePressed() {
    background(backgroundColor);
   
    backgroundColor = 'pink'
    
}


function mouseReleased() {
    
    backgroundColor= 'green'
}