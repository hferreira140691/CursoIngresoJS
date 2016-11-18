function ()
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

precio1 = document.getElementById('precio1').value;
precio2 = document.getElementById('precio2').value;
precio3 = document.getElementById('precio3').value;

precio1= parseInt(precio1);
precio2= parseInt(precio2);
precio3= parseInt(precio3);

suma= precio1 + precio2 + precio3;
promedio= suma /3;

alert("La Suma es "+ suma + "y el promedio es: " +promedio);
}