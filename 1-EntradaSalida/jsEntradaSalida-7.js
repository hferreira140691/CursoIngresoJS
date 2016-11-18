/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno;
	var numerodos;
	var suma;
		numerouno= document.getElementById('numeroUno').value;
		numerodos= document.getElementById('numeroDos').value;
	/*suma= parseInt(numerouno)+parseInt(numerodos);*/
		numerouno= parseInt(numerouno);
		numerodos= parseInt(numerodos);
		suma= numerouno+numerodos; 
	alert("El resultado es "+suma);
	
}

function restar()
{
	var numerouno;
	var numerodos;
	var resta;
		numerouno= document.getElementById('numeroUno').value;
		numerodos= document.getElementById('numeroDos').value;
	/*suma= parseInt(numerouno)+parseInt(numerodos);*/
		
		resta= numerouno-numerodos; 
	alert("El resultado es "+resta);
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var multiplicar;
		numerouno= document.getElementById('numeroUno').value;
		numerodos= document.getElementById('numeroDos').value;
	/*suma= parseInt(numerouno)+parseInt(numerodos);*/
		
		multiplicar= numerouno*numerodos; 
	alert("El resultado es "+multiplicar);
}

function dividir()
{
	var numerouno;
	var numerodos;
	var dividir;
		numerouno= document.getElementById('numeroUno').value;
		numerodos= document.getElementById('numeroDos').value;
	/*suma= parseInt(numerouno)+parseInt(numerodos);*/
		
		dividir= numerouno/numerodos; 
	alert("El resultado es "+dividir);
}

/* EL simbolo mas ademar de sumar concatena 
por eso se tiene que utilizar el parseint en la suma*/
