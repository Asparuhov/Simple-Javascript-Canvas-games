function collision() {
    for (var x = bullets.length - 1; x >= 0; x--) {
        var b = bullets[x];
        var shouldDeleteBullet = false;
        for (var s = enemies.length - 1; s >= 0; s--) {
            var e = enemies[s];
            if (b.x > e.x && b.x < e.x + e.frameWidth && b.y > e.y && b.y < e.y + e.frameHeight) {
                e.enemiesHealth -= 20;
                shouldDeleteBullet = true; 
                break;
            }
            if (e.enemiesHealth < 1) { 
                enemies.splice(s, 1);
                kills += 1;
            }
        }
    }
    if (shouldDeleteBullet) {
        bullets.splice(x, 1);
    }
}

function collision2() {
    for (var u = 0; u < enemyBullets.length; u++) {
        var en = enemyBullets[u];
        var bulletDeletion = false;
        if (en.x1 > hero.x && en.x1 < hero.x + hero.frameWidth && en.y1 > hero.y && en.y1 < hero.y + hero.frameHeight) {
            hero.health -= 5;
            bulletDeletion = true;
        }
        if (hero.health <= 0) {
            alert("GAME OVER");
        }
        if (bulletDeletion) {
            enemyBullets.splice(u, 1);
        }
    }
}
