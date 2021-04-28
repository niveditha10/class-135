video="";
status="";
slide_value="";
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas=createCanvas(400,340);
    canvas.position(430,200);
}

function draw(){
    image(video,0,0,400,340);
}

function start(){
    detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detcting objects";
}

function modelLoaded(){
 console.log("model is loaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}

function play(){
    video.play();
    video.volume(0);
}

function pause(){
    video.pause();
}

function stop(){
    video.stop();
}

function slider_change(){
    slider_value=document.getElementById("slider").nodeValue;
    video.speed(slider_value);
    video.volume(0);
}