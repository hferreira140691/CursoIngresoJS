function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta=="si")

	{
	
	numero= prompt("Ingrese un numero");
	numero=parseInt(numero);
	if(numero>0)
	{
		positivo= positivo+numero;
	}else
		{
			negativo=negativo*numero;
		}

	contador++;
	respuesta=prompt("desea continuar, si o no");
	
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN