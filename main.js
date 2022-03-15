// Snow assignment by Sami

let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of random Snow
let Snow = [];
snowFn(100);

requestAnimationFrame(draw);
function draw() {
    // Fill Canvas
    background("black");

    // Move & Draw All Snows
    for (let i = 0; i < Snow.length; i++) {
        moveSnow(Snow[i])
        drawSnow(Snow[i])
    }

    requestAnimationFrame(draw);
}

// Event stuff 
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { // Right Arrow - Add a new random Snow
        addSnow();
    } else if (event.keyCode === 37) {
        // Left Arrow - Remove the last Snow
        Snow.pop();

    }
}

function addSnow() {
    Snow.push(newRandomSnow());
}
