var canvas;
var ctx;

var upKey;
var rightKey;
var downKey;
var leftKey;

var gameLoop;
var player;
var powerSmall;
var powerBig;
var enemy;
var spikes;
var level;
var borders = [];
var reset;
var start;

window.onload = () => {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d")
    player = new Player(50, 500)
    powerSmall = new PowerSmall(200, 200)  
    powerBig = new PowerBig(1000, 200)  
    enemy = new Enemy(800, 120)
    spikes = new Spikes(700, 629)
    level = new Level1()
        
    gameLoop = setInterval(step, 1000/30)

    setupInputs();

    reset = document.getElementById('reset')
    reset.addEventListener('click', function () {
        document.location.reload();
    })

}


let startGame = () => {
    start = document.getElementById("start");
    
}

function step () {
    player.step()
    enemy.step()
    powerSmall.step()
    powerBig.step()
    spikes.step()
    draw();
}

function draw () {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);
    player.draw()
    enemy.draw();
    powerSmall.draw()
    powerBig.draw()
    spikes.draw()
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