song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.position(475,215);

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("Left Wrist X: "+leftWristX+" Left Wrist Y: "+leftWristY);
        console.log("Right Wrist X: "+rightWristX+" Right Wrist Y: "+rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);

    fill("#9673d1");
    stroke("#9673d1");

    circle(leftWristX,leftWristY,20);
    // number_leftWristY= Number(leftWristY);
    // remove_decimals= floor(number_leftWristY);
    // volume=remove_decimals/400;
    // document.getElementById("volume_result").innerHTML=volume;
    // song.setVolume(volume);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}