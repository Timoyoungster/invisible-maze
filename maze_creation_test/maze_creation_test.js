
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
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