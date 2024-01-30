let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFDA1A';
tg.MainButton.color = '#0051BA';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");

btn1.addEventListener("click", function(){
	tg.MainButton.setText("Order Abujing ");
	item = "1";
	tg.MainButton.hide();
	delay(500);
	tg.MainButton.show();
	
});

btn2.addEventListener("click", function(){
	tg.MainButton.setText("Order Blahaj");
	item = "2";
	tg.MainButton.hide();
	delay(500);
	tg.MainButton.show();
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Order Fulltalig");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Order Adellovskog");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Order Fejka");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Order Kolbjorn");
		item = "6";
		tg.MainButton.show();
	}
});
btn7.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Order Visttijo");
		item = "7";
		tg.MainButton.show();
	}
});
btn8.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Order Kallax");
		item = "8";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

//p.innerText = `${tg.initDataUnsafe.user.first_name}
//${tg.initDataUnsafe.user.last_name}`;

//usercard.appendChild(p);








