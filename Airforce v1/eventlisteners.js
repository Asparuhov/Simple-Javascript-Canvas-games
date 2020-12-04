function keyDown(e){
    if(e.key == 'ArrowRight'){
        rightPressed = true;
        console.log('event listening');
    }
    else if (e.key == 'ArrowLeft'){
        leftPressed = true;
    }
    else if(e.key == 'c'){
        cPressed = true;
        let bullet = new Bullet(ship.x + 53, ship.y);
        bullets.push(bullet);
    }
}
function keyUp(e){
    if(e.key == 'ArrowRight'){
        rightPressed = false;
    }
    else if (e.key == 'ArrowLeft'){
        leftPressed = false;
    }
    else if(e.key == 'c'){
        cPressed = false;
    }
}