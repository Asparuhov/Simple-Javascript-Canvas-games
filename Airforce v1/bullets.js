function Bullet(x,y){
    this.sprite = bulletSprite
    this.x = x;
    this.y = y;
    this.speed = 11;
    this.radius = 8;
    this.width = 10;
    this.height = 10;
    this.draw = function(){
        ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height)
    }
    this.move = function(){
        this.y -= 5;
    }
}