/*
let ds;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ds = new PenroseLSystem();
  //please, play around with the following line
  ds.simulate(5);
}

function draw() {
  background(230,230,230);
  ds.render();
}

function PenroseLSystem() {
    this.steps = 0;

   //these are axiom and rules for the penrose rhombus l-system
   //a reference would be cool, but I couldn't find a good one
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleW = "YF++ZF----XF[-YF----WF]++";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleY = "-WF++XF[+++YF++ZF]-";
    this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

    //please play around with the following two lines
    this.startLength = 460.0;
    this.theta = TWO_PI / 10.0; //36 degrees, try TWO_PI / 6.0, ...
    this.reset();
}

PenroseLSystem.prototype.simulate = function (gen) {
  while (this.getAge() < gen) {
    this.iterate(this.production);
  }
}

PenroseLSystem.prototype.reset = function () {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
  }

PenroseLSystem.prototype.getAge = function () {
    return this.generations;
  }

//apply substitution rules to create new iteration of production string
PenroseLSystem.prototype.iterate = function() {
    let newProduction = "";

    for(let i=0; i < this.production.length; ++i) {
      let step = this.production.charAt(i);
      //if current character is 'W', replace current character
      //by corresponding rule
      if (step == 'W') {
        newProduction = newProduction + this.ruleW;
      }
      else if (step == 'X') {
        newProduction = newProduction + this.ruleX;
      }
      else if (step == 'Y') {
        newProduction = newProduction + this.ruleY;
      }
      else if (step == 'Z') {
        newProduction = newProduction + this.ruleZ;
      }
      else {
        //drop all 'F' characters, don't touch other
        //characters (i.e. '+', '-', '[', ']'
        if (step != 'F') {
          newProduction = newProduction + step;
        }
      }
    }

    this.drawLength = this.drawLength * 0.5;
    this.generations++;
    this.production = newProduction;
}

//convert production string to a turtle graphic
PenroseLSystem.prototype.render = function () {
    translate(width / 2, height / 2);

    this.steps += 20;
    if(this.steps > this.production.length) {
      this.steps = this.production.length;
    }

    for(let i=0; i<this.steps; ++i) {
      let step = this.production.charAt(i);

      //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
      if( step == 'F') {
        stroke(26,26,26);
        for(let j=0; j < this.repeats; j++) {
          line(0, 0, 0, -this.drawLength);
          noFill();
          translate(0, -this.drawLength);
        }
        this.repeats = 1;
      }
      else if (step == '+') {
        rotate(this.theta);
      }
      else if (step == '-') {
        rotate(-this.theta);
      }
      else if (step == '[') {
        push();
      }
      else if (step == ']') {
        pop();
      }
    }
  }


*/

/*    Waves Circle
let r = 200;
let cont = 110;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(width / 2 + 10 * (noise(frameCount * 0.01) - 0.6), height / 2 + 10 * (noise(frameCount * 0.01 + 300) - 0.6));
  fill(0, 15);
  strokeWeight(0.22);

  beginShape();
  for (let i = 0; i <= PI; i += 0.01) {
    let x = r * cos(i) + cont * (noise(i + frameCount * 0.01) - 0.6);
    let y = r * sin(i) + cont * (noise(i + frameCount * 0.01) - 0.6);
    vertex(x, y);
  }
  endShape();

  beginShape();
  for (let i = 0; i <= PI; i += 0.001) {
    let x = r * cos(-i) + cont * (noise(i + frameCount * 0.01) - 0.6);
    let y = r * sin(-i) + cont * (noise(i + frameCount * 0.01) - 0.6);
    vertex(x, y);
  }
  endShape();

  stroke(255 - 50 * noise(frameCount * 0.01), 255, 255 + 100 * noise(frameCount * 0.01), 255);
}

*/
// by SamuelYAN
// more works //
// https://twitter.com/SamuelAnn0924
// https://www.instagram.com/samuel_yan_1990/

