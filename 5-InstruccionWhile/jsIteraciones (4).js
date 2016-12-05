function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero<0 || numero>10)
	{
		numero = prompt("El numero no es correcto");
	}
	alert("El numero ingresado es correcto");

}//FIN DE LA FUNCIÓN