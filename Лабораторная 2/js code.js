function work2(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
var b = a.toFixed(4);
div_out.innerHTML = "Результат&nbsp" + b;  
}

function work3(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
div_out.innerHTML = a + 7
}
function work4(){
var div_out = document.getElementById("out");
var inxa = document.getElementById("inx_1");
var inxb = document.getElementById("inx_2");
var inxc = document.getElementById("inx_3");
var a = parseFloat(inxa.value);
var b = parseFloat(inxb.value);
var c = parseFloat(inxc.value);
var result = a*b + a*c + b*c;
div_out.innerHTML = result
}
function work5(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
var result = 7*a*a-3*a+6;
div_out.innerHTML = result;  
}
function work6(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
var b = 12*a*a+7*a-16;
var result = b.toFixed(4);
div_out.innerHTML = result;  
}
function work7(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var aInDeg = parseFloat(in_a.value);
var aInRad = aInDeg*Math.PI/180;
div_out.innerHTML = aInRad
}
function work8(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var aInDeg = parseFloat(in_a.value);
var aInRad = aInDeg*Math.PI/180;
var sin_out = Math.sin(aInRad);
var b = sin_out.toFixed(4);
div_out.innerHTML = b
}
function work9(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var aInDeg = parseFloat(in_a.value);
var aInRad = aInDeg*Math.PI/180;
var cos_out = Math.cos(aInRad)*5;
var b = cos_out.toFixed(4);
div_out.innerHTML = b;
}
function work10(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var in_b = document.getElementById("inb");
var aInDeg = parseFloat(in_a.value);
var aInRad = aInDeg*Math.PI/180;
var bInDeg = parseFloat(in_b.value);
var bInRad = bInDeg*Math.PI/180;
var sin_a_out = Math.sin(aInRad);
var cos_a_out = Math.cos(aInRad);
var sin_b_out = Math.sin(bInRad);
var cos_b_out = Math.cos(bInRad);
var b = sin_a_out*cos_b_out+cos_a_out*sin_b_out;
var result = b.toFixed(4);
div_out.innerHTML = result;
}
function work11(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var in_b = document.getElementById("inb");
var aInDeg = parseFloat(in_a.value);
var aInRad = aInDeg*Math.PI/90;
var bInDeg = parseFloat(in_b.value);
var bInRad = bInDeg*Math.PI/60;
var sin_a_out = Math.sin(aInRad);
var cos_b_out = Math.cos(bInRad);
var b = 3*sin_a_out*cos_b_out;
var result = b.toFixed(4);
div_out.innerHTML = result;
}
function work12(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
if (a <=0){
	div_out.innerHTML = "Значение edge должно быть положительным";
	}
else {
	var b = a*a*6;
	var area = b.toFixed(4);
	div_out.innerHTML = area;
}


}
function work13(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var in_b = document.getElementById("inb");
var a = parseFloat(in_a.value);
var b = parseFloat(in_b.value)
if (a <=0){
	div_out.innerHTML = "Значение base должно быть положительным";
	return;
}
if (b<=0){
		div_out.innerHTML = "Значение height должно быть положительным";
		return;
}

var c = a*b/2;
var area = c.toFixed(4);
div_out.innerHTML = area;
}
function work14(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
if (a <=0){
	div_out.innerHTML = "Значение edge должно быть положительным";
	}
else {
	var b = a*a*a;
	var area = b.toFixed(0);
	div_out.innerHTML = area;
}
}
function work15(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
if (a <=0){
	div_out.innerHTML = "Радиус должен быть положительным";
	}
else {
	var circumference = a*Math.PI*2;
	var result = circumference.toFixed(4);
	div_out.innerHTML = result;
}
}
function work16(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
if (a <=0){
	div_out.innerHTML = "Значение radius должно быть положительным";
	}
else {
	var volume = 4*a*a*a*Math.PI/3;
	var result = volume.toFixed(4);
	div_out.innerHTML = result;
}
}
function work17(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
if (a <0){
	div_out.innerHTML = "Значение X должно быть неотрицательным";
	return;
}
var x = Math.sqrt(a);
var b = x.toFixed(4);
div_out.innerHTML = b
}
function work18(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var a = parseFloat(in_a.value);
if (61-a <0){
	div_out.innerHTML = "Подкоренное выражение должно быть неотрицательным";
	return;
}
var x = 3*Math.sqrt(61-a);
var b = x.toFixed(4);
div_out.innerHTML = b
}
function work19(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var in_b = document.getElementById("inb");
var a = parseFloat(in_a.value);
var b = parseFloat(in_b.value);
if (b>0){
		div_out.innerHTML = "Значение B должно быть не положительным";
		return;
}
var sqrt_b = Math.sqrt(-7*b);
var result = (sqrt_b*a).toFixed(4);
div_out.innerHTML = result;
}
function work20(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var in_b = document.getElementById("inb");
var a = parseFloat(in_a.value);
var b = parseFloat(in_b.value);
if (b<0){
		div_out.innerHTML = "Значение Y должно быть неотрицательным";
		return;
}
if ((a+Math.sqrt(b))<0){
	div_out.innerHTML = "Подкоренное выражение должно быть неотрицательным";
	return;
}
var sqrt_b = Math.sqrt(b);
var result = (-5*(Math.sqrt(sqrt_b+a))).toFixed(4);
div_out.innerHTML = result;
}
function work21(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var in_b = document.getElementById("inb");
var totalInM = parseFloat(in_a.value);
var partInCm = parseFloat(in_b.value)
if (totalInM <0){
	div_out.innerHTML = "Значение totalInM должно быть положительным";
	return;
}
if (partInCm<0){
		div_out.innerHTML = "Значение totalIcM должно быть положительным";
		return;
}
var totalInM_1 = totalInM*100
var c = totalInM_1/partInCm;
var d = Math.floor(c);
var e = totalInM_1%partInCm;
div_out.innerHTML = d + "шт" + e +"cм" ;
}
function work22 () {
	var div_out = document.getElementById("out");
	var in_deg = document.getElementById("deg");
	var deg = parseFloat(in_deg.value);
	if (deg<360) {
		var a = deg;
	}
	else {
	var a = (deg/360-Math.floor(deg/360))*360;
	}
	var result = a.toFixed(0);
	div_out.innerHTML = result;
}
function work23 () {
	var div_out = document.getElementById("out");
	var in_seconds = document.getElementById("seconds");
	var seconds = parseFloat(in_seconds.value);
	if (seconds>0) {
		var hours = Math.floor(seconds/3600);
		var minutes = Math.floor((seconds/3600-hours)*60);
		var remeinderSeconds = seconds-hours*3600-minutes*60;
		div_out.innerHTML = hours + "&nbsp;часов&nbsp;" + minutes + "&nbsp;минут&nbsp;" + remeinderSeconds + "&nbsp;секунд&nbsp;" ;
	}
	else {
	div_out.innerHTML = "количество времени должно быть не отрицательным";
	}
}
function work24 () {
	var div_out = document.getElementById("out");
	var in_C = document.getElementById("inC");
	var C = parseFloat(in_C.value);
	if (C>=(-273.15)) {
		var CtoF = C*1.8+32;
		var F = CtoF.toFixed(4);
		div_out.innerHTML = F;
	}
	else {
	div_out.innerHTML = "Температура должна быть выше абсолютного нуля";
	}
}
function work25(){
	var div_out = document.getElementById("out");
	var in_speed_1 = document.getElementById("velocity1"); 
	var in_speed_2 = document.getElementById("velocity2");
	var in_distance = document.getElementById("distance");
	var speed_1 = parseFloat(in_speed_1.value);
	var speed_2 = parseFloat(in_speed_2.value);
	var distance = parseFloat(in_distance.value);
	if (speed_1<0 || speed_2<0){
		div_out.innerHTML = "Скорость должна быть неотрицательна";
		return;
	}
	if (distance<0){
		div_out.innerHTML = "Расстояние должно быть неотрицательно";
		return;
	}
	var meetingTime = distance/(speed_1+speed_2);
	var result = meetingTime.toFixed(4);
	div_out.innerHTML = result;
}
function work26(){
	var div_out = document.getElementById("out");
	var in_speed = document.getElementById("velocity"); 
	var in_time = document.getElementById("time");
	var in_acceleration = document.getElementById("acceleration");
	var speed = parseFloat(in_speed.value);
	var time = parseFloat(in_time.value);
	var acceleration = parseFloat(in_acceleration.value);
	if (speed<=0){
		div_out.innerHTML = "Начальная cкорость должна быть неотрицательна";
		return;
	}
	if (time<0){
		div_out.innerHTML = "Время должно быть положительным";
		return;
	}
	var distance = speed*time+acceleration*time*time/2;
	var result = distance.toFixed(2);
	div_out.innerHTML = result;
}
function work27(){
	var div_out = document.getElementById("out");
	var in_mass = document.getElementById("mass"); 
	var in_velocity = document.getElementById("velocity");
	var in_height = document.getElementById("height");
	var mass = parseFloat(in_mass.value);
	var velocity = parseFloat(in_velocity.value);
	var height = parseFloat(in_height.value);
	if (mass<=0){
		div_out.innerHTML = "Значение mass должно быть положительным";
		return;
	}
	if (velocity<=0){
		div_out.innerHTML = "Значение velocity должно быть положительным";
		return;
	}
	if (height<=0){
		div_out.innerHTML = "Значение height должно быть неотрицательным";
		return;
	}
	var kineticEnergy = (mass*velocity*velocity/2).toFixed(4);
	var potentialEnergy = (mass*9.8067*height).toFixed(4);
	var result = "Кинетическая энергия составляет:&nbsp;" + kineticEnergy + "&nbsp;Дж" + "<br>" + "Потенциальная энергия составляет:&nbsp;" + potentialEnergy + "&nbsp;Дж";
	div_out.innerHTML = result;
}

