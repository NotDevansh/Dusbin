class Paper
{
  constructor(x,y,r)
  {
    var opt  = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,r,opt);
    this.r=r;
    World.add(world,this.body);
    this.image = loadImage("paper.png");
  }
  display()
  {

    image(this.image, this.body.position.x,this.body.position.y , 70, 70 );
    } 
  }
