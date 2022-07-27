function Enemy (x, y) {
    this.x = x
    this.y = y
    this.width = 30
    this.height = 30
    this.maxspeed = 10;
    this.yspeed = 0;
    this.start = true;
    this.motion = false;
   


    this.step = function () {
    if (this.start) {
        if (this.motion == false) {
            this.yspeed = 5
            this.y += this.yspeed
            this.motion = true
        }
    if (this.y <= 120 && this.motion == true) {
        this.yspeed += 5
    } else if (this.y >= 500 && this.motion == true) {
        this.yspeed = -5
    }

    if (this.yspeed > this.maxspeed) {
        this.yspeed = this.maxspeed
    } else if (this.yspeed < -this.maxspeed) {
        this.yspeed = -this.maxspeed
    }
    
    if (this.yspeed > 0) {
        this.yspeed = Math.floor(this.yspeed) 
    } else {
        this.yspeed = Math.ceil(this.yspeed)
    }
    this.y += this.yspeed
    }
    this.draw = function () {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    
    let enemyRect = {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
    }
    let hRect = {
        x: player.x,
        y: player.y,
        width: player.width,
        height: player.height,
    }
    let vRect = {
        x: player.x,
        y: player.y,
        width: player.width,
        height: player.height,
    }
    if (checkIntersections(hRect, enemyRect)) {
        if (confirm("Game Over")) {
            document.location.reload()
            clearInterval(gameLoop)
            }
        }
    }
}
function Spikes (x, y) {
    this.x = x,
    this.y = y, 
    this.width = 500
    this.height = 2

    this.step = function () {
    this.draw = function () {
        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    let spikesRect = {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
    }
    let hRect = {
        x: player.x,
        y: player.y,
        width: player.width,
        height: player.height,
    }
    let vRect = {
        x: player.x,
        y: player.y,
        width: player.width,
        height: player.height,
    }
    if (checkIntersections(vRect, spikesRect)) {
        if (confirm("Game Over")) {
            document.location.reload()
            clearInterval(gameLoop)
            }
        }
    }
}
