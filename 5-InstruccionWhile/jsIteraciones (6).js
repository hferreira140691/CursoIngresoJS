function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;

	

	while(contador!=5)

	{
	numero= prompt("Ingrese un numero");
	numero=parseInt(numero);
	acumulador= acumulador+numero;
	console.log(contador);
	contador++;
	

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN