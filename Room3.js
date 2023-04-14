let worldCounter = 0;
let circleSize = 15;
let speed = 100;
let soundLevel = 1;
let choice = 0;
let counter = 11;


function setRoom3() {
  sound.play();
  background(0);
  noStroke();
  fill(255);
}

function runRoom3() {
  sound.volume(soundLevel);
  img.resize(400, 0);
  img.loadPixels();
  if (worldCounter < 11 * 1) {
    img = img1;
    choice = 0;
  } else if (worldCounter < 11 * 2) {
    img = img2;
    circleSize = 10;
    choice = 1;
  } else if (worldCounter < 11 * 3) {
    img = img3;
    circleSize = 5;
    choice = 2;
  } else if (worldCounter < 11 * 4) {
    img = img4;
    circleSize = 2;
    speed = 1000;
    choice = 3;
  } else if (worldCounter < 11 * 5) {
    img = img5;
    speed = 2000;
    choice = 4;
  } else {
    choice = 5;
    sound.volume(0.01);
    circleSize = -1;
    img = img6;
    img.resize(400, 0);
    image(img, 0, 0);
    boundary3();
    //user shape
    push();
    translate(40, 330);
    noStroke();
    fill(190, 190, 190, 220);
    ellipse(0, 0, 15, (7 * 15) / 6);
    fill(60);
    ellipse(0, 15, (5 * 15) / 4, 15 / 3);
    pop();
    fill(255);
    text("Welcome Home.", 70, 340);
    soundLevel = 0;
  }
  if (circleSize > 0) {
    for (i = 0; i < speed; i++) {
      pixelX = random(width);
      pixelY = random(height);
      pixelColor = img.get(pixelX, pixelY);
      fill(pixelColor);
      circle(pixelX, pixelY, circleSize);
      if (pixelY > img.height - 5) {
        stroke(pixelColor);
        line(pixelX, pixelY, pixelX, height);
        noStroke();
      }
    }
  }

  if (counter < 11) {
    textSize(30);
    fill(255);
    question(choice);
    counter++;
    worldCounter++;
  }

  if (soundLevel > 0) {
    soundLevel -= 0.00005;
  }
  if (keyCode == ENTER) {
    counter = 0;
  }
}

u = 0;
s = 5;
function boundary3() {
  u += s;
  fill(0);
  strokeWeight(3);
  stroke(212, 175, 55, u);
  if (u == 255) s = -s;
  else if (u == 0) s = -s;
  //rect(5,img.height,width-10,height-img.height-50);
  circle(40, 335, 50);
  noStroke();
}

function question(w) {
  switch (w) {
    case 0:
      text("Hello!", 30, 290);
      break;
    case 1:
      text("What are you up to?", 30, 320);
      break;
    case 2:
      text("Can you hear me?", 30, 350);
      break;
    case 3:
      text("I'm back.", 30, 380);
      break;
    case 4:
      break;
    case 5:
      break;
  }
}
/*
function mouseClicked() {
  counter = 0;
}*/


