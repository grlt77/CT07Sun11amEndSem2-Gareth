let bird
let background, birdImg;


function preload(){
background = loadImage('assets/background.png');
birdImg = loadImage('assets/bird.png');
}


function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    bird = new Sprite(birdImg)
}


function draw(){
    image(background, 0, 0, width, height);
}
