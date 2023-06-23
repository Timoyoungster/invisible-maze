function setup() {
  createCanvas(400, 400);
  
  horizontal = [
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1]
  ];
  
  vertical = [
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1]
  ];
  
  generate_maze();
}

function draw() {
  background(0);
  stroke(0, 255, 255);
  strokeWeight(8);
  for (var x = 0; x < 4;  x++) {
    for (var y =0; y < 5; y++) {
      if (horizontal[x][y] === 1) {
      line(x * 100, y * 100, x * 100 + 100, y * 100);
      }
      if (vertical[x][y] === 1) {
      line(y * 100, x * 100, y * 100, x * 100 + 100);
      }
    }
  }
  noLoop();
}

function generate_maze() {
  //c_random();
  //c_fromBytes();
  //c_same();
  c_same_with_flip(true);
  //c_same_always_flip(true);
  redraw();
}

function c_same_always_flip(sliced_gen) {
  let num;
  let bits = "";
  if (sliced_gen) {
    for (var i = 0; i < 4; i++) {
      num = getRandomInt(16, 31);
      bits += (num).toString(2);
    }
  }
  else {
    num = getRandomInt(524288, 1048575);
    bits = (num).toString(2);
  }
  
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 5; y++) {
      var bit = parseInt(bits[x * 5 + y]);
      if (y === 0 || y === 4) {
        bit = 1
      }
      horizontal[x][y] = bit;
      if (!(y === 0 || y === 4)) {
        bit = 1 - bit;
      }

      vertical[x][y] = bit;
    }
  }
}

function c_same_with_flip(sliced_gen) {
  let num;
  let bits = "";
  if (sliced_gen) {
    for (var i = 0; i < 4; i++) {
      num = getRandomInt(16, 31);
      bits += (num).toString(2);
    }
  }
  else {
    num = getRandomInt(524288, 1048575);
    bits = (num).toString(2);
  }
  
  for (var x = 0; x < 4; x++) {
    let flip = getRandomInt(1,3);
    for (var y = 0; y < 5; y++) {
      var bit = parseInt(bits[x * 5 + y]);
      if (y === 0 || y === 4) {
        bit = 1
      }
      horizontal[x][y] = bit;
      if (flip === y && !(y === 0 || y === 4)) {
        bit = 1 - bit;
      }
      vertical[x][y] = bit;
    }
  }
}

function c_same() {
  let num = getRandomInt(524288, 1048575);
  let bits = (num).toString(2);
  
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 5; y++) {
      var bit = parseInt(bits[x * 5 + y]);
      if (y === 0 || y === 4) {
        bit = 1
      }
      horizontal[x][y] = bit;
      vertical[x][y] = bit;
    }
  }
}

function c_fromBytes() {
  let prevh = 0;
  let prevv = 0;
  for (var x = 0; x < 4; x++) {
    let numh = 2 * getRandomInt(8, 15) + 1;
    let numv = 2 * getRandomInt(8, 15) + 1;
    while (numh % prevh === 0) {
      numh = 2 * getRandomInt(8, 15) + 1;
    }
    while (numv % prevh === 0) {
      numv = 2 * getRandomInt(8, 15) + 1;
    }
    let h = (numh).toString(2);
    let v = (numv).toString(2);
    for (var y = 0; y < 5; y++) {
      horizontal[x][y] = parseInt(h[y]);
      vertical[x][y] = parseInt(v[y]);
    }
    prevh = numh;
    prevv = numv;
  }
}

function c_random() {
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 3; y++) {
      horizontal[x][y + 1] = Math.round(Math.random());
      vertical[x][y + 1] = Math.round(Math.random());
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* layout

horizontal: {
   top  bottom
  {1, 0, 0, 0, 1}, left
  {1, 0, 0, 0, 1},
  {1, 0, 0, 0, 1},
  {1, 0, 0, 0, 1}  right
}

vertical: {
   left  right
  {1, 0, 0, 0, 1}, top
  {1, 0, 0, 0, 1},
  {1, 0, 0, 0, 1},
  {1, 0, 0, 0, 1}  bottom
}
*/
