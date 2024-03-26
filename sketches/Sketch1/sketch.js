let canvas;
let heartParticles = [];
let x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  canvas = createCanvas(800, 600);
  strokeWeight(9);
  stroke(255, 100);
  background(0); // Set background color to black
}

function draw() {
  background(0);

  // Check if mouse is pressed to create heart particles
  if (mouseIsPressed) {
    let heart = new HeartParticle(mouseX, mouseY);
    heartParticles.push(heart);
  }

  // Update and display heart particles
  for (let i = heartParticles.length - 1; i >= 0; i--) {
    heartParticles[i].update();
    heartParticles[i].display();
    
    // Remove off-screen or faded particles
    if (heartParticles[i].isOffScreen() || heartParticles[i].opacity <= 0) {
      heartParticles.splice(i, 1);
    }
  }

}

class HeartParticle {
  constructor(x, y) {
    let neonColors = [
      color(255, 51, 51),
      color(255, 102, 102),
      color(255, 128, 128),
      color(255, 0, 179),
      color(255, 52, 179),
      color(255, 0, 255),
    ];
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 1.5));
    this.color = random(neonColors);
    this.size = random(5, 10);
    this.lifetime = random(5, 10);
    this.age = 0;
    this.opacity = random(150, 200);
  }

  update() {
    this.pos.add(this.vel);
    this.age++;
    if (this.age >= this.lifetime) {
      this.opacity -= 5;
    }
  }

  display() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.opacity);
    drawHeart(this.pos.x, this.pos.y, this.size);
  }

  isOffScreen() {
    return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height || this.age >= this.lifetime);
  }

  contains(x, y) {
    let d = dist(x, y, this.pos.x, this.pos.y);
    return (d < this.size / 2);
  }
}

// This function was referenced from the p5.js reference: https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y - size / 4);
  bezierVertex(x + size / 2, y - size / 2, x + size, y, x, y + size);
  bezierVertex(x - size, y, x - size / 2, y - size / 2, x, y - size / 4);
  endShape(CLOSE);
}


function keyPressed() {
  // Clear canvas when 'c' key is pressed
  if (key === 'c' || key === 'C') {
    clearCanvas();
  }
}

function clearCanvas() {
  // Clear the canvas by filling it with black color
  background(0);
  // Clear the array of heart particles
  heartParticles = [];
}
