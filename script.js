(function () {
	//Clase player-------------------------------------
	var Player = function (o) {
		this.opcionUsuario = o;
	};
	Player.prototype.ganaste = function() {
		alert("Ganaste!!"); 
	};
	Player.prototype.empate = function() {
		alert("Empate!!");
	};
	Player.prototype.perdiste = function() {
		alert("Perdiste!!");
	};
	Player.prototype.otraVez = function() {
		if (confirm("Quieres volver a intentarlo??") == true) 
			{
				location.reload(true);
			}
			else 
			{
				alert("Hasta pronto!!");
			}
	};

	//Función que genera numeros aleatorios-------------
	function aleatorio(min,max)
	{
	    var numero = Math.floor( Math.random() * (max - min + 1) + min );
	    return numero;
	}

	//Funcion principal---------------------------------
	document.addEventListener("DOMContentLoaded", function (){

		//objeto usuario
		var usuario = new Player(prompt("Que eliges? \n\nPiedra:0 \n\nPapel:1 \n\nTijera:2 \n\nLagarto:3 \n\nSpock:4", 0));
		var opciones = ["Piedra","Papel","Tijera","Lagarto","Spock"];
		var opcionMaquina = aleatorio(0,4);

		//si el usuario no intruduce una opcion correcta no empieza el juego.
		if (opciones[usuario.opcionUsuario] === undefined) 
		{
			alert("Introduce una opcion correcta");
			usuario.otraVez();
		}
		//Aqui se introdujo una opcion correcta se procede a jugar.
		else
		{
			alert("Elegiste " + opciones[usuario.opcionUsuario]);
			alert("Javascript eligió " + opciones[opcionMaquina]);

			if (opcionMaquina == usuario.opcionUsuario) 
			{
				usuario.empate();
				usuario.otraVez();
			}
			else if ((opciones[usuario.opcionUsuario] === "Piedra" && opciones[opcionMaquina] === "Tijera")||
					 (opciones[usuario.opcionUsuario] === "Piedra" && opciones[opcionMaquina] === "Lagarto")||
					 (opciones[usuario.opcionUsuario] === "Papel" && opciones[opcionMaquina] === "Piedra")||
					 (opciones[usuario.opcionUsuario] === "Papel" && opciones[opcionMaquina] === "Spock")||
					 (opciones[usuario.opcionUsuario] === "Tijera" && opciones[opcionMaquina] === "Papel")||
					 (opciones[usuario.opcionUsuario] === "Tijera" && opciones[opcionMaquina] === "Lagarto")||
					 (opciones[usuario.opcionUsuario] === "Lagarto" && opciones[opcionMaquina] === "Spock")||
					 (opciones[usuario.opcionUsuario] === "Lagarto" && opciones[opcionMaquina] === "Papel")||
					 (opciones[usuario.opcionUsuario] === "Spock" && opciones[opcionMaquina] === "Tijera")||
					 (opciones[usuario.opcionUsuario] === "Spock" && opciones[opcionMaquina] === "Piedra")
					) 
			{
				usuario.ganaste();
				usuario.otraVez();
			}
			else
			{
				usuario.perdiste();
				usuario.otraVez();
			}
		}
	}); 
}());


