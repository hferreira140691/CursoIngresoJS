function importe()
{
	var importe;
	var resultado;
	var porcentaje;
	importe = prompt ("Por favor ingrese un Importe");
	importe= parseInt(importe);
	porcentaje= importe *0.25;
	resultado= importe - porcentaje;
	alert("El descuento por fin de temporada es: "+ resultado);
}