function Particle(x, y) {
	this.x = x;
	this.y = y;
	// this.r = random(4, 32);

	this.update = function () {
		this.x += random(-10, 10);
		this.y += random(-10, 10);

		// this.x = constrain(this.x, 0, width);
		// this.y = constrain(this.y, 0, height);
	}

	this.show = function () {
		noStroke();
		// fill(255, 150); //this is the single pixel
		ellipse(this.x, this.y, 24, 24); // version
		var px = floor(this.x / vScale); //this now gets 
		var py = floor(this.y / vScale); //the x & y color values
		var col = video.get(px, py); //floor gets rid of decimal
		// console.log(col);
		fill(col[0], col[1], col[2], 150);
		// ellipse(this.x, this.y, this.r, this.r);
	}
}