function work3 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	if (A>B) {
		div_out.innerHTML = "Значение A должно быть не больше значения B";
	}
	else {
		var result = " ";
		for (var i = A; i<=B; i++) {
			result = result + i + "<br>";
		}
		div_out.innerHTML = result;
	}
}
function work4 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	if (A>B) {
		div_out.innerHTML = "Значение A должно быть не больше значения B";
	}
	else {
		var result = " ";
		for (var i = B; i>=A; i--) {
			result = result + i + "&nbsp;";
		}
		div_out.innerHTML = result;
	}
}
function work5 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = in_b.value;
	if (A<0) {
		div_out.innerHTML = "Значение A должно быть не отрицательным";
	}
	else {
		var result = "";
		for (var i = 0; i<=A; i++) {
			result = result + B;
		}
		div_out.innerHTML = "&quot;" + result + "&quot;";
	}
}
function work6 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var result = " ";
	if (A>B) {
		for (var i = B; i<=A; i++) {
			result = result + i + "&nbsp;";
		}
	}
	else {
		for (var i = A; i<=B; i++) {
			result = result + i + "&nbsp;";
		}
	}
	div_out.innerHTML = result;
}
function work7 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var result = " ";
	if (A>B) {
		for (var i = A; i>=B; i--) {
			result = result + i + "&nbsp;";
		}
	}
	else {
		for (var i = A; i<=B; i++) {
			result = result + i + "&nbsp;";
		}
	}
	div_out.innerHTML = result;
}

function work10 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var sum = 0;
	var r = "";
	for (var A = a; A<=b; A++){
	 sum = sum + A;
     r = r + sum + " ";
	}
	div_out.innerHTML = "Ход решения&nbsp;" + r + "<br>" + "Ответ:" + sum;
}
function work11 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	if (a>=-100 && a<=500) {
		var  b = 0;
		for (i=a; i<=500; i++) {
			b = b + i;
		}
		div_out.innerHTML = b;
	}
	else {
		div_out.innerHTML = "Значение А должно быть в интервале [-100,500]";
	}
	
}
function work12 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	if (a>=-10 && a<=10000) {
		var  b = 0;
		for (i=-10; i<=a; i++) {
			b = b + i;
		}
		div_out.innerHTML = b;
	}
	else {
		div_out.innerHTML = "Значение B должно быть в интервале [-10,10000]";
	}
	
}
function work13 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var c;
	var d;
	if (A>B) {
		c = A;
		d = B;
	}
	else {
		c = B;
		d = A;
	}
	var f = 0;
	for (var i = d; i<=c; i++){
		f = f + i;
	} 
	div_out.innerHTML = f;
}
function work14 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var c;
	var d;
	if (A>B) {
		c = A;
		d = B;
	}
	else {
		c = B;
		d = A;
	}
	var f = 1;
	for (var i = d; i<=c; i++){
		f = f*i;
	} 
	div_out.innerHTML = f;
}
function work16 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = parseFloat(in_a.value);
	if (A>0){
		var a=0; 
		for (i=1; i<=A; i++){
			a = a + 1/i;
		}
		var b = to.Fixed
	div_out.innerHTML = a;
	}
	else {
	div_out.innerHTML = "Значение N должно быть положительным";
	}
}
function work17 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var c;
	var d;
	if (A>B) {
		c = A;
		d = B;
	}
	else {
		c = B;
		d = A;
	}
	var f = 0;
	for (var i = d; i<=c; i++){
		f = f + i*i;
	} 
	div_out.innerHTML = f;
}	
	

