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
