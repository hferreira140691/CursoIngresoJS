function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';



	

	while(respuesta=="si")

	{
	
	numero= prompt("Ingrese un numero");
	numero=parseInt(numero);
	acumulador= acumulador+numero;
	contador++;
	respuesta=prompt("desea continuar, si o no");

	

	//console.log(contador);
	//contador++;
	

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN