class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");//load image in the constructor
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();//refer the baseclass
  }
}
