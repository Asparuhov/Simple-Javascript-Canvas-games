function formation1(){
    while(enemies.length < enemiesPerTick){
    let enemy = new Enemy(random(0,canvas.width - 50), 0);
    enemies.push(enemy);
    }
}

