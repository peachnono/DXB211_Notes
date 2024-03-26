let particles = [];
const gravity = 0.5; // Gravity value

function setup() {
  createCanvas(windowHeight, windowWidth);
}

function draw() {
  //background(0);

  // Draw and update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // Remove particles that have reached their lifetime or bottom of canvas
    if (particles[i].isDead() || particles[i].reachedBottom()) {
      particles.splice(i, 1);
    }
  }
}

function mouseDragged() {
  let p = new HeartParticle(mouseX, mouseY);
  particles.push(p);
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
    this.lifetime = random(60, 180); // Lifetime in frames (assuming 60fps)
    this.age = 0;
    this.opacity = random(150, 200);
  }

  update() {
    this.vel.y += gravity; // Apply gravity
    this.pos.add(this.vel);
    this.age++;
  }

  display() {
    fill(red(this.color), green(this.color), blue(this.color), this.opacity);
    noStroke();
    heart(this.pos.x, this.pos.y, this.size);
  }

  isDead() {
    return this.age >= this.lifetime;
  }

  reachedBottom() {
    return this.pos.y + this.size / 2 >= height;
  }
}

// Referenced from https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
function heart(x, y, size) {
  beginShape();
  vertex(x, y - size / 8);
  bezierVertex(x + size / 2, y - size / 2, x + size, y, x, y + size);
  bezierVertex(x - size, y, x - size / 2, y - size / 2, x, y - size / 8);
  endShape(CLOSE);
}

function keyPressed() {
  // Clear canvas when 'x','c','d' key is pressed
  if (key === 'x' || key === 'X' || 
      key === 'c' || key === 'C' || 
      key === 'd' || key === 'D'  ) {
    clearCanvas();
  }
}

function clearCanvas() {
  // Clear the canvas by filling it with black color
  background(0);
  // Clear the array of heart particles
  heartParticles = [];
}
