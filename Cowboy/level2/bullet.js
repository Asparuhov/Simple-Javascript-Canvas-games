function Bullet(x, y){
    this.x = x;
    this.y = y;
    this.toDelete = false;
    this.show = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, Math.PI*2);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.closePath();
    }
    this.move = function(){
            this.x = this.x + 5;
    }
    this.deletion = function(){
        this.toDelete = true;
    }
}