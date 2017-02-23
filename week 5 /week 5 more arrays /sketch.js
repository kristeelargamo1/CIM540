var questions = "Do I have a chance with Channing Tatum?";

var choices = {
  "Yes, y'all are perfect for eachother <333": 0,
  "NO WAY IN HELL GIRL": 0,
  "why did I even click on this link": 0,
  "Haha. In your dreams!": 0
};

var currentAnswer = 0;

var textArea = 100;

var totalCounter = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();

}

function draw() {
  background(250);
  fill("red");
  textAlign(CENTER);
  text(questions, 0, 50, width, 100);

  var choiceCounter = 0;
  totalCounter = 0;

  for (var keys in choices) {

    fill("green");
    textAlign(CENTER);
    text(keys, choiceCounter * textArea, height / 2, textArea, textArea);
    text(choiceCounter + 2, choiceCounter * textArea, height / 2 + 50, textArea, textArea);
    text(choices[keys], choiceCounter * textArea, height / 2 + 70, textArea, textArea);

    choiceCounter++;

    totalCounter += choices[keys];

  }

  choiceCounter = 0;
  for (var keys in choices) {
    var rectHeight = map(choices[keys], 2, totalCounter, 2, height);
    fill(150, 150);
    rect((choiceCounter * 100) + 20, height - rectHeight, 50, height);
    choiceCounter++;
  }

  fill("blue");
  var totalMessage = "total: " + totalCounter;
  text(totalMessage, 200, height - 10);

}

function keyPressed() {
  //console.log(keyCode);

  //49 == 1, 50 == 2, 51 == 3, 52 == 4
  if (keyCode == 49) {
    choices["Yes, y'all are perfect for eachother <333"]++;
  } else if (keyCode == 50) {
    choices["NO WAY IN HELL GIRL"]++;
  } else if (keyCode == 51) {
    choices["why did I even click on this link"]++;
  } else if (keyCode == 52) {
    choices["Haha. In your dreams!"]++;
  }




}