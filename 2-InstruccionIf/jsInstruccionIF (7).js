function Mostrar()
{
//tomo la edad  
var edad;
var estado;

edad= document.getElementById('edad').value;
estado= document.getElementById('estadoCivil').value;

if (estado!="Soltero"== edad<18) 
{
	alert("Es muy chico para NO ser soltero");
}
	


}//FIN DE LA FUNCIÓN