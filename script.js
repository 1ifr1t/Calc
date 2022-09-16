//vars
let a = ""; //first num
let b = ""; //second num
let sign = ""; //sign of operation
let finish = false; //finish of enter

//querySelectors
let ac = document.querySelector(".ac");
let out = document.querySelector(".calc_screen p");
let plus = document.querySelector(".plus");
let equal = document.querySelector(".equal");
let minus = document.querySelector(".minus");
let multi= document.querySelector(".multiply");
let division = document.querySelector(".division");
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eigth = document.querySelector(".eigth");
let nine = document.querySelector(".nine");

//events
ac.addEventListener("click", () => { //clear all
	a = ""; //first num deleting
	b = ""; //second num deleting
	sign = ""; //sign of operation deleting
	out.textContent = "0"; //write on screen
	console.log("Calc cleared") //check
});

zero.addEventListener("click", () => {
	if(a == "") {
		a = "0";
		out.textContent = 0;
	}
	else if(a == "0") {
		return
	}
	else if(a !== "" && !finish) {
		a += "0";
		out.textContent += 0;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "0";
		out.textContent = 0;
	}
	else if(b == '' && finish) {
		b = "0";
		out.textContent = 0;
	}
	else if(finish && b !== "") {
		b +="0";
		out.textContent += 0;
	}
})

one.addEventListener("click", () => {
	if(a == "") {
		a = "1";
		out.textContent = 1;
	}
	else if(a == "0") {
		a = "1";
		out.textContent = 1;
	}
	else if(a !== "" && !finish) {
		a += "1";
		out.textContent += 1;
	}
	else if(a == "" && finish) {
		a = 0;
		b = "1";
		out.textContent = 1;
	}
	else if(b == '' && finish) {
		b = "1";
		out.textContent = 1;
	}
	else if(b == "0" && finish) {
		b = "1";
		out.textContent = 1;
	}
	else if(finish && b !== "") {
		b +="1";
		out.textContent += 1;
	}
})

two.addEventListener("click", () => {
	if(a == "") {
		a = "2";
		out.textContent = 2;
	}
	else if(a == "0") {
		a = "2";
		out.textContent = 2;
	}
	else if(a !== "" && !finish) {
		a += "2";
		out.textContent += 2;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "2";
		out.textContent = 2;
	}
	else if(b == '' && finish) {
		b = "2";
		out.textContent = 2;
	}
	else if(b == "0" && finish) {
		b = "2";
		out.textContent = 2;
	}
	else if(finish && b !== "") {
		b +="2";
		out.textContent += 2;
	}
})

three.addEventListener("click", () => {
	if(a == "") {
		a = "3";
		out.textContent = 3;
	}
	else if(a == "0") {
		a = "3";
		out.textContent = 3;
	}
	else if(a !== "" && !finish) {
		a += "3";
		out.textContent += 3;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "3";
		out.textContent = 3;
	}
	else if(b == '' && finish) {
		b = "3";
		out.textContent = 3;
	}
	else if(b == "0" && finish) {
		b = "3";
		out.textContent = 3;
	}
	else if(finish && b !== "") {
		b +="3";
		out.textContent += 3;
	}
})

four.addEventListener("click", () => {
	if(a == "") {
		a = "4";
		out.textContent = 4;
	}
	else if(a == "0") {
		a = "4";
		out.textContent = 4;
	}
	else if(a !== "" && !finish) {
		a += "4";
		out.textContent += 4;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "4";
		out.textContent = 4;
	}
	else if(b == '' && finish) {
		b = "4";
		out.textContent = 4;
	}
	else if(b == "0" && finish) {
		b = "4";
		out.textContent = 4;
	}
	else if(finish && b !== "") {
		b +="4";
		out.textContent += 4;
	}
})

