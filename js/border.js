function Border (x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;

    this.draw = function () {
        if (this.type === 1) {
            ctx.fillStyle = 'black'
        } else if (this.type === 2) {
            ctx.fillStyle = 'red'
        }
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function Level1() {
    for (i = 0; i < 10; i++) {
        borders.push(new Border(0 + 50 * i, 700, 50, 15, 1))
    }
    for (i = 0; i < 4; i++) {
        borders.push(new Border(500 + 50 * i, 600, 50, 115, 1))
    }
    for (i = 0; i < 7; i++) {
        borders.push(new Border(0 + 50 * i, 350, 50, 15, 1))
    }
    for (i = 0; i < 2; i++) {
        borders.push(new Border(350 + i * 60, 365 + i * 60, 60, 60, 1))
    }

    //borders around play area
    for (i = 0; i < 72; i++) {
        borders.push(new Border(0, 0 + 10 * i, 5, 10, 2))
    }
    for (i = 0; i < 72; i++) {
        borders.push(new Border(1275, 0 + 10 * i, 5, 10, 2))
    }
    for (i = 0; i < 128; i++) {
        borders.push(new Border(0 + 10 * i, 0, 10, 5, 2))
    }
}
