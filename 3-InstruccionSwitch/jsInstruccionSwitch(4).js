function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
	alert("Tiene 28 Dias");
	break;

	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":

	alert("Tiene 31 dias");
	break;
	
	default:
	alert("tiene 30 dias ");
}



//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN