var canvas;
var ctx;

var upKey;
var rightKey;
var downKey;
var leftKey;

var gameloop;
var player;
var borders = [];

window.onload = () => {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d")
    
    player = new Player(50, 500)

    for (i = 0; i < 10; i++) {
        borders.push(new Border(0 + 50 * i, 700, 50, 5, 1))
    }
    for (i = 0; i < 5; i++) {
        borders.push(new Border(500, 450 + 50 * i, 5, 50, 2))
    }

    gameLoop = setInterval(step, 1000/30)

    setupInputs();

}

function step () {
    player.step()
    draw();
}

function draw () {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);
    player.draw();
    for (let i = 0; i < borders.length; i++) {
        borders[i].draw();
    }
}

function setupInputs () {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'w' || event.key === 'ArrowUp') {
            upKey = true;
        } else if (event.key === 'd' || event.key === 'ArrowRight') {
            rightKey = true;
        } else if (event.key === 's' || event.key === 'ArrowDown') {
            downKey = true;
        } else if (event.key === 'a' || event.key === 'ArrowLeft') {
            leftKey = true;
        }
    })
    document.addEventListener('keyup', function(event) {
        if (event.key === 'w' || event.key === 'ArrowUp') {
            upKey = false;
        } else if (event.key === 'd' || event.key === 'ArrowRight') {
            rightKey = false;
        } else if (event.key === 's' || event.key === 'ArrowDown') {
            downKey = false;
        } else if (event.key === 'a' || event.key === 'ArrowLeft') {
            leftKey = false;
        }
    })
}

function checkIntersections (r1, r2) {
    if (r1.x >= r2.x + r2.width) {
        return false;
    } else if (r1.x + r1.width <= r2.x) {
        return false;
    } else if (r1.y >= r2.y + r2.height) {
        return false; 
    } else if (r1.y + r1.height <= r2.y) {
        return false;
    } else {
        return true;
    }
}