function work1 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = in_b.value;
	var C = B.split(" ");
	var b = C.length-1;
	if ((A<0) || (A>(C.length-1))) {
		div_out.innerHTML = "Число А должно быть в интервале [0, " + b + "]";
	} 
	else {
		var result = C[A]; 
		div_out.innerHTML = result;
	}
}
function work2 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var r = "";
	for (i = 0; i<(B.length); i++) {
		r = r + B[i] + " " + i + "<br>";
	}
	div_out.innerHTML = r;
}
function work3 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var r = "";
	for (var i = (B.length-1); i>=0; i--) {
		r = r + B[i] + "&nbsp;";
	}
	div_out.innerHTML = r;
}
function work4 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var C = in_c.value;
	var maxValue = Math.max(A,B);
	var minValue = Math.min(A,B);
	var D = C.split(" ");
	var r = "";
	var m = D.length-1;
	if (A<0 || A>D.length) {
		div_out.innerHTML = "Число B должно быть в инетервале [0, " + m +"]";
		return;
	}
	if (B<0 || B>D.length) {
		div_out.innerHTML = "Число E должно быть в инетервале [0, " + m + "]";
		return;
	}
	for (var i = 0; i<=(D.length); i++) {
		if (i>=minValue && i<=maxValue) {
			r = r + D[i] + " ";
		}
		else {
			r = r + "";
		}
	} 
	div_out.innerHTML = r;
}
function work5 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var C = in_c.value;
	var D = C.split(" ");
	var r1 = "";
	var r2 = "";
	var r3 = "";
	if (A<0 || A>D.length) {
		div_out.innerHTML = "Число P должно быть в инетервале [0, " + D.length + "]";
		return;
	}
	if (B<0 || B>D.length) {
		div_out.innerHTML = "Число Q должно быть в инетервале [0, " + D.length + "]";
		return;
	}
	for (var i = 0; i<=D.length; i++) {
		if (i>=0 && i<A) {
			r1 = r1 + D[i] + "&nbsp;";
		}
		if (i>A && i<B) {
			r2 = r2 + D[i] + "&nbsp;";
		}
		if (i>B && i<D.length) {
			r3 = r3 + D[i] + "&nbsp;"
		}
	}
	div_out.innerHTML = r1 + D[B] + "&nbsp;" + r2 + D[A] + "&nbsp;" + r3;
}
function work5_1 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var C = in_c.value;
	var D = C.split(" ");
	var t = D[A];
	D[A] = D[B];
	D[B] = t;
	div_out.innerHTML = D.join(" ");
}
function work6 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");	
	var A = in_a.value;
	var B = A.split(" ");
	var c = B.length;
	var r = "";
	var t = B[(c-1)]
	for (var i = (c-1); i>=0; i--) {
		B[i] = B[i-1];
	}
	B[0] = t
	div_out.innerHTML = B.join(" ");
}
function work7 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = in_b.value;
	var C = B.split(" "); 	
	var r = "";
	var r1 = "";
	var D;
	if (A>0) {
		if (Math.abs(A)>=C.length){
		A = A%C.length;
		}
		for (var i = 0; i<(C.length-A); i++) {
			r = r + C[i] + "&nbsp;";
		}
		for (i = (C.length-A); i <= (C.length-1); i++) {
			r1 = r1 + C[i] + "&nbsp;";
		}
		div_out.innerHTML = r1 + r;
	}
	if (A<0) {
		if (Math.abs(A)>=C.length){
		A = A%C.length;
		}
		for (var i = (Math.abs(A)); i<=(C.length-1); i++) {
			r = r + C[i] + "&nbsp;" ;
		}
		for (i = 0; i<(Math.abs(A)); i++){
			r1 = r1 + C[i] + "&nbsp;"
		}
		div_out.innerHTML = r + r1;
	}
}	
function work8 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var C = [' '];
	var r = "";
	for (var i = 0; i<=(B.length-1); i++){
		C[i] = B[(B.length-i-1)];
		r = r + C[i] + "&nbsp;";
	}
	div_out.innerHTML = r;
}	
function work9 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = "a,b,c,d,e,f,g,h";
	var C = B.split(",");
	var r = "";
	for (i = 0; i<(C.length); i++) {
		if (A==C[i]) {
			r = r + C[i] + "+" + "<br>";
		}
		else {
			r = r + C[i] + "<br>";
		}
	}
	div_out.innerHTML = r;
}
function work10 (){
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = "11,13,17,19,10,12,14,15,16,18,20";
	var C = B.split(",");
	var r = "";
	for (i = 0; i<(C.length); i++) {
		if (A==C[i]) {
			r = r + C[i] + "+" + "<br>";
		}
		else {
			r = r + C[i] + "<br>";
		}
	}
	div_out.innerHTML = r;
}
function work11 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = in_a.value;
	var B = in_b.value;
	var C = A.split(" ");
	var D = B.split(" ");
	var r = "";
	for (i = 0; i<(C.length); i++) {
		if (A==C[i]) {
			r = r + C[i] ;
		}
		else {
			r = r + C[i];
		}
	}
	r = r + "<br>";
	for (i = 0;i<(C.length); i++) {
		for (j = 0; j<(D.length); j++) {
			if (D[j] == C[i]) {
				r = r + "+"
			}
			else {
				r = r + "&nbsp;"; 
			}
		}
		r = r + "<br>"
	}
	div_out.innerHTML = r;
}
function work12 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = in_a.value;
	var B = in_b.value;
	var C = A.split(" ");
	var D = B.split(" ");
	var result = 0;
	var m = C.length;
	if (C == "") {
		div_out.innerHTML = "Данные сверху отсутствуют";
		return;
	}
	if (D == "") {
			div_out.innerHTML = "Данные слева отсутствуют";
			return;
	}
	for (var i = 0; i<=(m-1); i++) {
		for (var j = 0; j<=(m-1); j++) {
			if (C[i] == D[j] && C[i] != " " && D[i] != " ") {
				result = result + 1;
			}
			else {
				result =  result + 0;
			}
		}
	}
	div_out.innerHTML = "Повторений: " + result;
}
function work13 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var C = B.length;
	var r = 0;
	for (var i = 0; i<=(C-1); i++){
		for (var j = (C-1); j>=1; j--) {
			if (B[i] == B[j] && B[i] != " " && j != i) {
				r = r + 1;
			}
			else {
				r = r + 0;
			}			
		}
	}
	if (r ==0) {
		div_out.innerHTML = "Повторений нет";
	}
	else {
		div_out.innerHTML = "Повторения есть";
	}
}
function work14 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = in_b.value;
	var C = B.split(" ");
	var E = C.length;
	var r = "";
	if (B=="") {
		div_out.innerHTML = "";
	}
	else {
		for (var i = 0; i<=(E-1); i++) {
			if (C[i] != " ") {
				r = r + C[i]*A + "&nbsp;";
			}
			else {
				r = r + "";
			}
		}
		div_out.innerHTML = r;
	}
}
function work15 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var C = B.length;
	var r = 0;
	for (var i = 0; i<=(C-1); i++) {
		r = r + parseFloat(B[i]);
	}
	var result = (r/C).toFixed(2);
	div_out.innerHTML = result;
}
function work16 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = in_a.value;
	var B = in_b.value;
	var C = A.split(" ");
	var D = B.split(" ");
	var k = C.length;
	var m = D.length;
	var r = "";
	if (k==m){
		for (var i=0;i<=(k-1); i++) {
			r = r + C[i]*D[i] + "&nbsp;";
		}
		div_out.innerHTML = r;	
	}
	else div_out.innerHTML = "Размеры массивов должны быть одинаковы";
}
function work17 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = in_b.value;
	var C = B.split(" ");
	var E = C.length;
	var r = 0;
	if (A>=0 || A<=E) { 
		for (var i = 0; i<=(E-1); i++) {
			if (A>C[i] && C[i] != " ") {
				r = r + 1;
			}
			else r = r + 0;
		}
		div_out.innerHTML = r;
	}
	if (A<0 || A>E) {
		div_out.innerHTML = "Число B должно быть в интервале [0, " + E + "]";
	}
}

function work18 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var C = B.length;
	var E = B[0];
	console.log("Ход решения Начинаю с " + E);
	for (var i=1;i<=(C-1); i++) {
		console.log("Сравниваю" + E + "и" + B[i]);
		if (B[i] < E) {
			console.log("Заменяю")
			E = B[i]
		}
	}
	div_out.innerHTML = E;
}
function work19 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var C = B.length;	
	var E = B[0];
	r = "";
	for (var i = 1; i<=(C-1); i++) {
		if (B[i] < E) {
			E = B[i]
		}
	}
	for (var j = 0; j<=(C-1); j++) {
		r = r + (B[j] - E) + " ";
	}
	div_out.innerHTML = r;
}
function work22 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = in_a.value;
	var B = A.split(" ");
	var C = B.length;
	var t;
	for (var i = 1; i<=(C-1); i++) {
		if (B[i] < E) {
			E = B[i]
		}
	}
	t = E
}
	
	
	
	
	
	
	
	
	
	
	