function work18 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	for (i = 10; i<=20; i++){
		if (a==i){
			r += i + "+" + "<br>";
		}
		else {
			r += i + "<br>";;
		}
	}
	div_out.innerHTML = r;
}
function work19 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	for (var i =0; i<a; i++) {
		var b = i%5;
		if (b==4){
			r += "!" + " ";
		}
		else {
			r += "!";
		}
	}
	div_out.innerHTML = r;
}
function work20 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	for (var i =0; i<a; i++) {
		var b = i%20;
		if (b==19){
			r += "#" + "<br>";
		}
		else {
			r += "#";
		}
	}
	div_out.innerHTML = r;
}
function work21 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	for (i = 30; i<=40; i++){
		if (a==i){
			r += i + "+" + "<br>";
		}
		else {
			r += i +  "-" + "<br>";;
		}
	}
	div_out.innerHTML = r;
}
function work22 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	if (a>=0 && a<=15) {
		for (var i =0; i<15; i++) {
		if (i<a){
			r += "#";
		}
		else {
			r+= ".";
		}
	}
	div_out.innerHTML = r;
	}
	else {
		div_out.innerHTML = "Значение Y должно быть в интервале [0;15]";
	}
	
}
function work23 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	var c = ((a-100)/13).toFixed(0);
	for (var i = 100; i<a; i++) {
		var b = i%13;
		if (b==12){
			r += i + "+" + "<br>";
		}
		else {
			r += i;
		}
	}
	div_out.innerHTML = "Ход решения:" + r + "<br>" + "Ответ:" + c;
}	
function work24 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var c;
	var d;
	if (A>B) {
		c = A;
		d = B;
	}
	else {
		c = B;
		d = A;
	}
	var f = 0;
	for (var i = d; i<=c; i++){
		var g = i%7
		if (g==0) {
		f = f + i;
	} 
	}
	div_out.innerHTML = f;
}		
function work25 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	if (a>=0){
	for (var i = 0; i<=a; i++) {
		var b = a%i;
		if (b==0){
			r += i + " ";
		}
		else {
			r += " ";
		}
	}
	div_out.innerHTML = r;
	}
	else {
		div_out.innerHTML = "Число должно быть роложительным";
	}
}		
function work26 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	var r = "";
	if (a>=0){
	for (var i = 0; i<=a; i++) {
		var b = a%i;
		if (b==0 ){
			r += i;
		}
		else {
			r += "";
		}
	}
	var v = 1+""+a;
	if (r == v) {
				div_out.innerHTML = "число простое";
		}
		else {
			div_out.innerHTML = "число не простое";
		}
	}
	else {
		div_out.innerHTML = "Число должно быть роложительным";
	}
}		
function work27 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = parseFloat(in_a.value);
	if (A>=0 && A<=20){
	r = "";
	for (i=0; i<A; i++){	
	r = r + "a" ;
}
	r = r + "<br>"
	for (i=0; i<A; i++){	
	r = r + "b";
}
	r = r + "<br>"
	for (i=0; i<A; i++){	
	r = r + "c";
}
	r = r + "<br>"
	for (i=0; i<A; i++){	
	r = r + "d";
}
	r = r + "<br>"
	for (i=0; i<A; i++){	
	r = r + "e";
}
	r = r + "<br>"
	for (i=0; i<A; i++){	
	r = r + "g";
}
	r = r + "<br>"
	for (i=0; i<A; i++){	
	r = r + "h";
}
div_out.innerHTML = r;
	}
		else {
		div_out.innerHTML = "Число W должно быть в  интервале [0,20]";	
		}
}
function work28 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = parseFloat(in_a.value);
	if (A>=0 && A<20){
		var r = "";
		for (var i=0; i<9; i++) {
			for (var j=0; j<A; j++) {
				r = r + i;
			}
			r = r + "<br>";
		}
		div_out.innerHTML = r;
	}
	else {
		div_out.innerHTML = "Число W должно быть в  интервале [0,20]";
	}
}	
function work29 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var A = in_a.value;
	var B = parseFloat(in_b.value);
	var C = parseFloat(in_c.value);
	if (B>0){
		var r = "";
		for (var i=0; i<C; i++) {
			for (var j=0; j<B; j++) {
				r = r + A;
			}
			r = r + "<br>";
		}
		div_out.innerHTML = r;
	}
	else {
		div_out.innerHTML = "Значение W должно быть неотрицательно";
	}
}	
function work30 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var A = parseFloat(in_a.value);
	if (A>0){
		var r = "";
		for (var i=0; i<3; i++) {
			for (var j=0; j<A; j++) {
				if ((j==0 && i == 0) || (i==2 && j==0) || (i==0 && (j == (A-1))) || (i == 2 && (j == (A-1)))) {
					r = r + "+";
				}
				else {
					r = r + "";
				}
				if ((i == 1 && j == 0) || (i == 1 && (j == (A-1)))) {
					r = r + "|";
				}
				else {
					r = r + "";
				}
				if (((i == 0 && j>=1 && j<(A-1))) || (i == 2 && j>=1 && j<(A-1))) {
					r = r + "-";
				}
				else {
					r = r + "";
				}
				if (i==1 && j>=1 && j<(A-1)) {
					r = r + "&nbsp;";
				}
				else {
					r = r + "";
				}
			}
			r = r +"<br>";
		}
		div_out.innerHTML = r;
	}
	else {
		div_out.innerHTML = "Значение W должно быть неотрицательно";
	}
}
function work31 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var r = "" + "&nbsp;";
	if (A>0 && B>0) {
		for (var i=0; i<=(B+1); i++) {
			for (var j=0; j<=(A+1); j++) {
				if (i==0 && j>=0 && j<A) {
					r = r + j;
				}
				if (j==0 && i>=1 && (i<=B)) {
					r = r + (i-1);
				}
				if (i>=1 && i<=B && (j==(A+1))) {
					r = r + "|";
				}
				if ((i>=1 && (i<=(B))) && (j>=1 && (j<=(A)))) {
					r = r + "."
				}
				
			}
			if (i==B){
				r = r + "";
			}
			else {
				r = r + "<br>";
			}
		}
		var r1 = "" + "&nbsp;";
		for (i=0; i<A; i++) {
			r1 = r1 + "-";
		}
		div_out.innerHTML =	r + r1;	
	}
	else {		
	div_out.innerHTML = "Значениz W и H должны быть неотрицательны";
	}
	
}
function work32 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = in_a.value;
	var B = parseFloat(in_b.value);	
	var c = "";
	var s = "";
	if (B>0) {
		for (var i = 1; i<=B; i++) {
		c = c + A;
	    s = s + c + "<br>" ;
		}
		div_out.innerHTML = s;	
	}
	else {
		div_out.innerHTML = "Значение H должно быть неотрицательно";
	}
}

