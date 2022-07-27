function Player (x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 100
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    this.maxspeed = 20;
    this.active = true;
    this.jump = false;

    this.step = function () {
        if (this.active) {
            if (!leftKey && !rightKey || leftKey && rightKey) {
                this.xspeed *= this.friction
            } else if (rightKey) {
                this.xspeed++
            } else if (leftKey) {
                this.xspeed--
            };
            if (upKey && !this.jump) {
                this.yspeed -= 20;
                this.jump = true;
            }
            this.yspeed +=1
            
        

            
            if (this.xspeed > this.maxspeed) {
                this.xspeed = this.maxspeed
            } else if (this.xspeed < -this.maxspeed) {
                this.xspeed = -this.maxspeed
            }
            if (this.yspeed > this.maxspeed) {
                this.yspeed = this.maxspeed
            } else if (this.yspeed < -this.maxspeed) {
                this.yspeed = -this.maxspeed
            }
            if (this.xspeed > 0) {
                this.xspeed = Math.floor(this.xspeed) 
            } else {
                this.xspeed = Math.ceil(this.xspeed)
            }
            if (this.yspeed > 0) {
                this.yspeed = Math.floor(this.yspeed) 
            } else {
                this.yspeed = Math.ceil(this.yspeed)
            }
            let hRect = {
                x: this.x + this.xspeed,
                y: this.y,
                width: this.width,
                height: this.height,
            }
            let vRect = {
                x: this.x,
                y: this.y + this.yspeed,
                width: this.width,
                height: this.height,
            }
            console.log(this.yspeed)

            for (let i = 0; i < borders.length; i++) {
                let bordersRect = {
                    x: borders[i].x,
                    y: borders[i].y,
                    width: borders[i].width,
                    height: borders[i].height,
                }
                if (checkIntersections(hRect, bordersRect)) {
                    while (checkIntersections(hRect, bordersRect)) {
                        hRect.x -= Math.sign(this.xspeed)
                    }
                    this.x = hRect.x;
                    this.xspeed = 0;
                }
                if (checkIntersections(vRect, bordersRect)) {
                    // while (checkIntersections(vRect, bordersRect)) {
                    //     vRect.y -= Math.sign(this.yspeed)
                    // }
                    this.y = hRect.y;
                    this.yspeed = 0;
                    this.jump = false;
                }
            }
            this.x += this.xspeed
            this.y += this.yspeed
        }
    }
    this.draw = function () {
        ctx.fillStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
