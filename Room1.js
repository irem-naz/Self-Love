let ctr = 0;
let rate = 20;

let cW = 10;
let adder = 1;
let shapes = [];

let rez = 0.02;
let t = 0;
let space = 3; //3 for space and size for regular Perlin field;
let rsize = 3;

let u = 0,
  s = 5;

class user1 {
  constructor(xP, yP) {
    this.xPos = xP;
    this.yPos = yP;
    this.xspeed = 3;
    this.yspeed = 3;
    this.size = 15;
  }
  draw() {
    push();
    translate(this.xPos, this.yPos);
    noStroke();
    fill(190, 190, 190, 220);
    ellipse(0, 0, this.size, (7 * this.size) / 6);
    fill(50);
    ellipse(0, this.size, (5 * this.size) / 4, this.size / 3);
  pop();
  }
  
  move(){
    if (keyIsDown(LEFT_ARROW)) {
      if (dist(width / 2, height / 2, this.xPos, this.yPos) < 100)
        this.toLeft();
      else {
        this.xPos = width / 2;
        this.yPos = height / 2;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (dist(width / 2, height / 2, this.xPos, this.yPos) < 100)
        this.toRight();
      else {
        this.xPos = width / 2;
        this.yPos = height / 2;
      }
    }

    if (keyIsDown(UP_ARROW)) {
      if (dist(width / 2, height / 2, this.xPos, this.yPos) < 100) this.toUp();
      else {
        this.xPos = width / 2;
        this.yPos = height / 2;
      }
    }

    if (keyIsDown(DOWN_ARROW)) {
      if (dist(width / 2, height / 2, this.xPos, this.yPos) < 100)
        this.toDown();
      else {
        this.xPos = width / 2;
        this.yPos = height / 2;
      } 
    }
  }
  toUp() {
    this.yPos -= this.yspeed;
  }
  toDown() {
    this.yPos += this.yspeed;
  }
  toLeft() {
    this.xPos -= this.xspeed;
  }
  toRight() {
    this.xPos += this.xspeed;
  }
  getXPos(){
    return this.xPos
  }
  getYPos(){
    return this.yPos
  }
}

class faces {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    frameRate(10);
    stroke(random(255), random(255), random(255), map(hey.getYPos(), height/4, 3*height/4, 100, 300));
    strokeWeight(3);
    noFill();
    push();
    translate(this.x, this.y);
    push();
    let n1 = random(-5, 5);
    translate(-n1, n1);
    rect(-20 + random(-3, 3), -7, 40 + random(-5, 5), 15);
    circle(0, 0, 40 + cW);
    circle(15, 0, cW);
    circle(-15, 0, cW);
    push();
    let n2 = random(-5, 5);
    translate(-n2, n2);
    triangle(-25, -40, 25, -40, 0, 0);
    triangle(25, 40, -25, 40, 0, 0);
    pop();
    pop();
    pop();
    cW += adder;
    if (cW > 11) adder = -1;
    if (cW < 9) adder = +1;
    frameRate(map(hey.getXPos(), width/4, 3*width/4, 10, 150));
  }
}


function setRoom1() {
  fft = new p5.FFT();
  peakDetect = new p5.PeakDetect();
  sound1.amp(0.2);
  sound1.play();
  background(0);
  hey = new user1(width / 2, height / 2);

  let h = height / 8,
    j = width / 16;
  for (let i = 0; i < 25; i++) {
    shapes[i] = new faces(j, h);
    j += (7 * width) / 40;

    if (i % 6 == 0 && i != 0) {
      h += height / 4;
      j = width / 16;
    }
  }
}

function runRoom1() {
  ctr += 0.1;
  if (ctr < 120){
    intro();
    centre();
  } 
  else if (ctr < 135) background(0);
  else if (ctr < 165) {
    let r = int(random(10));
    if (r == 8) background(255);
    else background(0);
  } else if (ctr < 180) {
    r = int(random(10));
    if (r == 8) fire();
    else background(0);
  } else if (ctr < 200){
    let r = int(random(10));
    if (r == 8) background(255);
    else background(0);
  }
  else {
    background(0);
    for (let i = 0; i < 25; i++) {
      shapes[i].draw();
    }
    
  }
  boundary1();
  hey.draw();
  hey.move();
  if(ctr>300){
    sound1.stop();
    return true;
  }
}

function boundary1(){
  u += s;
  noFill();
  strokeWeight(3);
  stroke(212, 175, 55, u);
  if (u == 255) s = -s;
  else if (u == 0) s = -s;
  circle(width / 2, height / 2, width/2);
  noStroke();
}

function centre() {
  let spectrum = fft.analyze();
  noStroke();
  fill(255);
  let h = -height + map(spectrum[1], 0, 255, height, 0);
  circle(width / 2, height / 2, h);
  
}

let xPos = 0;
let yPos = 0;
let Msize = 40;
let Csize = 40;

function intro() {
  frameRate((rate += 0.05));

  fill(0, 10);
  rect(0, 0, 500, 500);
  n = 190;
  stroke(xPos / 2, yPos / 2, n);
  fill(xPos / 2, yPos / 2, n);
  rect(xPos, yPos, 40);

  xPos = xPos + Csize;

  if (xPos > width) {
    Csize = -width / 10;
    yPos = yPos + Msize;
    stroke(xPos / 2, yPos / 2, n);
  }

  if (xPos < 0) {
    Csize = width / 10;
    yPos = yPos + Msize;
    stroke(xPos / 2, yPos / 2, n);
  }
  if (yPos > height) {
    xPos = 0;
    yPos = 0;
  }
}

function fire() {
  background(0);
  for (i = 0; i < width; i += space) {
    for (j = 0; j < height; j += space) {
      var n = noise(i * rez, j * rez, t);
      var m = int(random(1, 100));
      stroke(n * 255, n * 0, n * 0, 250);
      strokeWeight(3);
      noFill();
      rect(i, j, rsize);
    }
    t += 0.0002;
  }
}


