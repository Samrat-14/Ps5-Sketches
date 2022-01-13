let time = 0;
let wave = [];

let slider;
let timeSlider;

var canvas;
function setup() {
    canvas = createCanvas(1000, 400);
    slider = document.getElementById("slider");
    timeSlider = document.getElementById("timeSlider");
}

function draw() {
    background(0);
    translate(200, 200);
    
    let x = 0;
    let y = 0;

    document.getElementById("sliderval").innerHTML = "Number of coefficients : " + slider.value;

    for (let i = 0; i < slider.value; i++) {
        let prevx = x;
        let prevy = y;

        let  n = 2 * i + 1;
        let radius = 60 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        
        stroke(101, 194, 163, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        
        stroke(101, 194, 163);
        line(prevx, prevy, x, y);
    }
    wave.unshift(y);

    translate(200, 0);
    stroke(115, 24, 103);
    line(x - 200, y, 0, wave[0]);
    
    stroke(255);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    time += timeSlider.value * 1;

    if(wave.length > 500) {
        wave.pop();
    }
}

new p5(canvas, "sketch");