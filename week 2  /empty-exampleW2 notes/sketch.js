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



function setup() {
    //DRAWING NOTES 
    
    createCanvas(600,400);
    background(255,0,0);
    background(255,204,0);
    background('green');
    
    console.log("width: " + width + " " + "height: "+ height); 
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // BASIC FXN NOTES: 
//console.log(num);
//console.log("num + num2= " + (num + num2)); 
//console.log(num * num2);
//console.log(num/num2);
//console.log(message)
//console.log(anotherMessage);
//console.log(message + " " + anotherMessage);
//console.log(heyhey); 
//console.log(heyyyy); 
//    
//console.log(message + trex);
//    
////This will also not work
//console.log(message + heyhey);
//    
//
//    
///*
//If you want to 
//write more stuff
//Use a multi-line 
//Comment 
//
//*/
////This is not going to work- message3 only works in 
////console.log(message3); 
//var message2 = "This only works in the setup";
//console.log(message2);
//    
////unexpected thing = missing curly brace;

}

function draw() {
    //(x,y,width,height)
    ellipse(70,70,100,100);
    ellipse(70,70,50,50);
    fill(255,0,0);
    
    ellipse(250,200,50,50);
    ellipse(width/2,height/2,50,50);
    ellipse(500, 70, 100, 100);
    ellipse(500, 70, 50, 50);

    
    rect(50, 300, 500, 40);
    line(50, 320, 550, 320);
    
    
 
    
    
    //BASIC DRAWING NOTES
    // where (100x,100y), (width, hieght), etc... 
    
    
    //BASIC BUILDING BLOCK NOTES
//  console.log(num);
//  //console.log(message2);
//var message3 = "This only works in the draw";
//
    
}
