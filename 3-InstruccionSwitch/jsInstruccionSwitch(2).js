function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

console.log(mesDelAño);

switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert("Falta para el invierno CAPO");

	break;

	case "Julio":
	case "Agosto":
	alert("Abrigate!!!");

	break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	alert("Ya pasamos el frio, ahora calor!!!");

	break;


}


alert (mesDelAño);




}//FIN DE LA FUNCIÓN