// Turtle Movements
function drawTurtle(speed) {
	ctx.translate(speed,0);
	ctx.moveTo(0,0);
	ctx.drawImage(turtle,-(TURTLE_WIDTH/2), -(TURTLE_HEIGHT/2), TURTLE_WIDTH, TURTLE_HEIGHT);
}

function removeTurtle() {
	ctx.clearRect(-(TURTLE_WIDTH/2), -(TURTLE_HEIGHT/2), TURTLE_WIDTH, TURTLE_HEIGHT);
}

function rotateTurtle(a) {
	ctx.rotate((360-a)*(Math.PI/180));
	ctx.drawImage(turtle,-TURTLE_WIDTH/2,-TURTLE_HEIGHT/2, TURTLE_WIDTH, TURTLE_HEIGHT);
}

// Turtle Canvas Control
function resetCanvas() {
	ctx.translate(0,0);
	ctx.rotate(angle*(Math.PI/180));
	ctx.clearRect(0, 0, c.width, c.height);
}