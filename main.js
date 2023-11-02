nosex=0;
nosey=0;
Leftwristx=1;
Rightwristx=1;
difference=0;



function preload()
{

}

function setup()
{
canvas=createCanvas(400,400);
canvas.position(700,200);
video=createCapture(VIDEO);
video.size(550,500);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}

function draw(){

    background("cyan")
    fill("red");
    stroke("red");
    textSize(difference);
    text("Samanyu",50,200);
    document.getElementById("Width1").innerHTML="Width and Height of the square is "+difference+"px";
}

function modelLoaded(){
    console.log("posenet model is initialized");
}

function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex value="+nosex+"nosey value= "+nosey);
    Leftwristx=results[0].pose.leftWrist.x;
Rightwristx=results[0].pose.rightWrist.x;
console.log("leftwristx="+Leftwristx+ " Rightwristx= "+Rightwristx);
difference=Math.floor(Leftwristx-Rightwristx);
console.log(difference);

    
}
}
    

    
