function collision(){
    for(var l = bullets.length - 1; l >= 0; l--){
        var b = bullets[l];
        var shouldDeleteBullet = false;

        for( var k = enemies.length - 1; k >= 0; k--){
            var e = enemies[k];
            if(b.x > e.x && b.x < e.x + e.imgWidth/4 && b.y > e.y && b.y < e.y + e.imgHeight/4 ){
                e.enemiesHealth -= 50;
                b.deletion();
                e.deletion();
                shouldDeleteBullet = true; // Flag for deletion
                break; // The bullet has been consumed, we can no longer use it.
            }
            else if(e.toDelete && e.enemiesHealth == 0){
                enemies.splice(k, 1);
                kills += 1;
            }
        }

        if (shouldDeleteBullet){
            bullets.splice(l, 1);
        }
    }
}