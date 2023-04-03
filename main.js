const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawLissajous(x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        const px = 100 * Math.sin(x * t);
        const py = 100 * Math.cos(y * t);
        const cx = canvas.width / 2 + px;
        const cy = canvas.height / 2 + py;
        ctx.lineTo(cx, cy);
    }
    ctx.stroke();
}

const xRange = document.getElementById("x");
const yRange = document.getElementById("y");

xRange.addEventListener("input", function () {
    const x = this.value;
    document.getElementById("x-value").innerText = x;
    const y = yRange.value;
    drawLissajous(x, y);
});

yRange.addEventListener("input", function () {
    const y = this.value;
    document.getElementById("y-value").innerText = y;
    const x = xRange.value;
    drawLissajous(x, y);
});

drawLissajous(xRange.value, yRange.value);

const xDecreaseButton = document.getElementById("x-decrease");
xDecreaseButton.addEventListener("click", function () {
    let x = Number(xRange.value) - 1;
    if (x < 1) x = 1;
    xRange.value = x;
    document.getElementById("x-value").innerText = x;
    const y = yRange.value;
    drawLissajous(x, y);
});

const xIncreaseButton = document.getElementById("x-increase");
xIncreaseButton.addEventListener("click", function () {
    let x = Number(xRange.value) + 1;
    if (x > 100) x = 100;
    xRange.value = x;
    document.getElementById("x-value").innerText = x;
    const y = yRange.value;
    drawLissajous(x, y);
});

const yDecreaseButton = document.getElementById("y-decrease");
yDecreaseButton.addEventListener("click", function () {
    let y = Number(yRange.value) - 1;
    if (y < 1) y = 1;
    yRange.value = y;
    document.getElementById("y-value").innerText = y;
    const x = xRange.value;
    drawLissajous(x, y);
});

const yIncreaseButton = document.getElementById("y-increase");
yIncreaseButton.addEventListener("click", function () {
    let y = Number(yRange.value) + 1;
    if (y > 100) y = 100;
    yRange.value = y;
    document.getElementById("y-value").innerText = y;
    const x = xRange.value;
    drawLissajous(x, y);
});

const downloadButton = document.getElementById("download");

downloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.download = "lissajous.png";
    link.href = canvas.toDataURL();
    link.click();
});
