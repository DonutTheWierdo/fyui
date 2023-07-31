function preload()
{

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
  
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    image(video, 230,150, 220, 200);
    fill(247, 202, 202);
    stroke(250, 202, 202);
    circle(50, 110, 40);
    circle(50, 380, 40);
    circle(540, 110, 40);
    circle(540, 380, 40);
    fill(255,0,0);
    stroke(255,0,0);
    rect(60, 100, 460,20);
    rect(60, 370, 460,20);
    rect(60, 100, 20,280);
    rect(510, 100,20,290);
}