function work28(){
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("ina"); 
	var in_b = document.getElementById("inb");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	if (a==0){
		div_out.innerHTML = "Значение R1 должно быть не равно нулю";
		return;
	}
	if (b==0){
		div_out.innerHTML = "Значение R2 должно быть не равно нулю";
		return;
	}
	var result = (1/a+1/b).toFixed(4);
	div_out.innerHTML = result;
}
function work29 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("ina");
	var in_b = document.getElementById("inb");
	var aInDeg = parseFloat(in_b.value);
	var mass = parseFloat(in_a.value);
	if (mass<=0) {
		div_out.innerHTML = "Масса должна быть положительной";
	}
	else {
		var aInRad = aInDeg/180*Math.PI;
		var result = (mass*9.8067*Math.cos(aInRad)).toFixed(6);
		div_out.innerHTML = result;
		if (result > 0) {
			div_out.innerHTML = result;
		}
		else {
			div_out.innerHTML = 0;
		}
	}
}

function work30 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("ina");
	var in_b = document.getElementById("inb");
	var in_c = document.getElementById("inc");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var c = parseFloat(in_c.value);
	if (a==0){
		div_out.innerHTML = "Уравнение у =" + a  + "x^2+" + b + "x+" + c + "&nbsp;не является квадратным"
	}
	else {
		result = (b*b - 4*a*c).toFixed(4);
		div_out.innerHTML = result;
	}
}

