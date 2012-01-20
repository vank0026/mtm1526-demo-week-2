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
	
	box.className = "box acive";	// classname allows for a class, and therefore to be messed about with in CSS
	
	document.body.appendChild(box); // appendChild is similar the addChild from AS3
	
	var randLeft = Math.round(Math.random() * (document.documentElement.clientWidth - box.offsetWidth));
	box.style.left = randLeft + "px";	// CSS always requires a unit, so we need to include the unit here.
	
	var randTop = Math.round(Math.random() * (document.documentElement.clientHeight - box.offsetHeight));
	box.style.top = randTop + "px";
	
};

var moveDown = function (ev){
	var newTop = box.offsetTop + 80;
	box.style.top = newTop + "px";
};

var moveUp = function (ev){
	var newTop = box.offsetTop - 80;
	box.style.top = newTop + "px";
};

var moveLeft = function (ev){
	var newLeft = box.offsetLeft - 80;
	box.style.left = newLeft + "px";
};

var moveRight = function (ev){
	var newLeft = box.offsetLeft + 80;
	box.style.left = newLeft + "px";
};


//	addEventLitener('event', function, false);

document.getElementById("create").addEventListener("click", createBox, false);

document.getElementById("down").addEventListener("click", moveDown, false);
document.getElementById("up").addEventListener("click", moveUp, false);
document.getElementById("left").addEventListener("click", moveLeft, false);
document.getElementById("right").addEventListener("click", moveRight, false);

document.documentElement.addEventListener("keydown", function(ev) {	// each key has a numeric code, as shown below

	switch (ev.keyCode) {
		case 38 :
			moveUp();
			break;
		case 40 :
			moveDown();
			break;
		case 37 :
			moveLeft();
			break;
		case 39 :
			moveRight();
			break;
		default:
			// default is for when any other key is touched, any other case which doesn't match
	}

}, false);

document.getElementById("color").addEventListener("change", function(ev) {	// the change thing is only when the user is done imputting
	// inside an event listener this refers to element that the listener is attached to
	console.log(this.value);
	
	//	ev.target refers to the thing that originally fired the event not necessarily the element the listenr is bound to
	console.log(ev.target.value);
	
	box.style.backgroundColor = this.value;//	javascript does camelcase, pay attention!
}, false);

var removeActiveClass = function(){
	var divs = document.getElementsByTagName("div");
	var totalDivs = divs.length;
	
	for (var i =0, i < totalDivs; i++){
		divs[i].className = "box;
	}
};

document.documentElement.addEventListener("click", function (ev) {
	if (ev.target.tagName == "DIV"){
		
		ev.target.className = "box active";
		box = ev.target;
		
	}
	console.log(ev.target);
	
}, false);