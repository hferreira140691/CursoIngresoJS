


function importe()
{
	var importe;
	var resultado;
	var porcentaje;
	importe = prompt ("Por favor ingrese un Importe");
	importe= parseInt(importe);
	porcentaje= importe *0.21;
	resultado= importe + porcentaje;
	alert("La suma del 21% es : "+ resultado);
}