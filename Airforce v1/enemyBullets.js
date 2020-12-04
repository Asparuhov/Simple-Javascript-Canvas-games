function EnemyBullet(x,y,mX,mY){
    this.sprite = enemyBulletSprite
    this.x = x;
    this.y = y;
    this.speed = 11;
    this.width = 15;
    this.height = 15;
    this.mX = mX;
    this.mY = mY;
    this.draw = function(){
        ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height)
    }
    this.move = function(){
        this.x = this.x + mX;
        this.y = this.y + mY;
     }
}