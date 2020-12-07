function collision() {
    for (var l = bullets.length - 1; l >= 0; l--) {
        var b = bullets[l];
        var shouldDeleteBullet = false;
        for (var k = enemies.length - 1; k >= 0; k--) {
            var e = enemies[k];
            if (b.x > e.x && b.x < e.x + e.frameWidth && b.y > e.y && b.y < e.y + e.frameHeight) {
                e.enemiesHealth -= 50;
                e.bosshealth -= 50;
            }
                else if (e.x < hero.x + hero.frameWidth &&
                    e.x + e.frameWidth > hero.x &&
                    e.y < hero.y + hero.frameHeight &&
                    e + e.frameHeight > hero.y) {
                     hero.health = 0;
                     alert("GAME OVER");
                 }
                if (e.enemiesHealth < 1) { // This will allow a greater variety of damage eventually
                    enemies.splice(k, 1);
                    kills += 1;
                }

                shouldDeleteBullet = true; // Flag for deletion
                break; // The bullet has been consumed, we can no longer use it.
            }
        }
        if (shouldDeleteBullet) {
            bullets.splice(l, 1);
        }
        if(enemies.length == 0){
            enemies.push(boss1);
            for(var i = 0; i < enemies.length; i++){
                enemies[i].show();
                enemies[i].showHealth();
                enemies[i].move();
            }
        
        }
    }
