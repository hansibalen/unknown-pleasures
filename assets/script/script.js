//Render canvas properties
let canvas = document.getElementById("cover");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#191919";

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

let mx = (xMin + xMax) / 2;
ctx.strokeStyle = "white";

//Two nested loops to iterate each line of the cover one by one
for (let i = 0; i < nLines; i++) {
  ctx.beginPath();
  let nModes = randInt(1, 4);
  // Generate random parameters for the line's normal distribution
  let mus = [];
  let sigmas = [];
  for (let j = 0; j < nModes; j++) {
    mus[j] = rand(mx - 50, mx + 50);
    sigmas[j] = randNormal(24, 30);
  }
  let w = y;
  for (let k = 0; k < nPoints; k++) {
    x = x + dx;
    let noise = 0;
    for (let l = 0; l < nModes; l++) {
      noise += normalPDF(x, mus[l], sigmas[l]);
    }
    //You can add the line commented below for a glitchy look
    // ctx.lineTo(x, y - 1000 * noise);

    //Adjust wave lines similar to the album cover
    let yy = 0.3 * w + 0.7 * (y - 600 * noise + noise * Math.random() * 200 + Math.random());
    ctx.lineTo(x, yy);
    w = yy;
  }
  //Cover pixels of previous line
  ctx.fill();
  //Draw current line
  ctx.stroke();
  //Move to next line
  x = xMin;
  y = y + dy;
  ctx.moveTo(x, y);
}

ctx.lineWidth = 1.2;
ctx.strokeStyle = "white";
ctx.stroke();

//Generate random values
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randNormal(mu, sigma) {
  let sum = 0;
  for (let i = 0; i < 6; i += 1) {
    sum += rand(-1, 1);
  }
  let norm = sum / 6;
  return mu + sigma * norm;
}

//Propability Density Formula function
function normalPDF(x, mu, sigma) {
  let sigma2 = Math.pow(sigma, 2);
  let numerator = Math.exp(-Math.pow(x - mu, 2) / (2 * sigma2));
  let denominator = Math.sqrt(2 * Math.PI * sigma2);
  return numerator / denominator;
}
