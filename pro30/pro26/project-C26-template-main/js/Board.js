class Board{

constructor(x,y,width,height){
var options = {
    isStatic: true
};

this.body = Bodies.rectangle(x,y,width,height,options);
 
this.width = width;
this.height = height;
this.image = loadImage("./asserts/board.png");

world.add(world, this.body)
}
}


display() {

    for(var i =0;i<player)
    var pos = this.body.position;
    Push();
    imageMode(CENTRE);
    image(this.image,pos.x,pos.y,this.width,this.height);
    Pop();
}