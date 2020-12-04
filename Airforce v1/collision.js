function collision(){
    for(let i = bullets.length - 1; i >= 0; i--){
      let b = bullets[i];
      let shouldDeleteBullet = false;
      for(let j = enemies.length - 1;j >= 0; j--){
        let e = enemies[j];
        if(b.x < e.x + e.width && b.x + b.width > e.x && b.y < e.y + e.height && b.y + b.height > e.y){
          e.enemiesHealth -= 50;
          shouldDeleteBullet = true;
          break;
        }
        if(e.enemiesHealth < 1){
            enemies.splice(j, 1);
            kills += 1;
        }
      }
      if(shouldDeleteBullet){
      bullets.splice(i, 1);
    }
    }
}
  