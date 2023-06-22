
lipstickX = 0;
lipstickY = 0;

function preload(){
    lipstick = loadImage('https://i.postimg.cc/BZB1wjtZ/LIPSTICK-IMAGE-C116.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x: " + results[0].pose.nose.x);
        lipstickX = results[0].pose.nose.x-30;
        lipstickY = results[0].pose.nose.y;
        console.log("nose y: " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick, lipstickX, lipstickY, 60, 40);
}

function take_snapshot() {
    save(My_Picture.png);
}