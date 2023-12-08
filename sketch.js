let notes = [];
let notesOffset = -2;
let songTimeListAdjusted = [];
let musicList2 = [8.933,10.016,11.083,12.197,13.285,14.352,15.451,17.6,17.883,18.133,18.416,18.683,18.965,19.115,19.365,19.813,22.251,22.517,22.768,23.067,23.333,23.499,23.717,24.187,26.368,26.635,26.917,27.184,27.467,27.701,27.883,28.133,28.565,30.699,30.965,31.248,31.547,31.803,32.048,32.213,32.464,32.917,35.051,35.536,36.133,36.683,37.28,37.765,38.32,38.917,39.435,40,40.565,41.099,41.616,42.133,42.667,43.253,43.819,44.347,44.885,45.451,45.984,46.533,47.067,47.616,48.165,48.699,49.232,49.781,50.331,50.869,51.387,51.963,52.565,52.832,53.099,53.381,53.669,53.931,54.181,54.363,54.768,57.152,57.397,57.717,58.016,58.251,58.432,58.699,59.115,61.216,61.515,61.803,62.064,62.331,62.597,62.784,63.035,63.499,65.867,66.149,66.4,66.683,66.965,67.136,67.381,67.845,69.968,70.251,70.517,70.8,71.051,71.317,71.499,71.717,72.149,73.248,74.331,74.619,74.896,75.163,75.451,75.696,75.867,76.112,76.565,77.6,78.683,78.981,79.248,79.536,79.819,80.08,80.267,80.496,80.901,83.317,83.616,83.883,84.165,84.432,84.635,84.848,85.264,85.717,86.299,86.896,87.451,87.765,88.032,88.331,88.597,88.832,88.997,89.216,89.632,92.032,92.299,92.597,92.88,93.147,93.349,93.584,93.984,94.363,94.784,95.099,95.515,95.915,96.197];
let musicList5 = [5.659,5.963,6.112,6.459,6.608,6.912,7.077,7.36,7.541,7.877,8.027,8.309,8.475,8.96,9.408,9.824,11.344,11.595,11.76,11.979,12.475,12.645,12.896,13.408,13.557,13.808,14.261,14.427,14.827,14.96,15.243,15.392,15.659,15.808,16.16,16.325,16.629,16.811,17.227,18.693,18.96,19.109,19.424,19.579,19.861,20.027,20.325,20.512,20.811,20.96,21.243,21.413,21.712,21.877,22.16,22.325,22.645,22.795,23.093,23.259,23.557,23.712,24.011,24.176,24.608,26.064,26.293,26.459,26.725,27.264,27.461,27.675,28.128,28.309,28.56,29.077,29.259,29.525,29.712,30.027,30.176,30.48,30.645,31.077,31.541,31.995,33.376,33.696,33.845,34.16,34.309,34.725,35.211,35.509,35.659,35.979,36.16,36.512,36.661,36.96,37.141,37.408,37.579,37.877,38.027,38.48,38.944,39.376,40.779,41.093,41.259,41.691,42.112,42.597,42.912,43.077,43.547,44.011,44.459,44.747,44.907,45.291,45.445,45.893,46.331,46.795,48.16,48.475,48.645,48.944,49.125,49.557,50.011,50.309,50.464,50.747,50.912,51.259,51.424,51.691,51.861,52.16,52.331,52.677,52.827,53.227,53.691,54.144,55.525,55.845,56.011,56.277,56.693,56.896,57.227,57.392,57.675,57.861,58.144,58.309,58.629,58.795,59.093,59.291,59.659,59.808,60.075,60.261,60.661,61.125,61.595,62.96,63.227,63.392,63.659,63.861,64.293,64.757,65.093,65.243,65.595,65.76,66.064,66.24,66.512,66.677,66.944,67.131,67.429,67.595,68.011,68.512,68.944,69.445,69.893,70.347,70.661,70.907,71.093,71.541,71.707,71.995,72.427,72.624,72.875,73.397,73.611,73.877,74.043,74.341,74.491,74.811,74.992,75.376,75.893,76.347,77.691,78.011,78.176,78.496,78.661,79.093,79.525,79.829,79.973,80.293,80.459,80.795,80.944,81.243,81.408,81.691,81.877,82.16,82.325,82.757,83.243,83.643,84.208,84.677,85.109,85.44,85.611,86.027,86.309,86.443,86.576,86.827,86.96,87.408,87.829,88.128,88.261,88.411,88.757,89.157,89.291,89.573,89.744,90.208,90.656,91.125,91.611,92.059,92.48,92.773,92.912,93.291,93.44,93.84,94.293,94.629,94.773,95.093,95.259,95.579,95.728,96.043,96.208,96.528,96.677,96.96,97.125,97.573,98.043,98.496,98.976,99.44,99.877,100.176,100.373,100.608,101.061,101.211,101.541,101.691,101.995,102.176,102.475,102.64,102.992,103.147,103.424,103.611,105.557];
let musicList7 = [4.352,4.917,5.419,5.787,6.133,6.752,7.232,7.797,8.352,8.837,9.083,9.333,9.6,9.968,10.267,10.832,11.371,11.899,12.384,12.667,12.933,13.216,13.483,13.749,14.139,14.501,15.072,15.552,16.101,16.635,17.184,17.749,18.299,18.699,19.285,19.787,20.469,21.051,21.515,21.803,22.085,22.501,22.885,23.867,24.565,25.168,25.584,26.197,26.635,27.035,28.171,28.517,28.837,29.136,29.397,30.085,30.405,30.816,31.184,32.768,33.035,33.301,33.568,34.032,34.32,34.619,35.067,35.355,35.515,35.717,36.203,36.651,37.003,37.168,37.387,37.536,37.733,38.235,38.768,39.035,39.168,39.419,39.568,39.835,41.851,42.384,42.917,43.184,43.317,43.6,43.733,44.005,44.469,45.019,45.248,45.397,45.685,45.835,46.101,46.603,47.136,47.403,47.552,47.803,47.952,48.219,50.288,50.784,51.003,51.269,51.653,52,52.235,52.389,52.651,52.885,53.115,53.371,53.616,53.771,54.016,54.171,54.432,54.667,54.949,55.232,55.488,55.717,55.851,56.101,56.251,56.533,56.805,57.067,57.317,57.6,57.851,58.101,58.368,58.597,58.864,59.115,59.403,59.632,59.867,60.016,60.267,60.4,60.635,60.933,61.216,61.467,61.733,61.968,62.133,62.368,62.517,62.752,62.997,63.301,63.536,63.835,64.064,64.235,64.448,64.619,64.864,65.168,65.381,65.68,65.915,66.149,66.981,67.2,67.483,68.032,68.485,68.837,69.419,69.888,70.149,70.565,70.917,71.152,71.397,71.685,71.915,72.187,72.603,72.987,74,74.288,74.517,74.8,75.035,75.333,75.584,75.867,76.117,76.384,76.8,77.168,78.181,78.432,78.683,78.917,79.184,80.133,80.432,80.933,81.301,82.064,82.299,82.651,83.147,83.419,83.685,84.048,84.448,84.715,85.168,85.504,86.768,87.035,87.568,87.867,88.336,88.581,88.832,89.301,89.701,90.736,91.019,91.269,91.515,91.765,92.016,92.501,92.816,93.083,93.515,93.92,94.635,94.885,95.152,95.6,95.952,96.219,96.987,97.232,97.648,98,100.864,101.115,101.365,101.813,102.149,103.035,103.483,103.851,104.235,104.501,104.768,104.997,105.269,105.536,105.915,106.347,108.4,108.699,108.971,109.168,109.451,109.701,110.101,110.48,111.787,112.203,112.549,112.832,113.301,113.584,113.867,114.283,114.683,116.981,117.483,117.797,118.053];
let theMusic, theMusicList;
let songTimeCount = 0;
let particles = [];
let gradings = [];
let combo = 0;
let particleX, particleY;



