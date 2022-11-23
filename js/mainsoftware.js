
	
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
	var ocho = RegExp("(8)");
	var regresar = RegExp("(9)");

	
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
	  if (regresar.test(cadena)==true) {
		cod = 11;
	  };
	  if (ocho.test(cadena)==true) {
		cod = 12;
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
			mensaje = "Toxi:Con cual de las siguientes opciones te puedo  ayudar? \n\r 1) ¿Qué es software? \n 2) ¿Cómo puedo hacer una particion de disco?\n3) ¿Cómo instalar office?\n4) ¿Cómo actualizar mi windows?\n5) ¿Cómo saber cuales son los componentes de mi computadora?\n6)¿Cómo restaurar mi windows a un punto anterior?\n7) ¿Cómo borrar los archivos temporales de mi computadora?\n8) ¿Cómo eliminar virus de mi computadora?\n9) volver  ";
	   

        break;

		case 3:
			mensaje ="El software  son los programas informáticos que hacen posible la ejecución de tareas específicas dentro de un computador. Por ejemplo, los sistemas operativos, aplicaciones, navegadores web, juegos o programas. ";
			window.open("software.html#1" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;

		case 5:
			mensaje ="Abra Administración de discos. Seleccione el disco desde el cual desea crear una partición. Haga clic con el botón secundario en el espacio No particionado en el panel inferior y seleccione Nuevo volumen simple. Ingrese el tamaño, haga clic en Siguiente y listo.";
			window.open("software.html#2" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 6:
			mensaje =  "Para instalar Office, intente iniciar sesión directamente en la página de Microsoft 365 Software en su lugar. Seleccione el idioma y la versión de bits que quiera instalar (los usuarios de PC pueden elegir entre 32 y 64 bits) y, luego, haga clic en Instalar";
			window.open("software.html#3" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 7:
			mensaje ="Si quieres instalar la actualización ahora, seleccione Inicio > Configuración > Actualización y seguridad > Windows Update y luego elige Buscar actualizaciones. Si las actualizaciones están disponibles, instalarlas";
			window.open("software.html#4" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 8:
			mensaje ="Abre la ventana de Ejecutar con el comando Control + R o escribiendo ejecutar en el buscador de Windows. Una vez nos aparezca la ventana, solo tendremos que escribir en ella «msinfo32» y pulsar aceptar o enter. Hecho esto nos aparecerá en pantalla una nueva ventana con toda lainformación de nuestro hardware.";
			window.open("software.html#5" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 9:
			mensaje ="Restaurar desde un punto de restauración del sistema en el cuadro de búsqueda de la barra de tareas, escribe panel de control y, después, selecciónalo en la lista de resultados."; 
			window.open("software.html#6" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;
		case 10:
			mensaje =" Presiones la tecla Windows + R > escriba %temp% > borre todo los archivos que aparecen y tendras mejor rendimiento en la computadora"; 
			window.open("software.html#7" , "ventana1" , "width=3120,height=3300,scrollbars=NO");

        break;
		case 11:
			mensaje =" volviendo."; 
			window.open("siete.html" , "ventana1" , "width=3120,height=3300,scrollbars=NO");

        break;
		case 12:
			mensaje ="Toca pasar a la acción. Tiene un equipo infectado y, juntos, vamos a eliminar todos los virus que lo afectan y lo vamos a devolver a un estado operativo. El modo más fiable de eliminar un malware como los virus es utilizar una herramienta de eliminación de virus dedicada. Esta aplicación analizará el equipo automáticamente para buscar cualquier rastro de infección y usted se librará de tener que aprender cómo se eliminan los virus de forma manual. A continuación mostramos cómo eliminar malware de Windows 10, aunque puede aplicar los mismos principios básicos a las versiones más antiguas, de ser necesario. Pero antes, una nota rápida: Utilizar software antiguo supone un riesgo de seguridad, ya que las actualizaciones y parches a menudo reparan vulnerabilidades de las versiones previas. Si su equipo se conecta a Internet, debería contar con el software más reciente disponible"; 
			window.open("software.html#8" , "ventana1" , "width=3120,height=3300,scrollbars=NO");

        break;
		
	  
        case 4:
		if (r == 1) {
			mensaje = "Es una pregunta muy personal";
			};
			if (r == 2) {
			mensaje = "Demasiado joven para ti";
			};
			if (r == 3) {
			mensaje = "Tengo toda la edad que te puedas imaginar!!!";
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
	 
