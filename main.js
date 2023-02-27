img = "";
status = "";
objects = [];
function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(380, 380);
video.hide();
}
function start()
{
    objectdetect = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}
function modelLoaded()
{
    console.log("modelloaded");
    status = true;
objectdetect.detect(video, gotResult);
}

function gotResult(error, results)
{if(error)
    {
        console.log(error);
    }
console.log(results);
objects = results;
}
function draw()
{
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
r = random(255);
g = random(255);
b = random(255);
objectdetect.detect(video, gotResult);  
    for(i = 0; i < objects.length; i++)
    {
document.getElementById("status").innerHTML = "Status = object detected";
document.getElementById("number_off_objects").innerHTML = "number of objects detected are " + objects.length;
    
    fill(r, g, b);
    percentage = floor(objects[i].confidence*100);
text(objects[i].label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke(r, g, b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }}
}