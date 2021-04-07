var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1 = createSprite(290,600,190,50);
   surface2 = createSprite(90,600,190,50);
   surface3 = createSprite(490,600,190,50);
   surface4 = createSprite(705,600,220,50);
    //create box sprite and give velocity
   box = createSprite(400,400,50,50);
   box.velocityX=-5;
   box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box




    drawSprites();
}
