function PowerSmall (x, y) {
    this.x = x,
    this.y = y,
    this.radius = 20,

    this.step = function() {
        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
            ctx.fillStyle = 'green'
            ctx.fill();
        }
    }
}
function PowerBig (x, y) {
    this.x = x,
    this.y = y,
    this.radius = 20,

    this.step = function() {
        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
            ctx.fillStyle = 'yellow'
            ctx.fill();
        }
    }
}