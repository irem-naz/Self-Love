let imgT;
let trees = [];
let ctr2 = 0;
let loc=0;
let mysnow = [];
let myfog;


class fog {
  constructor() {
    this.y = 0;
    this.adder = 0.25;
  }
  draw() {
    noStroke();
    fill(220);
    push();
    translate(width / 2 + this.y, (height * 8) / 9);
    ellipse(0, -100, 200, 150);
    ellipse(-120, -120, 200, 100);
    ellipse(-150, -120, 140, 200);
    ellipse(160, -120, 200, 150);
    pop();
    fill(190);
    push();
    translate(width / 2 + this.y, (height * 9) / 8);
    ellipse(0, -100, 200, 100);
    ellipse(-120, -120, 200, 100);
    ellipse(-150, -120, 140, 200);
    ellipse(160, -120, 200, 170);
    pop();
    this.y += this.adder;
    if (this.y > 15) this.adder = -this.adder;
    else if (this.y < -15) this.adder = -this.adder;
  }
}

let x, y, w, k;
let z = 0;
function runstorm(a) {
  z = 0;
  x = random(0, width);
  y = 0;
  w = random(0, 2);
  choice = int(random(a));
  if (choice == 0) mysnow.push(new snowball(x, y, z, w));
  for (let i = 0; i < mysnow.length; i++) {
    mysnow[i].draw();
    if (mysnow[i].getY() > height) {
      mysnow.splice(i, 1);
    }
  }
}

class user2 {
  constructor() {
    this.size = 15;
  }
  draw() {
    push();
    translate(mouseX, mouseY);
    noStroke();
    fill(225);
    ellipse(0, 0, this.size, (7 * this.size) / 6);
    fill(0);
    ellipse(0, this.size, (5 * this.size) / 4, this.size / 3);
    pop();
  }
}

class snowball {
  constructor(xo, yo, sx, sy) {
    this.xo = xo;
    this.yo = yo;
    this.speedy = sy;
    this.speedx = sx;
  }
  draw() {
    noStroke();
    fill(255);
    circle(this.xo, this.yo, 10);
    this.xo += this.speedx;
    this.yo += this.speedy;
  }
  getX() {
    return this.xo;
  }
  getY() {
    return this.yo;
  }
}


mysnow[0] = new snowball(200, 0, 0, 2);
  myfog = new fog();
  hey2 = new user2();

function setRoom2() {
  let w = 45.7;
  let h = 80.5;

  for (let y = 0; y < 7; y++) {
    trees[y] = [];
    for (let x = 0; x < 9; x++) {
      if (x < 2) {
        w = 40;
        trees[y][x] = imgT.get(x * w, y * h, w, h);
        w += 5;
      }

      if (x > 1) {
        w = 44;
        trees[y][x] = imgT.get(x * w, y * h, w, h);
      }

      if (x > 4) {
        w = 45.6;
        trees[y][x] = imgT.get(x * w, y * h, w, h);
      }
    }
  }

}

let xLoc, yLoc, count;

function runRoom2() {
  background(255);
  ph3.resize(500, 200);
  image(ph3, 0, height - ph3.height, ph3.width, ph3.height);
  ph2.resize(0, ph2.height);
  image(ph2, -150, 60);
  myfog.draw();
  image(ph3, 0, height - ph3.height + 30, ph3.width, ph3.height);
  background(150, 120);

  //print(mouseX + ", " + mouseY);
  if (ctr2< 10) {
    loc = 0;
    yLoc = 170;
    xLoc = 100;
    count = 5;
  } else if (ctr2 < 15) {
    loc = 1;
    yLoc = 165;
    xLoc = 90;
    count = 4;
  } else if (ctr2 < 20) {
    loc = 2;
    yLoc = 185;
    xLoc = 90;
    count = 2;
  } else if (ctr2 < 25) {
    loc = 3;
    yLoc = 190;
    xLoc = 86;
    count = 0;
  } else if (ctr2 < 30) {
    loc = 4;
    yLoc = 190;
    xLoc = 80;
    count = 0;
  } else if (ctr2 < 40) {
    loc = 5;
    yLoc = 190;
    xLoc = 90;
    count = 0;
  } else if (ctr2 < 50) {
    loc = 6;
    yLoc = 190;
    xLoc = 90;
    count = 0;
  } else {
    loc = 7;
    yLoc = 190;
    xLoc = 90;
    count = 0;
  }
  trees[2][loc].resize(80, 0);
  image(trees[2][loc], xLoc, yLoc);
  boundary2();

  if (mouseX > 90 && mouseX < 170 && mouseY > 190 && mouseY < 340){ hey2.draw();}
  runstorm(count);
  if(ctr2 > 55){
    return true;
  }
}

function mouseClicked() {
  if (mouseX > 90 && mouseX < 170 && mouseY > 190 && mouseY < 340) ctr2++;
}



u = 0;
s = 5;
function boundary2() {
  u += s;
  noFill();
  strokeWeight(3);
  stroke(212, 175, 55, u);
  if (u == 255) s = -s;
  else if (u == 0) s = -s;
  rect(90, 190, 80, 150);
}
