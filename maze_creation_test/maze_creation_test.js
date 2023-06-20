
        
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
}

function generate_maze() {
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 3; y++) {
            horizontal[x][y + 1] = Math.round(Math.random());
            vertical[x][y + 1] = Math.round(Math.random());
        }
    }
}

/* layout

horizontal: {
     top    bottom
    {1, 0, 0, 0, 1}, left
    {1, 0, 0, 0, 1},
    {1, 0, 0, 0, 1},
    {1, 0, 0, 0, 1}  right
}

vertical: {
     left    right
    {1, 0, 0, 0, 1}, top
    {1, 0, 0, 0, 1},
    {1, 0, 0, 0, 1},
    {1, 0, 0, 0, 1}  bottom
}
*/