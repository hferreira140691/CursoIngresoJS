function Mostrar()
{
//tomo la edad  
var edad;

edad= document.getElementById('edad').value;

	/*
	if (edad>=18) // || or
	{
		alert("Es mayor de edad");

	}

	if (edad>=13 && edad<=17) 
	{
		alert("Es Adolescente");
	}
	if (edad<13) 
	{
	 alert("Es Niño");	
	}*/
	if (edad<13) 
	{
		alert("Es Niño");
	}
	else
		{	if (edad>17) 
			{
				alert("Es mayor de edad");
			}
			else
			{
				alert("Es Adolescente");
			}

	}
}//FIN DE LA FUNCIÓN