function work31 (){
	var div_out = document.getElementById("out");
	var mass1 = document.getElementById("ina");
	var mass2 = document.getElementById("inb");
	var distance = document.getElementById("inc");
	var m1 = parseFloat(mass1.value);
	var m2 = parseFloat(mass2.value);
	var d = parseFloat(distance.value);
	if (m1<=0 || m2<=0){
		div_out.innerHTML = "Масса должна быть неотрицательной";
		return;
	}
	if (d<=0){
		div_out.innerHTML = "Дистанция должна быть неотрицательной";
		return;
	}
	var result = (9.8067*m1*m2/(d*d)).toFixed(4);
	div_out.innerHTML = result;
}

function work32(){
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("ina");
	var in_b = document.getElementById("inb");
	var cInDeg = document.getElementById("inc");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var c = parseFloat(cInDeg.value);
	var cInRad = c/180*Math.PI;
	var result = (Math.sqrt(a*a+b*b-2*a*b*Math.cos(cInRad))).toFixed(4);
	div_out.innerHTML = result;
}
function work33 (){
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("ina");
	var in_b = document.getElementById("inb");
	var in_c = document.getElementById("inc");
	var in_d = document.getElementById("ind");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var c = parseFloat(in_c.value);
	var d = parseFloat(in_d.value);
	if (a<=0) {
		div_out.innerHTML = "Значение а должно быть не равно нулю";
		return;
	}
	if (d<=0){
		div_out.innerHTML = "Значение d должно быть не равно нулю";
		return;
	}
	var result = ((a*d + b*c)/(a*d)).toFixed(4);
	div_out.innerHTML = result;
}
 
