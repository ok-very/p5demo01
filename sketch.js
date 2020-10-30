let x = 0;

// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Fill in the background
  background('black');
  frameRate(10);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw() {
  background(0, 0, 0, 40);

  x += 40;
  const y = height / 2;
  const diameter = min(width, height) * 0.5;
  
  noFill();
  stroke('white');
  
  const size = x / width;
  circle(x, y, diameter * size);
  if (x > width) {
    x = 0;
  }
  
}
