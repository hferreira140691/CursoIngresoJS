/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	/*var sueldo;
	var aumento;
	var total;

	sueldo=document.getElementById('sueldo').value;
	aumento=sueldo *0.10;
	sueldo= parseInt (sueldo);
	aumento=parseInt (aumento);
	total= sueldo + aumento;
	document.getElementById('resultado').value =total;*/


var precio;
var aumento;
var total;

precio= document.getElementById('sueldo').value;
aumento= precio *400/100;
precio= parseInt(precio);
aumento= parseInt(aumento);
total= precio + aumento;
document.getElementById('resultado').value  =total;

	/*var porcentaje;
	var precio=100;
	var preciofinal;

	preciofinal= precio*1.21;*/


 /*var porciento;
 var precio=100;
 var aumento;
 var preciofinal;
 aumento= precio *0.21;
preciofinal= precio + aumento;*/
	
}
