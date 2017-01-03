/**
	Object Orientation in JS. Not very cool implementation
	because every instance of a shape created would carry
	around a individual move() or distanceFromOrigin().

	Best to use with Prototypes. See Proto-Inherit@OOP.js
*/

function Shape(){
	this.X = 0;
	this.Y = 0;

	this.move = function(x, y){
		this.X = x;
		this.Y = y;
	}

	this.distanceFromOrigin = function() {
		return Math.sqrt(this.X * this.X + this.Y * this.Y);
	}

}

var s = new Shape();
s.move(10, 10);
console.log(s.distanceFromOrigin());