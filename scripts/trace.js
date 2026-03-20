const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function traceImage() {
  try {
    const image = await Jimp.read('public/profile2.png');
    // Resize to keep the SVG smaller and the lines thick enough
    image.resize(400, Jimp.AUTO);
    image.greyscale();

    // Sobel edge detection kernel
    const kernel = [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1]
    ];

    image.convolute(kernel);

    // Potrace traces black. We want the edges (currently white) to be traced as black,
    // so we invert the image. Edges become black, background becomes white.
    image.invert();

    // Let's add a bit of contrast/brightness adjustments to clean up noise
    image.contrast(0.5);

    // Trace the resulting edges
    potrace.trace(image.bitmap, {
      threshold: 120,
      turdSize: 10,     // remove small artifacts
      optTolerance: 0.4
    }, (err, svg) => {
      if (err) throw err;

      // Clean up the SVG to use stroke instead of fill for Framer Motion!
      // Potrace outputs filled regions. We can just tell Framer Motion to animate it anyway, 
      // or we can convert fills to strokes, but animating the fill-opacity or just animating pathLength
      // on filled paths also works! Wait, if it has `fill="currentColor"`, it's a solid shape.
      // Actually, potrace generates filled `<path>`. If we set `fill="none"` and `stroke="currentColor"`, 
      // the outlines of the lines will be drawn! This looks super cool (like a double-line).

      fs.writeFileSync('public/profile-lines.svg', svg);
      console.log('Successfully generated public/profile-lines.svg');
    });
  } catch (e) {
    console.error(e);
  }
}

traceImage();
