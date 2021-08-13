# Unknown Pleasures

A rendition of Joy Division's "Unknown Pleasures" album cover.\
[Live site](https://unknown-pleasures-js.netlify.app/)

## Description

On this project, I generated random lines, inspired by the famous Joy Division album, "Unknown Pleasures".\
To achieve this, I created a canvas and added the lines with their appropriate base values and properties.\
I used two nested loops so each line of the cover could be drawn one right after the other.\
I added Math.random() in order for the lines to have small edges in random places throughtout.

![Basic lines](https://i.ibb.co/bKtZzW6/img0.png)

Then, I added two functions which generate random values for the line properties. However, this wasn't enough to achieve the effect, so I added the Probability Density Function formula, which made possible for the lines to be randomly curved.

![Probability Density Function](https://i.ibb.co/jJYNfgg/pdf.png)

The PDF formula converted to JavaScript:

```
function normalPDF(x, mu, sigma) {
  let sigma2 = Math.pow(sigma, 2);
  let numerator = Math.exp(-Math.pow(x - mu, 2) / (2 * sigma2));
  let denominator = Math.sqrt(2 * Math.PI * sigma2);
  return numerator / denominator;
}
```

![Curved lines](https://i.ibb.co/NTBLxL5/img1.png)

Right after, I used the CanvasRenderingContext method to make the lines smoother.

![Curves are smoother](https://i.ibb.co/N9Mt2j2/img2.png)

To make the image as similar as the cover, I added some random noise to the canvas, making the lines a lot sharper.\
To wrap up, I added some base values to the nested loop, in order for the edges to be sharper around the middle of the canvas.

![Sharp curves](https://i.ibb.co/BLFnYxN/img3.png)

I commented out the line which added random noise to the canvas, since I hard-coded the values for the lines later on.\
However, you can add the line of code again, since It gives off a glitchy feel to the canvas. Feel free to experiment with the values.

![Glitchy version](https://i.ibb.co/dKdttFD/img4.png)

After being finished, the final code generates lines which are pretty close to the original album cover.

![Final version](https://i.ibb.co/BnYqdP0/img5.png)

## Installation

- Download the project.
- Open the master folder.
- Initialize the project on the index file.