var seed = Math.random() * 1341;
var t;
var num, vNum;
var radius, mySize, margin;
var sizes = [];

let colors = [];
let colors0 = "281914-1a1a1a-202020-242e30".split("-").map((a) => "#" + a);
let colors7 = "fefefe-fffffb-fafdff-fef9fb-f7fcfe".split("-").map((a) => "#" + a);
let colors8 = "8c75ff-c553d2-2dfd60-2788f5-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
let colors11 = "025159-3E848C-7AB8BF-C4EEF2-A67458".split("-").map((a) => "#" + a);
let colors12 = "10454F-506266-818274-A3AB78-BDE038".split("-").map((a) => "#" + a);
let colors13 = "D96690-F28DB2-F2C9E0-89C2D9-88E8F2".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let v_planet = [];

function setup() {
	randomSeed(seed);
	frameRate(60);
	// pixelDensity(5);
	mySize = min(windowWidth, windowHeight);
	margin = mySize / 100;
	createCanvas(windowWidth, windowHeight);
	// createCanvas(mySize, mySize);
	color_setup1 = colors7;
	color_setup2 = random([colors8, colors11, colors8, colors12, colors8, colors13]);
	color_bg = random(color_setup1);
	colors[0] = str(random(colors7)) + "1a";
	colors[1] = str(random(color_setup2)) + "80";
	// background(color_bg);
	// num = 50;
	num = int(random(30, 10));
	radius = mySize * 0.75;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 0.5))
	}
	t = 0;
	// let filter1 = new makeFilter();
}

function draw() {
	randomSeed(seed);
	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i + t
		let x = radius * sin(a + t) / random(5, 2);
		let y = radius * cos(a + t) / random(2, 5);
		v_planet[i] = createVector(x, y);
	}
	push();
	// translate(random(width / 8 * 3, width / 8 * 5), random(height / 8 * 3, height / 8 * 5));
	translate(width / 2, height / 2);

	for (let j = 0; j < 2; j++) {

		drawingContext.shadowColor = "#ffffff80";
		drawingContext.shadowOffsetX = -1;
		drawingContext.shadowOffsetY = -1;
		drawingContext.shadowBlur = 0;
		drawingContext.shadowColor = "#2f2f2f40";
		drawingContext.shadowOffsetX = 1;
		drawingContext.shadowOffsetY = 1;
		drawingContext.shadowBlur = 0;
		rotate(random(TAU) / 1 * j + t);
		noFill();
		stroke(colors[j]);
		strokeWeight(random(0.2, 0.6));

		if (int(seed) % 2 == 0) {
			beginShape();
			curveVertex(v_planet[0].x, v_planet[0].y);
			for (let i = 0; i < num; i++) {
				let d = random(radius / 2, radius / 8);
				let x_plus = 0.2 * random(-d, d) / 1;
				let y_plus = 0.2 * random(-d, d) / 1;
				// square(v_planet[i].x + x_plus, v_planet[i].y - y_plus,2);
				curveVertex(v_planet[i].x + x_plus, v_planet[i].y - y_plus);
			}
			curveVertex(v_planet[num - 1].x, v_planet[num - 1].y);
			endShape(CLOSE);
		} else {
			beginShape();
			vertex(v_planet[0].x, v_planet[0].y);
			for (let i = 0; i < num; i++) {
				let d = random(radius / 2, radius / 8);
				let x_plus = 0.2 * random(-d, d) / 1;
				let y_plus = 0.2 * random(-d, d) / 1;
				vertex(v_planet[i].x + x_plus, v_planet[i].y - y_plus);
			}
			vertex(v_planet[num - 1].x, v_planet[num - 1].y);
			endShape(CLOSE);
		}

	}
	pop();
	
	t += 0.003 * 2;
	if (frameCount == 500) {
		strokeWeight(random(0.01, 0.05));
		stroke(str(random(colors)) + "1a");
		noFill();
		drawingContext.setLineDash([1, 1, 1, 1]);
		drawOverPattern();
		image(overAllTexture, 0, 0);
		// noLoop();
		noFill();
		stroke("#202020");
		// strokeWeight(margin);
		rect(0, 0, width, height);
		noLoop();
	}
}

