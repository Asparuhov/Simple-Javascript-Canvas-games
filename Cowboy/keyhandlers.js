var cPressed = false;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
function keyDownHandler(e){
    if(e.key == "ArrowRight") {
        rightPressed = true;
        hero.directionMode = 2;
    }
    else if(e.key == "ArrowLeft") {
        leftPressed = true;
        hero.directionMode = 1;
    }
    if(e.key == "ArrowUp") {
        upPressed = true;
        hero.directionMode = 3;
    }
    else if(e.key == "ArrowDown") {
        downPressed = true;
        hero.directionMode = 0;
    }
    else if(e.key == "c") {
        var bullet = new Bullet(hero.x + 25, hero.y + 15);
        bullets.push(bullet);
    }
}
function keyUpHandler(e){
    if(e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "ArrowLeft") {
        leftPressed = false;
    }
    if(e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "ArrowDown") {
        downPressed = false;
    }
    else if(e.key == "c") {
        cPressed = false;
    }
}