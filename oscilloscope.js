const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

let freq = 5;
let amp = 80;

document.getElementById("freq").oninput = e => freq = e.target.value;
document.getElementById("amp").oninput = e => amp = e.target.value;

function drawGrid() {
    ctx.strokeStyle = "rgba(0,255,0,0.2)";
    ctx.lineWidth = 1;

    for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function drawSignal() {
    ctx.strokeStyle = "#0f0";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
        let t = x / canvas.width;
        let y = canvas.height/2 + Math.sin(t * freq * Math.PI * 2) * amp;
        ctx.lineTo(x, y);
    }

    ctx.stroke();
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawSignal();
    requestAnimationFrame(loop);
}

loop();