function work34 () {
	var div_out = document.getElementById("out");
	var in_deg = document.getElementById("deg");
	var deg = parseFloat(in_deg.value);
	var rad = deg/180*Math.PI
	var result = (Math.sqrt(1-Math.sin(rad)*Math.sin(rad))).toFixed(4);
	div_out.innerHTML = result;
}
function work35 (){
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("ina");
	var in_b = document.getElementById("inb");
	var in_c = document.getElementById("inc");
	var in_x = document.getElementById("inx");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var c = parseFloat(in_c.value);
	var x = parseFloat(in_x.value);
	var radicant = a*x*x + b*x + c;
	var denominator = Math.sqrt(radicant);
	if (radicant<0) {
		div_out.innerHTML = "Подкоренное выражение должно быть не отрицательным";
		return;
	}
	if (denominator == 0) {
		div_out.innerHTML = "Знаменатель не может быть равен нулю";
		return;
	}
	var result = (1/denominator).toFixed(4);
	div_out.innerHTML = result;
}
function work36 () {
	var div_out = document.getElementById("out");
	var in_x = document.getElementById("inx");
	var x = parseFloat(in_x.value);
	var radicant1 = x+5;
	var radicant2 = x-5;
	var radicant3 = x;
	if (radicant1<0 || radicant2<0 || radicant3<0){
		div_out.innerHTML = "Подкоренное выражение должно быть неотрицательным";
		return;
	}
	var result = ((Math.sqrt(radicant1)+Math.sqrt(radicant2))/(2*Math.sqrt(radicant3))).toFixed(6);
	div_out.innerHTML = result;
}
function work37 () {
	var div_out = document.getElementById("out");
	var in_x = document.getElementById("inx");
	var x = parseFloat(in_x.value);
	if (x<0) {
		div_out.innerHTML = "Высота над уровнем Земли должна быть неотрицательна";
		return;
	}
	var result = (Math.sqrt((x+6350)*(x+6350)-6350*6350)).toFixed(4);
	div_out.innerHTML = result;
}

function work38(){
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("ina"); 
	var in_b = document.getElementById("inb");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var result = (Math.sqrt(a*a+b*b)).toFixed(4);
	div_out.innerHTML = result;
}
function work39(){
	var div_out = document.getElementById("out");
	var in_X1 = document.getElementById("inX_1");
	var in_X2 = document.getElementById("inX_2");
	var in_Y1 = document.getElementById("inY_1");
	var in_Y2 = document.getElementById("inY_2");
	var X1 = parseFloat(in_X1.value);
	var Y1 = parseFloat(in_X2.value);
	var X2 = parseFloat(in_Y1.value);
	var Y2 = parseFloat(in_Y2.value);
	var result = (Math.sqrt((X2-X1)*(X2-X1)+(Y2-Y1)*(Y2-Y1))).toFixed(4);
	div_out.innerHTML = result;
}
function work40 (){
	var div_out1 = document.getElementById("out1");
	var div_out2 = document.getElementById("out2")
	var in_v1 = document.getElementById("inV1");
	var in_v2 = document.getElementById("inV2");
	var in_t1 = document.getElementById("inT1");
	var in_t2 = document.getElementById("inT2");
	var v1 = parseFloat(in_v1.value);
	var v2 = parseFloat(in_v2.value);
	var t1 = parseFloat(in_t1.value);
	var t2 = parseFloat(in_t2.value);
	if (v1<0 || v2<0){
		div_out1.innerHTML = "Объем должен быть неотрицательным";
		return;
	}
	var denominator = (v1+v2).toFixed(0);
	var t = (t1*v1 + t2*v2)/denominator;
	var result = t.toFixed(4);
	div_out1.innerHTML = denominator;
	div_out2.innerHTML = result;
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

