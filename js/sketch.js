// http://blog.livedoor.jp/reona396/archives/55747957.html

/**
 * はじめに一度だけ動く処理
 */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight); 
}

/**
 * 毎回動く処理
 */
function draw() {
  background(250, 250, 250);
  
  push();
  translate(width / 2, height / 2); // pushからpopの間で(0, 0)を画面の左上から真ん中に
  
  let d = 10;
  let num = 360;
  let t = 4;
  for (let i = 0; i < num; i++) {
    noStroke();
    if (i % 3 == 0) {
      fill(0, 0, 200);
      d = 10;
    } else {
      fill(0, 150, 200);
      d = 5;
    }
    let R = 150 * abs(sin(radians(i * t)));
    let x = R * cos(radians(i * 360 / num));
    let y = R * sin(radians(i * 360 / num));
    ellipse(x, y, d, d);
  }
  
  pop();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight); 
}