function work32_1 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = in_a.value;
	var B = parseFloat(in_b.value);	
	r = "";
	for (var i = 1; i<=B; i++) {
			for (var k = 1; k<=i; k++) {
				r = r + A;	
			}
			r = r + "<br>"
		}	
	div_out.innerHTML = r;
}
	
	
	
	
function work33 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);	
	var t = "";
	var s = "";
	var c;
	var d;
	var r = "";
	if (A>B) {
		c = A;
		d = B;
	}
	else {
		d = A;
		c = B;
	}
	for (var i = d; i<=c; i++){
		if (i%2 != 0) {
			
			t = t + ".";
			if (i>=(c-1) && i<c || i == c){
			t = "";
		}
			s = s + i + "<br>" + t;
		}
		
		
	}
	div_out.innerHTML = s;
}
function work34 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);	
	var c = "";
	if (B>=0 && A>=0) {
		for (var i = 0; i<B; i++) {
			for (var j = (A-i); j>0; j--) {
				c = c + "+";
				
			}
			for (j = 0; j<i; j++) {
				if (j<A) {
				c = c + "#";
				}
				else {
					c = c + "";
				}
			}
			c = c + "<br>";
		}
		div_out.innerHTML = c;	
	}
	else {
		div_out.innerHTML = "Значение H должно быть неотрицательно";
	}
}
function work35 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var r = "";
	var c = Math.max(A,B);
	var d = Math.min(A,B);
	if (A<B) {
		for (var i = A; i<=B; i++) {
			if (i%2 != 0) {
				r = r + i + ",";
			}
			if (i==c) {
				r = r + i;
			}
		}
	}
	else {
		for (var i = A; i>=B; i--) {
			if (i%2 != 0) {
				r = r + i + ",";
			}
			if (i==d) {
				r = r + i;
			}
		}
	}
	div_out.innerHTML = r;
}
function work36 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var maxV = Math.max(A,B);
	var minV = Math.min(A,B);
	var betmeenV = Math.abs((A+B)/2);
	var r = "";
	for (var i = minV; i<=maxV; i++) {
		if (i<betmeenV) {
			r = r + i + "<";
		}
		else {
			r = r + i + ">";
		}
		if (i==maxV) {
			r = r + i;
		}
		
	}
	div_out.innerHTML = r;
}
function work37 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var in_d = document.getElementById("input4");
	var A = in_a.value;
	var B = in_b.value;
	var C = parseFloat(in_c.value);
	var D = parseFloat(in_d.value);
	if (C<0) {
		div_out.innerHTML = "Значение W должно быть неотрицательно";
		return;
	}
	if (D<0) {
		div_out.innerHTML = "Значение H должно быть неотрицательно";
		return;
	}
	var r = "";
	for (var i = 0; i<=D; i++) {
		for (var j = 0; j<=C; j++) {
			if (i%2==0) {
				r = r + B;
			}
			else {
				r = r + A;
			}
		}
		r = r + "<br>";
	}
	div_out.innerHTML = r;
}
function work38 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var in_d = document.getElementById("input4");
	var A = in_a.value;
	var B = in_b.value;
	var C = parseFloat(in_c.value);
	var D = parseFloat(in_d.value);
	if (C<0) {
		div_out.innerHTML = "Значение W должно быть неотрицательно";
		return;
	}
	if (D<0) {
		div_out.innerHTML = "Значение H должно быть неотрицательно";
		return;
	}
	var r = "";
	for (var i = 0; i<=D; i++) {
		for (var j = 0; j<=C; j++) {
			if (j%2==0) {
				r = r + B;
			}
			else {
				r = r + A;
			}
		}
		r = r + "<br>";
	}
	div_out.innerHTML = r;
}








		