let beatList = [];
let balls = [];
let songTimeCount = 0;
let manualTimeCount = 0;
let beatFrame;
let state = 0;


function preload() {
    music1 = loadSound("../music/testing.mp3");
    music2 = loadSound("../music/testing2.mp3");
    music3 = loadSound("../music/testing3.mp3");
    music4 = loadSound("../music/testing4.mp3");
    music5 = loadSound("../music/testing5.mp3");
    music6 = loadSound("../music/testing6.mp3");
    music7 = loadSound("../music/testing7.mp3");
}

function setup() {
    createCanvas(500, 500);
    background(0);

    theMusic = music5;

}

function keyPressed() {
    if (keyCode == 80) {
        if (state == 0) {
            state = 1;
            theMusic.play();
        }
        else if (state == 1) {
            state = 0;
            theMusic.stop();
        }
    }

    if (keyCode == 88) {
        beatList = [];
    }

    if (keyCode == 32) {
        manualTimeCount = round(songTimeCount, 3);
        beatList.push( manualTimeCount );
        console.log(beatList);

        balls.push( new Ball(0, 300) );
    }

    
}

function draw() {
    background(0);
    fill(255);

    if (state == 1) {
        songTimeCount = theMusic.currentTime();

    }

    text("Music time count: " + songTimeCount, 100, 50);
    text("Manual count: " + manualTimeCount, 100, 100);
    text("Press [P] to toggle music", 100, 150);
    text("Hit [SPACE] to record the timepoint", 100, 180);


    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        if (balls[i].out()) {
            balls.splice(i, 1);
            i--;
        }
    }
    

}

function textFile() {
    let link = document.createElement("a");
    let textData = beatList.join(",");
    let blob = new Blob([textData], { type: "text/plain" });
    link.href = URL.createObjectURL(blob);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);

}

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 8;
        this.size = 50;
    }

    
    move() {
        ellipse(this.x, this.y, this.size, this.size);
        this.x += this.speed;
    }

    out() {
        if (this.x >= width + 100) {
            return true;
        }

        else {
            return false;
        }
    }
}


