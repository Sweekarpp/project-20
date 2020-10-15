var wall,car;

var speed,weight,deformation;

function setup() {
createCanvas(1600,400);
speed = random(30,128);
weight = random(500,2500);
deformation = 0.5 * weight * speed * speed / 22500;
wall = createSprite(width-20, 200, 10, height/2);
car = createSprite(0,200,50,50);
car.velocityX = speed;

}

function draw() {
background(0,0,0);
car.collide(wall);
if(deformation < 100){
    car.shapecolor = "green";    
    }else if(deformation > 100 && deformation < 180){
    car.shapecolor = "orange";
    }else if(deformation > 180){
    car .shapecolor = "red";    
    }
drawSprites();
}