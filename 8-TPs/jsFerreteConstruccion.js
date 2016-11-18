/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Largo;
	var Ancho;
	var total;
	Largo= document.getElementById('Largo').value;
	Ancho= document.getElementById('Ancho').value;

	Largo= parseInt(Largo);
	Ancho= parseInt(Ancho);
	total= (Largo + Ancho)*3;
	alert("Se debe Comprar: " +total);


}
function Circulo () 
{
	var Radio;
	var total;
	var circun;
	Radio= document.getElementById('Radio').value;
	Radio= parseInt(Radio);
	circun= Radio*3.1416*2;
	total= circun * 3;
	alert("Se debe Comprar: " +total);
	
}
function Materiales () 
{
	var Largo;
	var Ancho;
	var cemento;
	var cal;
	var Superficie;

	Largo= document.getElementById('Largo').value;
	Ancho= document.getElementById('Ancho').value;

	Largo= parseInt(Largo);
	Ancho= parseInt(Ancho);
	Superficie= Largo * Ancho;
	cemento= Superficie * 2;
	cal= Superficie * 3;

	alert("Se debe Comprar de cemento: "+ cemento +" y de cal: " + cal);
}