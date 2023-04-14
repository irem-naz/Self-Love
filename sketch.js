let roomChoice = 4;
//let mainRoomCtr = 0;
let tintB=255;

function preload() {
  sound1 = loadSound("myMusic.mp3");
  imgT = loadImage("myTrees.png");
  ph2 = loadImage("mount.png");
  ph3 = loadImage("cliff.png");
  img1 = loadImage("1.jpg");
  img2 = loadImage("2.jpg");
  img3 = loadImage("3.jpg");
  img4 = loadImage("4.jpg");
  img5 = loadImage("5.jpg");
  img6 = loadImage("6.jpg");
  sound = createAudio("chatter.mp3");
}

function setup() {
  createCanvas(400, 400);
  setRoom2();
  img = img1;
}

function draw() {
  switch (roomChoice) {
    case 0:
      main();
      break;
    case 1:
      preRoom1();
      break;
    case 2:
      ready1();
      break;
    case 3:
      situation1 = runRoom1();
      if (situation1 == true) {
        roomChoice = 4;
      }
      break;
    case 4:
      preRoom2();
      break;
    case 5:
      ready2();
      break;
    case 6:
      situation3 = runRoom2();
      if (situation3 == true) {
        roomChoice = 7;
      }
      break;
    case 7:
      preRoom3();
      break;
    case 8:
      ready3();
      break;
    case 9:
      runRoom3();
      break;
  }
}

function main() {
  stroke(255);
  strokeWeight(1);
  background(0);
  fill(255);
  textFont("Georgia", 15);
  text("Welcome to the experience!", 5, height / 10);
  text("This is you:", 5, (2 * height) / 10);
  hello = new user1(width / 2, height / 2);
  hello.draw();
  text("You will be experiencing 3 rooms.", 5, (8 * height) / 10);
  text("Press W to proceed.", 5, (9 * height) / 10);
  boundary1();
  if(tintB>0){
  background(0,tintB);
  tintB-=1;}
}

function ready1() {
  stroke(255);
  strokeWeight(1);
  background(0);
  fill(255);
  textFont("Georgia", 15);
  text("Are you ready?", width / 2 - 50, (1.5 * height) / 10);
  text("Press W to proceed.", width / 2 - 65, (9 * height) / 10);
  hello = new user1(width / 2, height / 2);
  hello.draw();
  boundary1();
}

function ready2() {
  stroke(255);
  strokeWeight(1);
  background(0);
  fill(255);
  textFont("Georgia", 15);
  text("Are you ready?", width / 2 - 50, (1.5 * height) / 10);
  text("Press W to proceed.", width / 2 - 65, (9 * height) / 10);
  hello = new user1(width / 2, height / 2);
  hello.draw();
}

function ready3() {
  stroke(255);
  strokeWeight(1);
  background(0);
  fill(255);
  textFont("Georgia", 15);
  text("Are you ready?", width / 2 - 50, (1.5 * height) / 10);
  text("Press W to proceed.", width / 2 - 65, (9 * height) / 10); 
}

function preRoom1() {
  stroke(255);
  strokeWeight(1);
  background(0);
  fill(255);
  textFont("Georgia", 50);
  text("Room 1", 5, height / 10);
  textFont("Georgia", 15);
  text("Yellow line is your boundary.", 150, (3 * height) / 10);
  text("You exist, within it.", 7, (4.5 * height) / 10);
  text(
    "Experience room 1 by using the 4 arrow keys to move.",
    10,
    (6 * height) / 10
  );
  text(
    "Don't forget to dance, even if you don't want to.",
    30,
    (7.5 * height) / 10
  );
  text("even if you are lonely.", (2.5 * width) / 4, (8 * height) / 10);
  textFont("Georgia", 20);
  text("We are all happy here.", (1.2 * width) / 4, (8.8 * height) / 10);
  textFont("Georgia", 15);
  text("Press W to proceed to room 1.", 60, (9.5 * height) / 10);
}

function preRoom2() {
  stroke(255);
  strokeWeight(1);
  background(0);
  fill(255);
  textFont("Georgia", 50);
  text("Room 2", 5, height / 10);
  textFont("Georgia", 15);
  text("You ONLY exist inside the yellow boundary.", 100, (3 * height) / 10);
  text(
    "When you click while you exist, you give life to the plant.",
    5,
    (4.5 * height) / 10
  );
  text("Experience room 2 by giving life to the plant.", 80, (6 * height) / 10);
  text(
    "When you click, you give love. You show effort.",
    5,
    (6.8 * height) / 10
  );
   text(
    "You have to show effort until you can move on.",
    70,
    (7.5 * height) / 10
  );
  textFont("Georgia", 20);
  text(
    "Is your love enough to grow the plant?",
    (0.4 * width) / 4,
    (8.5 * height) / 10
  );
  textFont("Georgia", 15);
  text("Press W to proceed to room 2.", (2 * width) / 4, (9.5 * height) / 10);
}

function preRoom3() {
  stroke(255);
  strokeWeight(1);
  background(0);
  fill(255);
  textFont("Georgia", 50);
  text("Room 3", 5, height / 10);
  textFont("Georgia", 15);
  text("You DON'T exist.", 150, (2.5 * height) / 10);
  text("Until you are welcome here.", 7, (4 * height) / 10);
  textFont("Georgia", 20);
  text("Until you feel welcome here.", (1.5 * width) / 4, (5 * height) / 10);
  textFont("Georgia", 15);
  text("When you don't, everything looks foreign.", 30, (6 * height) / 10);
  text("Gather your courage and talk.", (2 * width) / 4, (7 * height) / 10);
  text("You talk when you PRESS on it. When you are ready.", 30, (7.8 * height) / 10);
  text(
    "Experience room 3 by pressing the ENTER key.",
    (0.2 * width) / 4,
    (8.8 * height) / 10
  );
  text("Press W to proceed to room 3.", (2 * width) / 4, (9.5 * height) / 10);
}




function keyPressed() {
  if (keyCode == ENTER) {
    counter = 0;
  }
  if (keyCode == 87 && roomChoice!=3 && roomChoice!=6) {
    roomChoice++;
    if (roomChoice == 3) setRoom1();
    if (roomChoice == 9) setRoom3();
    if (roomChoice == 10){tintB=255; roomChoice=0;}
  }
}