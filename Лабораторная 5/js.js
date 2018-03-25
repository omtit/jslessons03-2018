function work1 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	if (a>b) {
		div_out.innerHTML = "Первое";
	}
	else {
		div_out.innerHTML = "Второе";
	}
}
function work2 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	if (a>b) {
		div_out.innerHTML = "Максимальное&nbsp;" + a + ",&nbsp;минимальное&nbsp;" + b;
	}
	else {
		div_out.innerHTML = "Максимальное&nbsp;" + b + ",&nbsp;минимальное&nbsp;" + a;
	}
}
function work3 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	if (a>=0) {
		var result = (Math.sqrt(a)).toFixed(0);
		div_out.innerHTML = result;
	}
	else {
		var result = (a*a).toFixed(0);
		div_out.innerHTML = result;
	}
}
function work4 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = parseFloat(in_a.value);
	if (a>0) {
		var result = (a).toFixed(0);
		div_out.innerHTML = result;
	}
	else {
		var result = (a*(-1)).toFixed(0);
		div_out.innerHTML = result;
	}
}
function work5(){
var div_out = document.getElementById("out");
var in_a = document.getElementById("ina");
var in_b = document.getElementById("inb");
var RoadKm = parseFloat(in_a.value);
var LenghtFeet = parseFloat(in_b.value);


	if (LenghtFeet<0){
		div_out.innerHTML = "Длина кабеля должна быть неотрицательна";
		return;
	} 
	if (RoadKm<0){
		div_out.innerHTML = "Расстояние между деревнями должно быть неотрицательно";
		return;
	} 
	var RoadFt = RoadKm*1000/0.305
	if (RoadFt>LenghtFeet){
		div_out.innerHTML = "Кабеля не хватит. Длина кабеля меньше расстояния.";
	}
	else{
		div_out.innerHTML = "Кабеля хватит. Расстояние меньше длины кабеля.";
	}
}
function work6 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var KmH = parseFloat(in_a.value);
	var Ms = parseFloat(in_b.value);
	if (KmH<0) {
		div_out.innerHTML = "Скорость корабля должна быть неотрицательна";
		return;
	}
	if (Ms<0) {
		div_out.innerHTML = "Скорость кометы должна быть неотрицательна";
		return;
	}
	var MsToKmH = Ms*3.6;
	if (KmH>MsToKmH) {
		div_out.innerHTML = "Корабль догонит комету.&nbsp;Скорость кометы&nbsp;" + Ms + "&nbsp;м/с&nbsp;меньше скорости корабля&nbsp;" + KmH + "&nbsp;км/ч";
	}
	else {
		div_out.innerHTML = "Комета улетит от корабля.&nbsp;Скорость корабля&nbsp;" + KmH + "&nbsp;км/ч&nbsp;меньше скорости кометы&nbsp;" + Ms + "&nbsp;м/с";
		return;
	}
}
function work7 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var radius = parseFloat(in_a.value);
	var edge = parseFloat(in_b.value);
	if (radius<0) {
		div_out.innerHTML = "Радиус должен быть положительным";
		return;
	}
	if (edge<0) {
		div_out.innerHTML = "Сторона квадрата должна быть положительна";
		return;
	}
	var circleS = (Math.PI*radius*radius).toFixed(4);
	var squareS = (edge*edge).toFixed(4);
	if (circleS>squareS) {
		div_out.innerHTML = "Площадь круга&nbsp;" +circleS + "&nbsp;больше площади квадрата&nbsp;" + squareS;
	}
	else {
		div_out.innerHTML = "Площадь квадрата&nbsp;" + squareS + "&nbsp;больше площади круга&nbsp;" + circleS;
		return;
	}
}
function work8 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var c = parseFloat(in_c.value);
	if (a>=0){
		div_out.innerHTML = "Данное уравнение не является квадратным";
		return;
	}
	var D = b*b-4*a*c;
	if (D>0){
		div_out.innerHTML = "У уравненения&nbsp;" + a + "x<sup>2</sup>&nbsp+&nbsp" + b + "x&nbsp+&nbsp" + c + "&nbsp;=&nbsp;0&nbsp;два вещественных корня";
		return;
	}
	if (D==0){
		div_out.innerHTML = "Уравненение&nbsp;" + a + "x<sup>2</sup>&nbsp+&nbsp" + b + "x&nbsp+&nbsp" + c + "&nbsp;=&nbsp;0&nbsp;имеет один корень";
		return;
	}
	if (D<0){
		div_out.innerHTML = "Вещественных кореней уравнения&nbsp;" + a + "x<sup>2</sup>&nbsp+&nbsp" + b + "x&nbsp+&nbsp" + c + "&nbsp;=&nbsp;0&nbsp;нет";
		return;
	}
}
function work9 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	if (a<0){
		div_out.innerHTML = "Площадь круга должна быть положительной";
		return;
	}
	if (b<0) {
		div_out.innerHTML = "Площадь квадрата должна быть положительной";
		return;
	}
	var Diametr = 2*Math.sqrt(a/Math.PI);
	var Edge = Math.sqrt(b);
	if (Diametr<Edge) {
		div_out.innerHTML = "Круг уместиться в квадрате";
	}
	else {
		div_out.innerHTML = "Круг не поместится в квадрате";
	}
}
function work10 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var c = parseFloat(in_c.value);
	if (a>0) {
		var X = (a*a).toFixed(4);
	}
	else {
		X = a;
	}
	if (b>0) {
		var Y = (b*b).toFixed(4);
	}
	else {
		Y = b;
	}
	if (c>0) {
		var Z = (c*c).toFixed(4);
	}
	else {
		Z = c;
	}
	div_out.innerHTML = X + ";" + Y + ";" + Z 
}
function work11 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);
	var c = parseFloat(in_c.value);
	if (a<b && b<c) {
		div_out.innerHTML = "Выполняется";
	}
	else {
		div_out.innerHTML = "Не выпонятеся";
	}
}
function work12 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var a = in_a.value;
	var a1 = "+";
	switch (a){
		case 'a':
			div_out.innerHTML = "a" + a1 + "<br>b<br>c<br>d<br>e<br>f<br>g<br>h";
		break;
		case 'b':
			div_out.innerHTML = "a<br>b" + a1 + "<br>c<br>d<br>e<br>f<br>g<br>h";
		break;
		case 'c':
			div_out.innerHTML = "a<br>b<br>c" + a1 + "<br>d<br>e<br>f<br>g<br>h";
		break;
		case 'd':
			div_out.innerHTML = "a<br>b<br>c<br>d" + a1 + "<br>e<br>f<br>g<br>h";
		break;
		case 'e':
			div_out.innerHTML = "a<br>b<br>c<br>d<br>e" + a1 + "<br>f<br>g<br>h";
		break;
		case 'f':
			div_out.innerHTML = "a<br>b<br>c<br>d<br>e<br>f" + a1 + "<br>g<br>h";
		break;
		case 'g':
			div_out.innerHTML = "a<br>b<br>c<br>d<br>e<br>f<br>g" + a1 + "<br>h";
		break;
		case 'h':
			div_out.innerHTML = "a<br>b<br>c<br>d<br>e<br>f<br>g<br>h" + a1;
		break;
		default:
			div_out.innerHTML = "a<br>b<br>c<br>d<br>e<br>f<br>g<br>h";
			break;
	}
}
function work13 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var X = parseFloat(in_a.value);
	var Y = parseFloat(in_b.value);
	var Z = parseFloat(in_c.value);
	if (X==Y || Y==Z || X==Z) {
		div_out.innerHTML = "Среди чисел есть равные";
	}
	else {
		div_out.innerHTML = "Числа не равны друг другу";
	}
}	
function work14 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var X = parseFloat(in_a.value);
	var Y = parseFloat(in_b.value);
	var Z = parseFloat(in_c.value);
	if (-3<X && X<5) {
		var a1 = X;
	}
	else {
		a1 = " ";
	}
	if (-3<Y && Y<5) {
		var a2 = Y;
	}
	else {
		a2 = " ";
	}
	if (-3<Z && Z<5) {
		var a3 = Z;
	}
	else {
		a3 = " ";
	}
	div_out.innerHTML = a1 + "&nbsp;&nbsp;" + a2 + "&nbsp;&nbsp;" + a3;
}		
function work15 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var X = parseFloat(in_a.value);
	var Y = parseFloat(in_b.value);
	var Z = parseFloat(in_c.value);
	if (X<0) {
		div_out.innerHTML = "Значение А должно быть не отрицательным"
		return;
	}
	if (Y<0) {
		div_out.innerHTML = "Значение B должно быть не отрицательным"
		return;
	}
	if (Z<0) {
		div_out.innerHTML = "Значение C должно быть не отрицательным"
		return;
	}
	if (X==Y || Y==Z || X==Z) {
		div_out.innerHTML = "Треугольник является равнобедренным";
	}
	else {
		div_out.innerHTML = "Треугольник не является равнобедренным";
	}
}		
function work16 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var X = parseFloat(in_a.value);
	var Y = parseFloat(in_b.value);
	var Z = parseFloat(in_c.value);
	if (X>Y && X>Z) {
		div_out.innerHTML = X;
		return;
	}
	if (Y>X && Y>Z) {
		div_out.innerHTML = Y;
		return;
	}
	if (Z>Y && X<Z) {
		div_out.innerHTML = Z;
		return;
	}
}
function work17 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var a = parseFloat(in_a.value);
	var b = parseFloat(in_b.value);	
	if (b==0) {
		div_out.innerHTML = "Значение Р должно быть не равно нулю"
		return;
	}
	var d1 = (a/b).toFixed(0);
	var d2 = a/b;
	if (d1==d2) {
		div_out.innerHTML = d2;
	}
	else {
		div_out.innerHTML = "М не делится нацело на Р"
	}
}	
function work18 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");	
	var a = parseFloat(in_a.value);
	if (a<=1000 || a>=9999) {
		div_out.innerHTML = "Значение А должно быть в интервале [1000,9999]";
	}
	else{
		var s = Math.floor(a/100)-Math.floor(a/1000)*10;
		var e = a-Math.floor(a/10)*10;
		if (s==e) {
			div_out.innerHTML = "равно";
		}
		else {
			div_out.innerHTML = "Не равно";
		}
	}
}
function work27 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");	
	var a = parseFloat(in_a.value);
	if (a<=-10 || a>=100) {
		div_out.innerHTML = "Значение А должно быть в интервале [-10,100]";
	}
	else {
		b = a-Math.floor(a/10)*10;
		if (a==1 || b==1 || a==4 || a==5 || a==9 ||a==20 || a==30 || a==50 || a==60 || a==70 || a==80 || a==90 || a==100 || b==4 || b==5 || b==9) {
			var c = "'ый";
			div_out.innerHTML = a + c;
			return;
		}
		if (b==2) {
			c = "'ой";
			div_out.innerHTML = a + c;
			return;
		}
		if (b==6 || b==7 || b==8 || a==2) {
			c = "'ой";
			div_out.innerHTML = a + c;
			return;
		}
		if (b==3 || a==3) {
			c = "'йй";
			div_out.innerHTML = a + c;
			return;
		}
		if (8<a && a<=21) {
			c = "'ый";
			div_out.innerHTML = a + c;
			return;
		}
		
	}
		
	
}
function work28 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var in_d = document.getElementById("input4");
	var A = parseFloat(in_a.value);
	var B = parseFloat(in_b.value);
	var C = parseFloat(in_c.value);
	var D = parseFloat(in_d.value);
	if (A<0){
		div_out.innerHTML = "Значение A должно быть неотрицательным";
		return;
	}
	if (B<0){
		div_out.innerHTML = "Значение B должно быть неотрицательным";
		return;
	}
	if (C<0){
		div_out.innerHTML = "Значение C должно быть неотрицательным";
		return;
	}
	if (D<0){
		div_out.innerHTML = "Значение D должно быть неотрицательным";
		return;
	}
	if (D>B && C>A) {
		div_out.innerHTML = "Размещение возможно";
	}
	else {
		div_out.innerHTML = "Размещение невозможно";
	}
}
function work29 (){
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var Xt = parseFloat(in_a.value);
	var Yt = parseFloat(in_b.value);
	if (Xt<0) {
		div_out.innerHTML = "Координата Х должна быть неотрицательной";
		return;
	}
	if (Yt<0) {
		div_out.innerHTML = "Координата Y должна быть неотрицательной";
		return;
	}
	if (Xt>=100 && Xt<=190 && Yt>=100 && Yt<=170){
		div_out.innerHTML = "Точка внутри";
		}
	else {
		div_out.innerHTML = "Точка снаружи";
		} 
		
}
function work30 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var in_d = document.getElementById("input4");
	var in_e = document.getElementById("input5");
	var in_f = document.getElementById("input6");
	var Xt = parseFloat(in_a.value);
	var Yt = parseFloat(in_b.value);
	var Xp1 = parseFloat(in_c.value);
	var Yp1 = parseFloat(in_d.value);
	var Xp2 = parseFloat(in_e.value);
	var Yp2 = parseFloat(in_f.value);
	if (Xt<0 || Yt<0) {
		div_out.innerHTML = "Координата точки должна быть неотрицательной";
		 return;
	}  
	var K = (Xt-Xp1)*(Yp2-Yp1)-(Xp2-Xp1)*(Yt-Yp1);
	if (K==0) {
		div_out.innerHTML = "Точка принадлежит прямой";
	}
	else {
		div_out.innerHTML = "Точка не принадлежит прямой";
	}
}
function work31 () {
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var in_d = document.getElementById("input4");
	var A1 = parseFloat(in_a.value);
	var B1 = parseFloat(in_b.value);
	var A2 = parseFloat(in_c.value);
	var B2 = parseFloat(in_d.value);
	if (A1>B1 || A2>B2) {
		div_out.innerHTML = "Значение А должно быть меньше значения В";
	}
	else {
		if (A2<A1 && A1<B2) {
			var X1 = A1;			
		}
		else {
			X1 = 0;
		}
		if (A2<B1 && B1<B2) {
			var X2 = B1;
		}
		else {
			X2 = 0;
		}
		if (A1<A2 && A2<B1) {
			var X3 = A2;
		}
		else {
			X3 = 0;
		}
		if (A1<B2 && B2<B1) {
			var X4 = B2;
		}
		else {
			X4 = 0;
		}
	}
	if (X1==0 && X2==0 && X3==0 && X4==0) {
	div_out.innerHTML = "не пересекаются";
	return;
	}
	if (X1<X2 && X3==X4){
		div_out.innerHTML = "пересекаются (" + X1 + ";" + X2 + ")";
		return;
	}
	if (X2<X1 && X3==X4){
		div_out.innerHTML = "пересекаются (" + X2 + ";" + X1 + ")";
		return;
	}
	if (X1<X3 && X2==X4){
		div_out.innerHTML = "пересекаются (" + X1 + ";" + X3 + ")";
		return;
	}
	if (X3<X1 && X2==X4){
		div_out.innerHTML = "пересекаются (" + X3 + ";" + X1 + ")";
		return;
	}
	if (X1<X4 && X3==X2){
		div_out.innerHTML = "пересекаются (" + X1 + ";" + X4 + ")";
		return;
	}
	if (X4<X1 && X3==X2){
		div_out.innerHTML = "пересекаются (" + X4 + ";" + X1 + ")";
		return;
	}
	if (X2<X3 && X1==X4){
		div_out.innerHTML = "пересекаются (" + X2 + ";" + X3 + ")";
		return;
	}
	if (X3<X2 && X1==X4){
		div_out.innerHTML = "пересекаются (" + X3 + ";" + X2 + ")";
		return;
	}
	if (X2<X4 && X3==X1){
		div_out.innerHTML = "пересекаются (" + X2 + ";" + X4 + ")";
		return;
	}
	if (X4<X2 && X3==X1){
		div_out.innerHTML = "пересекаются (" + X2 + ";" + X4 + ")";
		return;
	}
	if (X3<X4 && X2==X1){
		div_out.innerHTML = "пересекаются (" + X3 + ";" + X4 + ")";
		return;
	}
	if (X4<X3 && X2==X1){
		div_out.innerHTML = "пересекаются (" + X4 + ";" + X3 + ")";
		return;
	}
}
function work32 () {//точки пересечения двух прямоугольников//
	var div_out = document.getElementById("out");
	var in_a = document.getElementById("input1");
	var in_b = document.getElementById("input2");
	var in_c = document.getElementById("input3");
	var in_d = document.getElementById("input4");
	var in_e = document.getElementById("input5");
	var in_f = document.getElementById("input6");
	var in_g = document.getElementById("input7");
	var in_h = document.getElementById("input8");
	var X1 = parseFloat(in_a.value);//координаты верхнего левого угла прямоугольника 1//
	var Y1 = parseFloat(in_b.value);
	var H1 = parseFloat(in_c.value);//высота прямоугольника 1//
	var W1 = parseFloat(in_d.value);//ширина прямоугольника 1//
	var X2 = parseFloat(in_e.value);//координаты верхнего левого угла прямоугольника 2//
	var Y2 = parseFloat(in_f.value);
	var H2 = parseFloat(in_g.value);//высота прямоугольника 2//
	var W2 = parseFloat(in_h.value);//ширина прямоугольника 2//
	//проверка на корректность ввода данных//
	if (X1<=0 || X2<=0 || Y1<=0 || Y2<=0) {
		div_out.innerHTML = "Координаты точки должны быть положительны";
		return;
	}
	if (H1<=0 || H2<=0) {
		div_out.innerHTML = "Высота должна быть положительна";
		return;
	}
	if (W1<=0 || W2<=0) {
		div_out.innerHTML = "Ширина должна быть положительна";
		return;
	}
	//находим все координаты вершин прямоугольников 1(ABCD) и 2 (PXYZ)//
	/*		A__________B          P__________X
			|          |          |          |
	        |          |          |          |
			|__________|          |__________|
			C          D          Y          Z         */
	//координаты экранные//
	var Ax = X1;
	var Ay = Y1;
	var Bx = X1+W1; 
	var By = Y1;
	var Cx = X1;
	var Cy = Y1+H1;
	var Dx = Bx;
	var Dy = Cy;
    var Px = X2;
	var Py = Y2;
	var Xx = X2+W2; 
	var Xy = Y2;
	var Yx = X2;
	var Yy = Y2+H2;
	var Zx = Xx;
	var Zy = Yy;
	//функция для нахождения координат (Ox, Oy) точки пересечения  2 отрезков с координатами (Lx, Ly, Mx, My)//
		function coordinates(x1,y1,x2,y2,x3,y3,x4,y4) {
			//проверка на парралельность отрезков//
			var k1 = (x2-x1)/(y2-y1);
			var k2 = (x4-x3)/(y4-y3);
			if (k1!=k2) {
				var Ox = ((x1*y2-x2*y1)*(x4-x3)-(x3*y4-x4*y3)*(x2-x1))/((y1-y2)*(x4-x3)-(y3-y4)*(x2-x1));
				var Oy = ((y3-y4)*x-(x3*y4-x4*y3))/(x4-x3);
					if ((x1<=Ox && x2<=Ox && x3<=Ox && x4<=Ox) || (y1=<Oy && y2<=Oy && y3<=Oy && y4<=Oy)){
					var Ox1 = Ox;
					var Oy1 = Oy;
					return;
			}
			}
			
		}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	