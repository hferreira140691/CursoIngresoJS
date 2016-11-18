/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno= document.getElementById('PrecioUno').value;
	PrecioDos= document.getElementById('PrecioDos').value;
	PrecioTres= document.getElementById('PrecioTres').value;

	PrecioUno= parseInt(PrecioUno);
	PrecioDos= parseInt(PrecioDos);
	PrecioTres= parseInt(PrecioTres);
	alert(PrecioUno+PrecioDos+PrecioTres);
}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var total;

	PrecioUno= document.getElementById('PrecioUno').value;
	PrecioDos= document.getElementById('PrecioDos').value;
	PrecioTres= document.getElementById('PrecioTres').value;

	PrecioUno= parseInt(PrecioUno);
	PrecioDos= parseInt(PrecioDos);
	PrecioTres= parseInt(PrecioTres);
	total= (PrecioUno+PrecioDos+PrecioTres)/3;
	alert(total);
	
}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var parcial
	var total;


	PrecioUno= document.getElementById('PrecioUno').value;
	PrecioDos= document.getElementById('PrecioDos').value;
	PrecioTres= document.getElementById('PrecioTres').value;

	PrecioUno= parseInt(PrecioUno);
	PrecioDos= parseInt(PrecioDos);
	PrecioTres= parseInt(PrecioTres);
	parcial=(PrecioUno+PrecioDos+PrecioTres);
	total= (parcial+parcial*21/100);
	alert(total);
}