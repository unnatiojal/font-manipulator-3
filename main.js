leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Font size of the text will be = "+ difference + "px";
    textSize(difference);
    fill('#e6e6fa');
    text('Unnati ojal', 50, 400);
}
