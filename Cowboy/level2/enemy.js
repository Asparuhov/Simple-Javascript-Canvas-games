function random(min, max) {
    return Math.random() * (max - min) + min;}
function Enemy(x, y){
    this.sprite = enemySprite;
    this.x = x;
    this.y = y;
    this.imgWidth = 128;
    this.imgHeight = 192;
    this.frameWidth = this.imgWidth / 4 ;
    this.frameHeight = this.imgHeight / 4;
    this.toDelete = false;
    this.dx = random(1, 3);
    this.enemiesHealth = 100;
    this.directionMode = 1;
    this.currentFrame = 0;
    this.updateFrame = function(){
        this.currentFrame += 0.2;
    }
    this.showHealth = function (){
        ctx.fillStyle="red";
        ctx.fillRect(this.x,this.y - 10,(this.enemiesHealth/100)*50,5);
        ctx.strokeRect(this.x, this.y-10, (100/100) * 50, 5);
    }
    this.show = function(){
        this.updateFrame();
        this.walkingMode = Math.floor(this.currentFrame) % 4;
        ctx.drawImage(this.sprite,this.walkingMode * this.frameWidth, this.directionMode * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight );
    }
    this.move = function(){
        this.x = this.x - this.dx;
    }
    this.deletion = function(){
        this.toDelete = true;
    }
}