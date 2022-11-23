
	
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

	var sh = RegExp("9");

	
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

	  
	  if (sh.test(cadena)==true) {
			cod = 11;	
	  };	

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
			mensaje = "Toxi:¿Con cual de las siguientes opciones te puedo  ayudar? \n\r 1) SERVICIO TÉCNICO HARDWARE \n 2) SERVICIO TÉCNICO SOFTWARE";
	   

        break;

		case 3:
			mensaje ="No entiendo lo que me tratas de decir";
			window.open("hardware.html" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
        break;

		case 5:
			mensaje ="Toca las teclas WIN+R en tu ordenador para abrir Ejecutar > Escribe Dxdiag en dicha ventana y pulsa enter, a continuación veras una ventana con los componentes de tu computadora";
			window.open("software.html" , "ventana1" , "width=3120,height=3300,scrollbars=NO");
	  
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
	 
