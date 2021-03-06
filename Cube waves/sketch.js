let angle = 0;
let w = 24;
let maxD;

var canvas;
function setup() {
    canvas = createCanvas(400, 400, WEBGL);
    maxD = dist(0, 0, 200, 200);
}

function draw() {
    background(200);
    ortho(-400, 400, -400, 400, 0, 1000);
    
    rotateX(-QUARTER_PI);
    rotateY(-QUARTER_PI);

    directionalLight(54, 216, 224, -1, 0.5, -1);
    directionalLight(217, 207, 11, -1, -0.5, -1);
    
    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
        push();
        let d = dist(x, z, width / 2, height / 2);
        let offset = map(d, 0, maxD, -PI*1.5, PI*1.5);
        let a = angle + offset;
        let h = floor(map(sin(a), -1, 1, 100, 300));
        translate(x - width / 2, 0, z - height / 2);
        ambientMaterial(255);
        noStroke();
        box(w, h, w);
        pop();
        }
    }
  
    angle -= 0.15;
}

new p5(canvas, "sketch");