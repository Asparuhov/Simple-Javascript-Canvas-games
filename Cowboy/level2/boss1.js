function Boss1(x, y) {
    this.sprite = boss1Sprite;
    this.x = x;
    this.y = y;
    this.imgWidth = 160;
    this.imgHeight = 224;
    this.frameWidth = this.imgWidth / 4;
    this.frameHeight = this.imgHeight / 4;
    this.bosshealth = 1500;
    this.directionMode = 2;
    this.currentFrame = 0;
    this.SPEED = 3;
    this.delta = 1;
    this.faceLeft;
    this.faceRight;
    this.updateFrame = function () {
        this.currentFrame += 0.2;
    }
    this.showHealth = function (){
        ctx.fillStyle="red";
        ctx.fillRect(this.x,this.y - 10,(this.bosshealth/100)*3.3,5);
        ctx.strokeRect(this.x, this.y-10, (100/100) * 50, 5);
    }
    this.show = function () {
        if(faceLeft == true){
            this.directionMode = 1;
        }
        else if (faceRight == true){
            this.directionMode = 2;
        }
        this.updateFrame();
        this.walkingMode = Math.floor(this.currentFrame) % 4;
        ctx.drawImage(this.sprite, this.walkingMode * this.frameWidth, this.directionMode * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
    }
    //target == hero
    //position == this
    this.move = function () {
        this.dx = hero.x - this.x;
        this.dy = hero.y - this.y;
        this.length = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        if (this.length) {
            this.dx = this.dx / this.length;
            this.dy = this.dy / this.length;
        }
        this.x += this.dx * this.delta * this.SPEED;
        this.y += this.dy * this.delta * this.SPEED;
        if(this.x < hero.x){
            faceLeft = false;
            faceRight = true;
        }
        else if(this.x > hero.x){
            faceLeft = true;
            faceRight = false;
        }
    }
}