five.addEventListener("click", () => {
	if(a == "") {
		a = "5";
		out.textContent = 5;
	}
	else if(a == "0") {
		a = "5";
		out.textContent = 5;
	}
	else if(a !== "" && !finish) {
		a += "5";
		out.textContent += 5;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "5";
		out.textContent = 5;
	}
	else if(b == '' && finish) {
		b = "5";
		out.textContent = 5;
	}
	else if(b == "0" && finish) {
		b = "5";
		out.textContent = 5;
	}
	else if(finish && b !== "") {
		b +="5";
		out.textContent += 5;
	}
})

six.addEventListener("click", () => {
	if(a == "") {
		a = "6";
		out.textContent = 6;
	}
	else if(a == "0") {
		a = "6";
		out.textContent = 6;
	}
	else if(a !== "" && !finish) {
		a += "6";
		out.textContent += 6;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "6";
		out.textContent = 6;
	}
	else if(b == '' && finish) {
		b = "6";
		out.textContent = 6;
	}
	else if(b == "0" && finish) {
		b = "6";
		out.textContent = 6;
	}
	else if(finish && b !== "") {
		b +="6";
		out.textContent += 6;
	}
})

seven.addEventListener("click", () => {
	if(a == "") {
		a = "7";
		out.textContent = 7;
	}
	else if(a == "0") {
		a = "7";
		out.textContent = 7;
	}
	else if(a !== "" && !finish) {
		a += "7";
		out.textContent += 7;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "7";
		out.textContent = 7;
	}
	else if(b == '' && finish) {
		b = "7";
		out.textContent = 7;
	}
	else if(b == "0" && finish) {
		b = "7";
		out.textContent = 7;
	}
	else if(finish && b !== "") {
		b +="7";
		out.textContent += 7;
	}
})

eigth.addEventListener("click", () => {
	if(a == "") {
		a = "8";
		out.textContent = 8;
	}
	else if(a == "0") {
		a = "8";
		out.textContent = 8;
	}
	else if(a !== "" && !finish) {
		a += "8";
		out.textContent += 8;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "8";
		out.textContent = 8;
	}
	else if(b == '' && finish) {
		b = "8";
		out.textContent = 8;
	}
	else if(b == "0" && finish) {
		b = "8";
		out.textContent = 8;
	}
	else if(finish && b !== "") {
		b +="8";
		out.textContent += 8;
	}
})

nine.addEventListener("click", () => {
	if(a == "") {
		a = "9";
		out.textContent = 9;
	}
	else if(a == "0") {
		a = "9";
		out.textContent = 9;
	}
	else if(a !== "" && !finish) {
		a += "9";
		out.textContent += 9;
	}
	else if(a == "" && finish) {
		a = "0";
		b = "9";
		out.textContent = 9;
	}
	else if(b == '' && finish) {
		b = "9";
		out.textContent = 9;
	}
	else if(b == "0" && finish) {
		b = "9";
		out.textContent = 9;
	}
	else if(finish && b !== "") {
		b +="9";
		out.textContent += 9;
	}
})

plus.addEventListener("click", () => {
	if(!finish) {
		sign = "+";
		finish = true;
		out.textContent = "+";
	}
	else if(finish && b !== "" && sign == "+") {
		a = String(Number(a)+Number(b));
		b = "";
		out.textContent = "+";
	}
	else if(finish && b !== "" && sign == "-") {
		a = String(Number(a)-Number(b));
		b = "";
		sign = "+";
		out.textContent = "+";
	}
	else if(finish && b !== "" && sign == "x") {
		a = String(Number(a)*Number(b));
		b = "";
		sign = "+";
		out.textContent = "+";
	}
	else if(finish && b !== "" && sign == "/") {
		if(b == "0") {
			out.textContent = "ERR";
			a = "";
			b = "";
			sign = "";
			finish = false;
		}
		else {
			a = String((Number(a)/Number(b)).toFixed(3));
			b = "";
			sign = "+";
			out.textContent = "+";
		}
	}
	else if(finish && b == "") {
		return;
	}
})