function windowResized() {
	// Resize the canvas when the window is resized
	resizeCanvas(windowWidth, windowHeight);
  }

function drawOverPattern() {
	push();
	translate(width / 2, height / 2);
	rotate(-PI / 2);

	let s = mySize / 2 * sqrt(3) - 2;
	let n = 4;

	for (let theta = 0; theta < TWO_PI; theta += TWO_PI / 6) { // noprotect
		divideOP(0, 0, s * cos(theta), s * sin(theta), s * cos(theta + TWO_PI / 6), s * sin(theta + TWO_PI / 6), n);
	}
	pop();
}

function prop(x1, y1, x2, y2, k) {
	let x3 = (1 - k) * x1 + k * x2;
	let y3 = (1 - k) * y1 + k * y2;
	return [x3, y3];
}

function divideOP(x1, y1, x2, y2, x3, y3, n) {
	if (n > 1) {
		let [xA, yA] = prop(x1, y1, x2, y2, 1 / 3);
		let [xB, yB] = prop(x1, y1, x2, y2, 2 / 3);
		let [xC, yC] = prop(x2, y2, x3, y3, 1 / 3);
		let [xD, yD] = prop(x2, y2, x3, y3, 2 / 3);
		let [xE, yE] = prop(x3, y3, x1, y1, 1 / 3);
		let [xF, yF] = prop(x3, y3, x1, y1, 2 / 3);
		let [xG, yG] = prop(xF, yF, xC, yC, 1 / 2);
		divideOP(x1, y1, xA, yA, xF, yF, n - 1);
		divideOP(xA, yA, xB, yB, xG, yG, n - 1);
		divideOP(xB, yB, x2, y2, xC, yC, n - 1);
		divideOP(xG, yG, xF, yF, xA, yA, n - 1);
		divideOP(xC, yC, xG, yG, xB, yB, n - 1);
		divideOP(xF, yF, xG, yG, xE, yE, n - 1);
		divideOP(xG, yG, xC, yC, xD, yD, n - 1);
		divideOP(xD, yD, xE, yE, xG, yG, n - 1);
		divideOP(xE, yE, xD, yD, x3, y3, n - 1);
	} else {
		makeTriangle([x1, y1], [x2, y2], [x3, y3]);
	}
}

function makeTriangle(v1, v2, v3) {
	let points = shuffle([v1, v2, v3]);
	let [x1, y1] = points[0];
	let [x2, y2] = points[1];
	let [x3, y3] = points[2];
	let iStep = 1 / (pow(2, floor(random(4, 2))));
	for (let i = 0; i < 1; i += iStep) { // noprotect
		let [x4, y4] = prop(x1, y1, x2, y2, 1 - i);
		let [x5, y5] = prop(x1, y1, x3, y3, 1 - i);
		triangle(x1, y1, x4, y4, x5, y5);
	}
}

function makeFilter() {
	randomSeed(seed);
	// noiseのフィルターをつくる
	colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowColor = color(0, 0, 5, 5);
	overAllTexture = createGraphics(windowWidth, windowHeight);
	overAllTexture.loadPixels();
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			overAllTexture.set(
				i,
				j,
				color(0, 10, 70, noise(i / 3, j / 3, (i * j) / 50) * random(10, 25))
			);
		}
	}
	overAllTexture.updatePixels();
}


function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas("0516_Tulle_1.4_2022", "png");
	}
}

// by SamuelYAN
// more works //
// https://twitter.com/SamuelAnn0924
// https://www.instagram.com/samuel_yan_1990/