function newRandomSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(2, 6),
        color: "white",
        speed: randomInt(1, 5)
    };
}

function snowFn(total) {
    for (let n = 1; n <= total; n++) {
        Snow.push(newRandomSnow());
    }
    return Snow;
}

function drawSnow(snow) {
    fill(snow.color);
    circle(snow.x, snow.y, snow.r, "fill");
}

function moveSnow(snow) {
    if (snow.y > cnv.height) {
        snow.y = 0;
        snow.x = randomInt(0, 800);
    }
    snow.y += snow.speed;
}

