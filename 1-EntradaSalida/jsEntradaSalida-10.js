/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var descuento;
	var total

	importe=document.getElementById('importe').value;
	descuento= importe *25/100;
	importe=parseInt (importe);
	descuento=parseInt(descuento);
	total= importe-descuento;
	document.getElementById('resultado').value =total;

}
