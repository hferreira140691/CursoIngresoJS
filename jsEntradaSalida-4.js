/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var mitexto;
	mitexto = prompt ("Por favor ingrese un texto");
	document.getElementById("elNombre").value=mitexto;
}

