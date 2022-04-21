song = "";
left_wrist_x = 0;
left_wrist_Y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(530, 190);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Initialized!");
}
function draw(){
    image(video, 0, 0, 500, 500);
}
function press(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_Y = results[0].pose.leftWrist.y;
        console.log("Left Wrist X is " + left_wrist_x + "left wrist Y is " + left_wrist_Y);

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("Right Wrist x is " + right_wrist_x + "right wrist y is " + right_wrist_y);
    }
}