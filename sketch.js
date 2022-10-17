

let img;

function preload() {
  img = loadImage('a/callese.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  img.resize(img.width/2, img.height/2);
//  image(img, 0, 0);
}

function draw() {
  image(img, mouseX, mouseY);
}

function mousePressed() {
  background(0);


}












  
  
  
  //the loop- always getting the current dynamic value of mouse x
//loop is always looping thats why random colours flash





/*let fx = map(mouseX, 0, windowWidth, 0, 225);

  let fy = map(mouseY,0, windowHeight,0, 225);
  fill(fy,0 ,fx);
  */