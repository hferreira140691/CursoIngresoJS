/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var preciobruto;
 	var preciofinal;
 	var impuesto;

 	marca=document.getElementById('Marca').value;
 	cantidad=document.getElementById('Cantidad').value;
 	console.log(marca+cantidad);
 	preciobruto=cantidad*35;
 	preciofinal=preciobruto;
 	console.log("precio bruto: "+preciobruto);
 	if(cantidad>5)
 	{
 		preciofinal=preciobruto*0.5;
 	}

 	switch(cantidad)
 {

 	case "5": 
	 	
 		if(marca=="ArgentinaLuz")
 		{
 		 	preciofinal=preciobruto*0.6;
 		}else
 		{
 			preciofinal=preciobruto*0.7;
 		}
 	break;	
		 

	 case "4":
 	//if(cantidad==4)

 	
 		if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
 		{
 		 	preciofinal=preciobruto*0.75;
 		}else
 		{
 			preciofinal=preciobruto*0.8;
 		}	
 	break;

 	case"3":

 	if(cantidad==3)
 	{
 		if(marca=="ArgentinaLuz")
 		{
 		 	preciofinal=preciobruto*0.85;
 		}else
 		{
 			if(marca=="FelipeLamparas")
 			{
 				preciofinal=preciobruto*0.90;
 			}
 			else{
 				preciofinal=preciobruto*0.95;

 			}
 		}	
 	}
 	break
 }

 	if(preciofinal>120){

 		impuesto=preciofinal*0.10;
 		preciofinal=preciofinal*1.10;
 		alert("Usted pago: "+impuesto + "De IIBB");
 	}

 	document.getElementById('precioDescuento').value= preciofinal;
	console.log("precio final: "+preciofinal);




}