let bg1Y = 0;
let bg2Y = -800;

let characterPos = 400;

let score = 0;
let hitGrading = "";

let leftKeyDetector = 20;
let middleKeyDetector = 20;
let rightKeyDetector = 20;

let state = -1;



function preload() {
  beatHit = loadSound("music/beathit.mp3");
  music1 = loadSound("music/testing.mp3");
  music2 = loadSound("music/testing2.mp3");
  music3 = loadSound("music/testing3.mp3");
  music4 = loadSound("music/testing4.mp3");
  music5 = loadSound("music/testing5.mp3");
  music6 = loadSound("music/testing6.mp3");
  music7 = loadSound("music/testing7.mp3");
  bg1 = loadImage("images/bg.PNG");
  bg2 = loadImage("images/bg.PNG");
  bgNight1 = loadImage("images/bgNight.PNG");
  bgNight2 = loadImage("images/bgNight.PNG");
  bgFire1 = loadImage("images/bgFire.PNG");
  bgFire2 = loadImage("images/bgFire.PNG");
  knightWalking = loadImage("images/knightWalking.GIF");
  knightHitting = loadImage("images/knightHitting.GIF");
  monster = loadImage("images/monster.PNG");
  monsterNight = loadImage("images/monsterNight.PNG");
  monsterFire = loadImage("images/monsterFire.PNG");
  particlePerfect = loadImage("images/particlePerfect.PNG");
  particleGood = loadImage("images/particleGood.PNG");
  particleOkay = loadImage("images/particleOkay.PNG");
  perfect = loadImage("images/perfect.png");
  good = loadImage("images/good.png");
  okay = loadImage("images/okay.png");
  comboImage = loadImage("images/combo.png");
  scoreImage = loadImage("images/score.png");


}

