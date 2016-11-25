function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random= Math.floor((Math.random() * 10) + 1);
	if(random>8)
	{
		alert("Excelente " + "nota= " +random);

	}
	else 
		{
			if(random>4 && random<9)
			{
				alert("Aprobo "+ "nota= " +random);

			 }
			 else
			 {
			 	alert("Vamos la proxima se puede "+ "nota= "+random) ;
			 }
		}	

}//FIN DE LA FUNCIÓNs