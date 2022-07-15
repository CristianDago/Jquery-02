//desafio 01

function BordeColor(){
var Imagen = document.querySelector ('#imagen')		
Imagen.classList.toggle("BordeRojo")
	
}

// desafio 02


function Resultados(){
	
var StikerUno = document.querySelector ('#Stickers01');
var StikerDos = document.querySelector ('#Stickers02');
var StikerTres = document.querySelector ('#Stickers03');
var NumeroStiker = document.querySelector ('#NumeroStiker');
var	Mensaje = document.querySelector ('#Mensaje');
	
var TotalStiker = (Number(StikerUno.value) + Number(StikerDos.value) + Number(StikerTres.value));

NumeroStiker.innerHTML = TotalStiker
	
if (TotalStiker <= 10){
	
Mensaje.innerHTML = "Puedes llevarlos"
	
} else {

Mensaje.innerHTML = "Llevas demasiados stickers"	
	
}
		
}	
	

// Desafío 3

function Password(){

var NumeroUno = document.querySelector ('#NumeroUno');	
var NumeroDos = document.querySelector ('#NumeroDos');	
var NumeroTres = document.querySelector ('#NumeroTres');
var Contrasena = NumeroUno.value + NumeroDos.value + NumeroTres.value;
var ResultadoUno = document.querySelector ('#prueba');

	
if(Contrasena == 911){
	
ResultadoUno.innerHTML = "contraseña correcta";		
	
} else if (Contrasena == 714){
	
ResultadoUno.innerHTML = "contraseña correcta";	
	
} else {
	
ResultadoUno.innerHTML = "contraseña incorrecta";		
	
}


}


