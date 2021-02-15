class Paper{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("pink");
			fill("white");
			ellipse(0,0,this.r, this.r);
			pop()
	}

}