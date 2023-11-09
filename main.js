objectDetector= "";
img = "";
objects = [];
status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Modelo cargado")
    status=true;
    objectDetector.detect(img, gotResult)
    
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        objects = results
        console.log(objects);
    }

}

function draw(){
    image(img,  0, 0, 640, 420);

    for(var i=0; i < objects.length; i++){
        fill(255, 0, 0);
        percent = floor(objects[i].confidence *100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(255,0,0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    
    }
}
