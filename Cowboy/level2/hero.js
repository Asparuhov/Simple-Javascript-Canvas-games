function Hero(){
    this.sprite = sprite;
    this.x = 0;
    this.y = canvas.height/2;
    this.imgWidth = 128;
    this.imgHeight = 192;
    this.frameWidth = this.imgWidth / 4;
    this.frameHeight = this.imgHeight / 4;
    this.dx = 4;
    this.dy = -4;
    this.health = 100;
    this.directionMode = 2;
    this.currentFrame = 0;
    this.updateFrame = function(){
        this.currentFrame += 0.2;
    }
    this.showHealth = function (){
            ctx.fillStyle="green";
            ctx.fillRect(this.x,this.y - 10,(this.health/100)*50,5);
            ctx.strokeRect(this.x, this.y-10, (100/100) * 50, 5);
    }
    this.show = function(){
        if(downPressed != true && upPressed != true && leftPressed != true && rightPressed != true){
            this.directionMode = 0;
            this.currentFrame = 0;
        }
        this.updateFrame();
        this.walkingMode = Math.floor(this.currentFrame) % 4;
        ctx.drawImage(this.sprite,this.walkingMode * this.frameWidth, this.directionMode * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight );
    }
    this.update = function(){
    if(rightPressed && this.x < canvas.width - this.imgWidth/4){
            this.x = this.x + this.dx;
        }
    if (leftPressed && this.x > 0 ){
            this.x = this.x - this.dx;
        }
    if (upPressed && this.y > 0 ){
            this.y = this.y + this.dy;
        }
    if (downPressed && this.y < canvas.height - this.imgHeight/4){
            this.y = this.y - this.dy;
        }
    }
}