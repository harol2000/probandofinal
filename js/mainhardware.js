
	
	//Declaración de variables
    var cadena, cod, respuesta,cod1;
	var textarea = document.getElementById('areaChat');
	//Declaración de expresiones
    var tener = RegExp("(TIENE|TIENES|TENGO|TENÉS|TENES)");
    var edad = /AÑOS/;
	var saludar = RegExp("(HOLA|QUE TAL|CÓMO VA|COMO VA|CÓMO VAS|COMO VAS)");
	var bien = RegExp("(AYUDA|HELP)");
	var uno = RegExp("(1)");
	var dos = RegExp("(2)");
	var tres = RegExp("(3)");
	var cuatro = RegExp("(4)");
	var cinco = RegExp("(5)");
	var seis = RegExp("(6)");
	var siete = RegExp("(7)");
	var ocho = RegExp("8");
	var nueve = RegExp("9");
	var volver = RegExp("10");
	
	var txtPregunta1 = document.querySelector("#txtPregunta");
	var btnsend1 = document.querySelector("#btnsend");
	var send = document.querySelector("#btnsend");
	send.addEventListener("click", () => evaluarExpresion());
	txtPregunta1.addEventListener("keyup", (event) => {
		if (event.keyCode === 13) {
			evaluarExpresion();
		}
	  });

    function evaluarExpresion() {

      cadena = document.getElementById("txtPregunta").value;
	  escribirChat(cadena);
      cadena = cadena.toUpperCase();
	  document.getElementById("txtPregunta").value="";
	  
	  cod=0;
	  
/*
      document.getElementById("resultado1").innerHTML= tener.test(cadena);
      document.getElementById("resultado2").innerHTML= edad.test(cadena);
*/ 

	  
	

	  if (saludar.test(cadena)==true) {
		cod = 1;
	  };
	    if (bien.test(cadena)==true) {
		cod = 2;
	  };
      if (tener.test(cadena)==true && edad.test(cadena)==true ) {
        cod = 4;
      }; 
	  if (uno.test(cadena)==true) {
		cod = 3;
	  };
	  if (dos.test(cadena)==true) {
		cod = 5;
	  };
	  if (tres.test(cadena)==true) {
		cod = 6;
	  };
	  if (cuatro.test(cadena)==true) {
		cod = 7;
	  };
	  if (cinco.test(cadena)==true) {
		cod = 8;
	  };
	  if (seis.test(cadena)==true) {
		cod = 9;
	  };
	  if (siete.test(cadena)==true) {
		cod = 10;
	  };
	  if (ocho.test(cadena)==true) {
		cod = 11;
	  };
	  if (nueve.test(cadena)==true) {
		cod = 12;
	  };
	  if (volver.test(cadena)==true) {
		cod = 13;
	  };
	//Lama a responder
		setTimeout(responder, 1000);
      //responder();
    }

    function responder() {
	var r = Math.floor((Math.random() * 3) + 1);
	console.log("random " + r);
	console.log("cod " + cod);
	var mensaje;






      switch (cod) {

		

	  case 1:
			if (r == 1) {
			mensaje = "Toxi:Hola! Escribe help";
			};
			if (r == 2) {
			mensaje = "Toxi:Cómo te puedo ayudar? Escribe ayuda ";
			};
			if (r == 3) {
			mensaje = "Toxi:Hola, soy Toxibot, en que te puedo ayudar? Escribe help";
			};
			
        break;
		
		case 2:
			mensaje = "Toxi:¿Con cual de las siguientes opciones te puedo  ayudar? \n\r 1) ¿Qué es Hardware? \n 2) ¿Qué es manenimiento correctivo?\n3) ¿Qué es mantenimiento preventivo?\n4) ¿Cómo formatear mi computadora?\n5) ¿Cómo hacer una limpieza a mi computadora?\n6)¿Por qué no tengo acceso a internet?\n7) ¿Cómo cambiar la pasta térmica?\n8) ¿Para que sirve el estabilizador?\n9) ¿Cómo comunicarme con el soporte técnico?\n10) volver  ";
	   

        break;

		case 3:
			mensaje ="El hardware, equipo o soporte físico en informática se refiere a las partes físicas, tangibles, de un sistema informático, sus componentes eléctricos, electrónicos, electromecánicos.";
			window.open("hardware.html#1" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;

		case 5:
			mensaje ="Se denomina mantenimiento correctivo, aquel que corrige los defectos observados en los equipamientos o instalaciones, es la forma más básica de mantenimiento y consiste en localizar averías o defectos para corregirlos o repararlos.";
			window.open("hardware.html#2" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 6:
			mensaje =  "Se entiende como mantenimiento preventivo de computadoras a todo proceso o tarea relacionada que es realizada al equipo a fin de evitar cualquier posible falla en el sistema o daño de la integridad física de la máquina, a través de ciertos cuidados y revisiones periódicas que aseguran que se encuentre en buen estado.";
			window.open("hardware.html#3" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 7:
			mensaje ="Paso 1: Back up Primero, hacemos una copia de seguridad; cuando formateamos borramos todos los archivos de manera permanente. Paso 2: instalar Windows Si queremos que el equipo inicie desde CD o DVD Windows, tenemos que configurar para que arranque desde la unidad de disco Continuamos el proceso. Elegimos el idioma, iniciamos, esperamos que cargue y, finalmente, aceptamos la licencia de Windows. Vamos a ver que aparecen dos opciones: actualizar una versión de Windows e instalar Windows desde cero. Clickeamos en la segunda opción si queremos formatear.Paso 3: formatear Elegimos la unidad que queremos formatear, debe ser donde instalamos Windows Paso 4: ¡listo! Una vez finalizado el proceso de instalación la PC iniciará como nueva. Deberás elegir nuevamente el nombre de usuario, contraseña, fecha y zona horaria.";
			window.open("hardware.html#4" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 8:
			mensaje ="La tarea de limpiar el PC busca eliminar y prevenir lo siguiente: Deberes de mantenimiento 1.Eliminar polvo. El polvo obstruye la ventilación de la caja, colándose en los disipadores, ventiladores de la GPU, fuente de alimentación o cualquier ventilador de la caja. 2.Preservar el circuito de aire. Toda caja tiene un circuito de aire que hay que cuidar para que ésta expulse el aire caliente bien.	3.Reducir o prevenir altas temperaturas. Como consecuencia de los dos puntos anteriores, las temperaturas suben, lo que es malo para los componentes aunque éstos estén hechos para resistir a ellas. Herramientas que necesitaremos Paño microfibra Destornillador Aire comprimido Pinceles Alcohol y bastoncillos Aspirador de mano";
			window.open("hardware.html#5" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 9:
			mensaje ="Normalmente tener una conexión limitada, se debe a una mala colocación del router o que las líneas del servidor estén saturadas y por eso 	deja de funcionar de manera instantánea y sin avisar el acceso 	a internet. Lo mejor que puedes hacer, es reiniciar el router y el dispositivo y comenzar de nuevo";
			 
			window.open("hardware.html#6" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 10:
			mensaje ="Cambiar la pasta térmica del procesador es muy sencillo, solo tenemos que apagar el PC  y podamos retirar el ventilador con facilidad. Limpiamos la vieja pasta térmica con un papel humedecido ligeramente en alcohol, secamos, aplicamos la pasta nueva y volvemos a montar el ventilador."; 
			window.open("hardware.html#7" , "ventana1" , "width=3120,height=3300,scrollbars=NO");

        break;
		case 11:
			mensaje ="Un estabilizador, también conocido como regulador de voltaje, es un dispositivo diseñado para mantener un flujo de corriente estable para proteger a los aparatos eléctricos conectados a él contra problemas como sobrevoltaje, caída de tensión y variaciones de voltaje."; 
			window.open("hardware.html#8" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
		break;
		case 12:
			mensaje ="Por favor verifique los pasos que tiene que hacer a continuación"; 
			window.open("hardware.html#9" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
			window.open("https://wa.me/51932670446" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
			break;
			case 13:
				mensaje ="volviendo"; 
				window.open("siete.html" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
				break;			
			

	  
        case 4:
		if (r == 1) {
			mensaje = "Es una pregunta muy personal";
			};
			if (r == 2) {
			mensaje = "Demasiado joven para ti";
			};
			if (r == 3) {
			mensaje = "Tengo toda la edad que te puedas imaginar!!";
			};

         break;
        
		case 5:

        break;
        default:
		mensaje = "Toxi:No entiendo lo que me estás diciendo, por favor escribe 'ayuda'";

      }
      //document.getElementById("respuesta").innerHTML = mensaje;
	  escribirChat(mensaje);
    }



	
	function escribirChat (texto) {
		document.getElementById("areaChat").value  += texto + "\r";
		textarea.scrollTop = textarea.scrollHeight;
	}

	//boton limpiar
	function eraseText() {
		document.getElementById("areaChat").value = "";
	}
	 