function setup() {
  let cnv = createCanvas(800, 800);
  cnv.parent('cnvContainer');
  frameRate(60);
  background(0);
  imageMode(CENTER);

  theMusic = music2;
  theMusicList = musicList2;

  theBackground1 = bg1;
  theBackground2 = bg2;

}

function keyPressed() {
  // Hit SPACE to start or stop
  if (keyCode == 32) {

    if (state == 0) {
      state = 1;
      theMusic.play();
    }
    // else if (state == 1) {
    //   state = 0;
    //   score = 0;
    //   theMusic.stop();
    //   notes = [];
    //   songTimeListAdjusted = [];
    // }
  }

  // Note hits with arrow keys (this prevents from hitting every note by simply holding the keys)
  if (keyCode == 74) {
    leftKeyDetector = 0;
    characterPos = 275;
  }
  else if (keyCode == 75) {
    middleKeyDetector = 0;
    characterPos = 400;
  }
  else if (keyCode == 76) {
    rightKeyDetector = 0;
    characterPos = 525;
  }
}

function draw() {
  // Visualization
  background(0);
  tint(255, 255);
  imageMode(CORNER);
  image(theBackground1, 0, bg1Y);
  image(theBackground2, 0, bg2Y);
  bg1Y += 2;
  bg2Y += 2;
  if (bg1Y >= height) {
    bg1Y = -800;
  }
  if (bg2Y >= height) {
    bg2Y = -800;
  }

  imageMode(CENTER);
  stroke(255, 40);
  strokeWeight(8);
  line(275, 0, 275, height);
  line(400, 0, 400, height);
  line(525, 0, 525, height);

  fill(255, 80);
  noStroke();
  ellipse(275, height-200, 70, 70);
  ellipse(400, height-200, 70, 70);
  ellipse(525, height-200, 70, 70);

  if (frameCount % 10 == 0) {
    console.log("Notes List: " + notes.length);
    console.log("song List: " + songTimeListAdjusted.length);
    console.log("current time: " + songTimeCount);
  }



  // combo
  image(comboImage, 100, 300, 150, 50);
  image(comboImage, 700, 300, 150, 50);
  fill(252, 227, 83);
  textSize(40);
  textAlign(CENTER);
  text(combo, 100, 370);
  text(combo, 700, 370);

  // score
  fill(250);
  image(scoreImage, 100, 80);
  text(score, 100, 130);
  

  // character
  if (leftKeyDetector <= 10 || rightKeyDetector <= 10 || middleKeyDetector <= 10 ) {
    image(knightHitting, characterPos, height-100);
  }

  else {
    image(knightWalking, characterPos, height-100);
  }

  // Generating, hitting and missing notes
  songTimeCount = theMusic.currentTime();

  if (state == 1) {

    leftKeyDetector += 1;
    middleKeyDetector += 1;
    rightKeyDetector += 1;
    
    if (songTimeListAdjusted[0] <= songTimeCount) {
      notes.push( new Note(100, -360) );
      songTimeListAdjusted = songTimeListAdjusted.slice(1);
    }

    for (let i = 0; i < notes.length; i++) {
      notes[i].moveAndDisplay();
      if ( notes[i].noteHit() ) {
        combo += 1;
        particleX = notes[i].x;
        particleY = notes[i].y;
        for (let i = 0; i < 10; i++) {
          particles.push( new Particle(particleX, particleY) );
        }

        gradings.push( new Grading(notes[i].x, notes[i].y) );
        
      }

      if ( notes[i].noteMissed() ) {
        combo = 0;
      }

      if ( notes[i].noteMissed() || notes[i].noteHit() ) {
        notes.splice(i, 1);
        i--;
      }

    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].moveAndDisplay();
      if (particles[i].remove() == true) {
        particles.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < gradings.length; i++) {
      gradings[i].display();
      if (gradings[i].a <= 0) {
        gradings.splice(i, 1);
        i--;
      }
    }


  }

}

