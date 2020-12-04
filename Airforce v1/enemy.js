function Enemy(x,y){
    this.sprite = enemySprite;
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.enemiesHealth = 100;
    this.draw = function(){
       ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height)
    }
    this.move = function(){
        this.y += 3;
    }
    this.showHealth = function(){
        this.showHealth = function (){
            ctx.fillStyle="red";
            ctx.fillRect(this.x,this.y - 15 ,(this.enemiesHealth/100)*75,6);
            ctx.strokeRect(this.x, this.y-15, (100/100) * 75, 6);
        }
    }
    
    this.shoot = function(){
        let enemyb = new EnemyBullet(this.x + 26, this.y + 70,0, 5);
        let enemyb1 = new EnemyBullet(this.x + 26, this.y + 70,5, 5);
        let enemyb2 = new EnemyBullet(this.x + 26, this.y + 70,-5, 5);
        enemyBullets.push(enemyb,enemyb1,enemyb2);

    }
}