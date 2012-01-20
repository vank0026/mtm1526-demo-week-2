// JavaScript Document

/*
	3 ways to get an elements into HTML:
	document.getElementById()
	document.getElementsByClassName()
	document.getElementsByTagName()
	
	the camelcase is needed
*/

var box; // a holding var for the box that is created by createBox

var createBox = function (ev){
	box = document.createElement("div");	// makes a new empty html tag of whatever is in the quote, in this case div
	
		box.className = "box";	// classname allows for a class, and therefore to be messed about with in CSS
	
	document.body.appendChild(box); // appendChild is similar the addChild from AS3
	
	var randLeft = Math.round(Math.random() * (document.documentElement.clientWidth - box.offsetWidth));
	box.style.left = randLeft + "px";	// CSS always requires a unit, so we need to include the unit here.
	
	var randTop = Math.round(Math.random() * (document.documentElement.clientHeight - box.offsetHeight));
	box.style.top = randTop + "px";
};

var moveDown = function (ev){
	var newTop = box.offsetTop + 10;
	box.style.top = newTop + "px";
};

var moveUp = function (ev){
	var newTop = box.offsetTop - 10;
	box.style.top = newTop + "px";
};

var moveLeft = function (ev){
	var newLeft = box.offsetLeft - 10;
	box.style.left = newLeft + "px";
};

var moveRight = function (ev){
	var newLeft = box.offsetLeft + 10;
	box.style.left = newLeft + "px";
};


//	addEventLitener('event', function, false);

document.getElementById("create").addEventListener("click", createBox, false);

document.getElementById("down").addEventListener("click", moveDown, false);
document.getElementById("up").addEventListener("click", moveUp, false);
document.getElementById("left").addEventListener("click", moveLeft, false);
document.getElementById("right").addEventListener("click", moveRight, false);