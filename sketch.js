function makeArr2D(rows, cols) {
  let arr = new Array(cols);
  for(let i = 0 ; i < arr.length ; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let canvasHeight = 800;
let canvasWidth = 800;

let grid;
let rows;
let cols;
let reso = 20;

function setup() {
  rows = canvasHeight / reso;
  cols = canvasWidth / reso;
  grid = makeArr2D(rows, cols);
  createCanvas(canvasWidth,canvasHeight);
  for(let i = 0; i < cols ; i++) {
    for(let j = 0; j < rows ; j++) {
      grid[i][j] = floor(random(2))
    }
  }
  print(grid)
}

function draw() {
  background(12);
  for(let i = 0; i < cols ; i++) {
    for(let j = 0; j < rows ; j++) {
      if(grid[i][j] == 1) {
        fill(255);
        let x = i * reso;
        let y = j * reso;
        rect(x,y,reso,reso);
      }
    }
  }
}
