 noseX=0
 noseY=0


function preload(){ 
    Mustache=loadImage("Mustache.png")
 }    

function setup(){
mycanvas=createCanvas(600,450)
mycanvas.center()
Video=createCapture(VIDEO)
Video.hide()

pn=ml5.poseNet(Video, ModelLoaded)
    pn.on('pose', gotResult)

}

function draw(){
    image(Video,0, 0, 600, 450)
    image(Mustache, noseX-70, noseY-30, 100, 100)
}

function ModelLoaded(){
    console.log('Model has loaded')

}

function gotResult(result){
    if(result.length>0){
        console.log(result)
        noseX=result[0].pose.nose.x
        noseY=result[0].pose.nose.y

        }
    }