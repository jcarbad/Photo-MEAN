/**
	Implementation of OOP in JS using Prototypes and
	Inheritance. Best way. 

	Have in mind that in ES6
	there are 'class' objects. Gotta dig deeper into
	ES6-class keyword.
*/

function Shape(){
	console.log("\t\tShape is created!\n");
}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;

Shape.prototype.move = function(x, y) {
	this.X = x;
	this.Y = y;
}

Shape.prototype.distanceFromOrigin = function() {
	return Math.sqrt(this.X * this.X + this.Y * this.Y);
}

Shape.prototype.area = function() {
	throw new Error("I don't have a form yet!");
}

var s = new Shape();
s.move(10, 10);
console.log(s.distanceFromOrigin());

//------- Inheritance

console.log("\tSquare extends Shape\n");
function Square()/*extends Shape*/ {
	console.log("\t\tSquare is created!\n");
}

Square.prototype = new Shape();
Square.prototype._proto_ = Shape.prototype; // Extension happens here!
Square.prototype.Width = 0;

Square.prototype.area = function(){
	return this.Width * this.Width;
}

var sq = new Square();
sq.move(-5, -5);
sq.Width = 5;
console.log(sq.area());
console.log(sq.distanceFromOrigin());

//-------------------------------------
console.log('\tRectangle extends Square\n');
function Rectangle() /*extends Square*/{
	console.log("\t\tRectangle is created!\n");
}

Rectangle.prototype = new Square();
Rectangle.prototype._proto_ = Square.prototype; // Extension happens here!
Rectangle.prototype.Height = 0;

Rectangle.prototype.area = function(){
	return this.Width * this.Height;
}

var re = new Rectangle();
re.move(25, 25);
re.Width = 10;
re.Height = 5;
console.log(re.area());
console.log(re.distanceFromOrigin());