minus.addEventListener("click", () => {
	if(!finish) {
		sign = "-";
		finish = true;
		out.textContent = "-";
	}
	else if(finish && b !== "" && sign == "+") {
		a = String(Number(a)+Number(b));
		b = "";
		out.textContent = "-";
		sign = "-";
	}
	else if(finish && b !== "" && sign == "-") {
		a = String(Number(a)-Number(b));
		b = "";
		sign = "-";
		out.textContent = "-";
	}
	else if(finish && b !== "" && sign == "x") {
		a = String((Number(a)/Number(b)).toFixed(3));
		b = "";
		sign = "-";
		out.textContent = "-";
	}
	else if(finish && b !== "" && sign == "/") {
		if(b == "0") {
			out.textContent = "ERR";
			a = "";
			b = "";
			sign = "";
			finish = false;
		}
		else {
			a = String((Number(a)/Number(b)).toFixed(3));
			b = "";
			sign = "-";
			out.textContent = "-";
		}
	}
	else if(finish && b == "") {
		return;
	}
})

multi.addEventListener("click", () => {
	if(!finish) {
		sign = "x";
		finish = true;
		out.textContent = "x";
	}
	else if(finish && b !== "" && sign == "+") {
		a = String(Number(a)+Number(b));
		b = "";
		out.textContent = "x";
		sign = "x";
	}
	else if(finish && b !== "" && sign == "-") {
		a = String(Number(a)-Number(b));
		b = "";
		sign = "x";
		out.textContent = "x";
	}
	else if(finish && b !== "" && sign == "x") {
		a = String(Number(a)*Number(b));
		b = "";
		sign = "x";
		out.textContent = "x";
	}
	else if(finish && b !== "" && sign == "/") {
		if(b == "0") {
			out.textContent = "ERR";
			a = "";
			b = "";
			sign = "";
			finish = false;
		}
		else {
			a = String((Number(a)/Number(b)).toFixed(3));
			b = "";
			sign = "x";
			out.textContent = "x";
		}
	}
	else if(finish && b == "") {
		return;
	}
})

division.addEventListener("click", () => {
	if(!finish) {
		sign = "/";
		finish = true;
		out.textContent = "/";
	}
	else if(finish && b !== "" && sign == "+") {
		a = String(Number(a)+Number(b));
		b = "";
		out.textContent = "/";
		sign = "/";
	}
	else if(finish && b !== "" && sign == "-") {
		a = String(Number(a)-Number(b));
		b = "";
		sign = "/";
		out.textContent = "/";
	}
	else if(finish && b !== "" && sign == "x") {
		a = String(Number(a)*Number(b));
		b = "";
		sign = "/";
		out.textContent = "/";
	}
	else if(finish && b !== "" && sign == "/") {
		if(b == "0") {
			out.textContent = "ERR";
			a = "";
			b = "";
			sign = "";
			finish = false;
		}
		else {
			a = String((Number(a)/Number(b)).toFixed(3));
			b = "";
			sign = "/";
			out.textContent = "/";
		}
	}
	else if(finish && b == "") {
		return;
	}
})

equal.addEventListener("click", () => {
	console.log(a, b, sign);
	if(sign == "+") {
		out.textContent = Number(a)+Number(b);
		a = "";
		b = "";
		sign = "";
		finish = false;
	}
	else if(sign == "-") {
		out.textContent = Number(a)-Number(b);
		a = "";
		b = "";
		sign = "";
		finish = false;
	}
	else if(sign == "x") {
		out.textContent = Number(a)*Number(b);
		a = "";
		b = "";
		sign = "";
		finish = false;
	}
	else if(sign == "/") {
		console.log(Number(a)/Number(b));
		console.log(Number(a));
		console.log(Number(b));
		if(b == "0") {
			out.textContent = "ERR";
			a = "";
			b = "";
			sign = "";
			finish = false;
		}
		else {
			out.textContent = (Number(a)/Number(b)).toFixed(3);
			a = "";
			b = "";
			sign = "";
			finish = false;
		}
	}
})