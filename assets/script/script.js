//Render canvas properties
let canvas = document.getElementById("cover");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let xMin = 140;
let xMax = canvas.width - xMin;
let yMin = 100;
let yMax = canvas.height - yMin;

//Add the lines, there are around 80 lines on the original album cover
let nLines = 80;
let nPoints = 100;

let dx = (xMax - xMin) / nPoints;
let dy = (yMax - yMin) / nLines;

let x = xMin;
let y = yMin;

//Two nested loops to iterate each line one by one
for (let i = 0; i < nLines; i++) {
  for (let j = 0; j < nPoints; j++) {
    x = x + dx;
    //This line adds random spikes to the lines
    ctx.lineTo(x, y + Math.random());
  }
  x = xMin;
  y = y + dy;
  ctx.moveTo(x, y);
}

ctx.lineWidth = 1.2;
ctx.strokeStyle = "white";
ctx.stroke();
