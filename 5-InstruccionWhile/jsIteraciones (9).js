function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var Max =0;
	var Min =0;

	while(respuesta!='no')
	{
		contador++;
		numero= prompt("Ingrese un numero");
	   	numero=parseInt(numero);

	   	if(contador==1)
	   	{
	   		Max=numero;
	   		Min=numero;
	   	}else
	   	{
	   		if(numero<Min)
	   		{
	   			Min=numero;
	   		}
	
	   		if(numero>Max)
	   		{
	   			Max=numero;
	   		}
		}

		respuesta=prompt("desea continuar, si o no");

	
	}

	
	document.getElementById('maximo').value=Max;
	document.getElementById('minimo').value=Min;



}//FIN DE LA FUNCIÓN