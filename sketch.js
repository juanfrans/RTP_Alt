//Global variables
var canvasWidth = 1280;
var canvasHeight = 720;
//var mapStartX = -17018188;
//var mapStartY = 8750090;
//var mapEndX = 17595899;
//var mapEndY = -9020047;
var img;
var positionX;
var positionY;
//var firstProjection = "+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs";
var ellipseSize = 2;
var startX = 20;
var date = 50;

//Preload images and data
function preload(){
	//img = loadImage("data/World_Projected_Black.png");
	img = loadImage("data/World_Projected_Light.png")
	//img = loadImage("data/World_Projected_White.png")
	events = loadTable('data/ENSO_Data_01.csv');
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	colorMode(HSB, 360, 100, 100, 100);
	background(100);
	//var projectedCoord = [];
	//var newProjectedCoord = [];
	//console.log("done converting stuff");
}

function draw(){
	background(100);

	//Load map image
	image(img, 0, 0, 1280, (1280/img.width)*img.height);

	//Loop through the data points and plot the events
	for (var i = events.getRowCount() - 1; i >= 1; i--) {
		if(date == events.getColumn(5)[i] || date == events.getColumn(6)[i] || date == events.getColumn(7)[i] || date == events.getColumn(8)[i]){
			positionX = events.getColumn(3)[i];
			positionY = events.getColumn(4)[i];
			fill(35, 100, 100);
			noStroke();
			ellipse(positionX, positionY, 8, 8);
			stroke(35,100,100);
			strokeWeight(.75);
			line(positionX*1, positionY*1-5, positionX*1, positionY*1-35);
			line(positionX*1, positionY*1-35, positionX*1+125, positionY*1-35);
			noStroke();
			fill(30);
			textSize(10);
			text(events.getColumn(0)[i], positionX*1+7, positionY*1-38);
			textSize(8);
			text(events.getColumn(1)[i], positionX*1+7, positionY*1-38, 120, 100);
		}else{}
	}
	//Toggle Icons
	fill(0, 0, 80);
	noStroke();
	for(var i=0; i<5; i++){
		rect(startX+i*50, 25, 40, 20);
	}
}

function mousePressed(){
	if (mouseX > startX && mouseX < startX+40 && mouseY > 25 && mouseY < 45){
		date = 50;
		console.log(date);
	}
	if (mouseX > startX+50 && mouseX < startX+90 && mouseY > 25 && mouseY < 45){
		date = 1900;
		console.log(date);
	}
	if (mouseX > startX+100 && mouseX < startX+140 && mouseY > 25 && mouseY < 45){
		date = 70;
		console.log(date);
	}
	if (mouseX > startX+150 && mouseX < startX+190 && mouseY > 25 && mouseY < 45){
		date = 90;
		console.log(date);
	}
	if (mouseX > startX+200 && mouseX < startX+240 && mouseY > 25 && mouseY < 45){
		date = 20;
		console.log(date);
	}
}