/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var unavariable="datos";
	console.log("primer mensaje")
	var otravariable;
	console.info("mensaje:",unavariable);
	
	var minombre;
	var miedad;
	minombre= document.getElementById('elNombre').value;
	console.info("linea final:",unavariable);
	miedad= document.getElementById('laEdad').value;
	alert("usted se llama " +minombre+ " y tiene "+miedad+" años");


}