class Note {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.randomNum = int( random(0, 3) );
    this.speed = 8;
    this.position;
  }

  moveAndDisplay() {
    fill(0, 100);
    ellipse(this.x, this.y, 60, 40);
    image(theMonster, this.x, this.y, 80, 80);
    fill(255);
    if (this.randomNum == 0) {
      this.x = 275;
      this.position = "left";
    }
    if (this.randomNum == 1) {
      this.x = 400;
      this.position = "middle";
      
    }
    if (this.randomNum == 2) {
      this.x = 525;
      this.position = "right";
    }

    this.y += this.speed;
  }

  noteMissed() {
    if (this.y >= height - 100) {
      hitGrading = "Miss";
      return true;
    }
    else {
      return false;
    }
  }
  
  noteHit() {
    if ( this.position == "left" && leftKeyDetector <= 3) {
      if (abs(this.y - (height -200)) < 10) {
        score += 3;
        beatHit.play();
        hitGrading = "Perfect";
        return true;
      }
      else if (abs(this.y - (height -200)) < 20) {
        score += 2;
        beatHit.play();
        hitGrading = "Good";
        return true;
      }
      else if (abs(this.y - (height -200)) < 30) {
        score += 1;
        beatHit.play();
        hitGrading = "Okay";
        return true;
      }
    }
    
    if ( this.position == "middle" && middleKeyDetector <= 3) {
      if (abs(this.y - (height -200)) < 10) {
        score += 3;
        beatHit.play();
        hitGrading = "Perfect";
        return true;
      }
      else if (abs(this.y - (height -200)) < 20) {
        score += 2;
        beatHit.play();
        hitGrading = "Good";
        return true;
      }
      else if (abs(this.y - (height -200)) < 30) {
        score += 1;
        beatHit.play();
        hitGrading = "Okay";
        return true;
      }
    }
    
    if ( this.position == "right" && rightKeyDetector <= 3) {
      if (abs(this.y - (height -200)) < 10) {
        score += 3;
        beatHit.play();
        hitGrading = "Perfect";
        return true;
      }
      else if (abs(this.y - (height -200)) < 20) {
        score += 2;
        beatHit.play();
        hitGrading = "Good";
        return true;
      }
      else if (abs(this.y - (height -200)) < 30) {
        score += 1;
        beatHit.play();
        hitGrading = "Okay";
        return true;
      }
    }

    else {
      return false;
    }
  }

}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.size = random(40, 50);
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    if (hitGrading == "Perfect") {
      this.graphic = particlePerfect;
    }
    else if (hitGrading == "Good") {
      this.graphic = particleGood;
    }
    if (hitGrading == "Okay") {
      this.graphic = particleOkay;
    }
  }

  moveAndDisplay() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.size -= 1;
    this.size = constrain(this.size, -1, 50);

    image(this.graphic, this.x, this.y, this.size, this.size);
  }

  remove() {
    if (this.size <= 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

class Grading {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = 255;
    if (hitGrading == "Perfect") {
      this.graphic = perfect;
    }
    else if (hitGrading == "Good") {
      this.graphic = good;
    }
    if (hitGrading == "Okay") {
      this.graphic = okay;
    }
  }

  display() {
    tint(255, this.a);
    image(this.graphic, this.x + 30, this.y - 30, 200, 55);
    this.a -= 10;
  }
}

function selectMusic2() {
  theMusic = music2;
  theMusicList = musicList2;
  theBackground1 = bgNight1;
  theBackground2 = bgNight2;
  theMonster = monsterNight;

  state = 0;

  notes = [];

  // Set List offset
  songTimeListAdjusted = [];
  for (let i = 0; i < theMusicList.length; i ++) {
    songTimeListAdjusted.push( theMusicList[i] + notesOffset );
  }
}

function selectMusic5() {
  theMusic = music5;
  theMusicList = musicList5;
  theBackground1 = bg1;
  theBackground2 = bg2;
  theMonster = monster;

  notes = [];

  state = 0;


  // Set List offset
  songTimeListAdjusted = [];
  for (let i = 0; i < theMusicList.length; i ++) {
    songTimeListAdjusted.push( theMusicList[i] + notesOffset );
  }
}

function selectMusic7() {
  theMusic = music7;
  theMusicList = musicList7;
  theBackground1 = bgFire1;
  theBackground2 = bgFire2;
  theMonster = monsterFire;

  notes = [];

  state = 0;
  // Set List offset
  songTimeListAdjusted = [];
  for (let i = 0; i < theMusicList.length; i ++) {
    songTimeListAdjusted.push( theMusicList[i] + notesOffset );
  }
}

function gameStop() {
  score = 0;
  combo = 0;
  state = -1;
  theMusic.stop();
  notes = [];
  songTimeListAdjusted = [];
}