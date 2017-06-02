/*
 * Archivo principal de JS
 */

 (function main(){
	var boxes = Array.from(document.getElementsByClassName("imagenes"));
	var portfolio = document.getElementById("portfolio");

	var modal, bodyModal, close, img, titulo, tituloText, star, contenido, contenidoTexto;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal = document.createElement("div");
			modal.classList.add("box-services-modal");
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);

			titulo = document.createElement("div");
			tituloText = document.createTextNode("PROJECT TITLE");
			titulo.classList.add("titulo");
			titulo.appendChild(tituloText);
			modal.appendChild(titulo);

			star = document.createElement("hr");
			star.classList.add("estrellita");
			titulo.appendChild(star);

			contenido = document.createElement("p");
			contenido.classList.add("contenido");
			contenidoTexto = document.createTextNode("Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!");
			contenido.appendChild(contenidoTexto);
			modal.appendChild(contenido);

			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "https://www.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png");
			close.appendChild(img);
			modal.appendChild(close);
			portfolio.appendChild(modal);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
				portfolio.removeChild(modal);
			});
		});		
	});
})();



document.getElementById("btn-send").addEventListener("click", function(){
//Llamamos los valores de los inputs
	event.preventDefault(); //previene que la página salte al inicio

	var inputNombre = document.getElementById("value-nombre");
	var inputEmail = document.getElementById("value-email");
	var inputFono = document.getElementById("value-fono");
	var inputTexto = document.getElementById("value-texto");

	

	if (validarNombre(inputNombre)){
		if(validarEmail(inputEmail)){
			if(validarFono(inputFono)){
				if (validarTexto(inputTexto)){
				alert("Gracias por ingresar su información de contacto");
				}
			}
		}
	}
})


var mensajito, mensajitoTexto;
//Funciones de validacion
function validarNombre(inputNombre) {   
	var letrasNombre = /^[A-Za-z]+$/;  
	if(inputNombre.value.match(letrasNombre)){  
		return true;  
	} else {  
		/*mensajito = document.createElement("div");
		mensajitoTexto = document.createTextNode("Please enter your name");
		mensajito.appendChild(mensajitoTexto);
		inputNombre.appendChild(mensajito); */
		inputNombre.value = ""; 
		alert("Please enter your name");
		inputNombre.focus();  
		return false;  
	}  
} 


function validarEmail(inputEmail){  
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(inputEmail.value.match(formatoCorreo)){  
		return true;  
	} else {  
		inputEmail.value = "";
		alert("Please enter your email address");  
		inputEmail.focus();  
		return false;  
	}  
} 

function validarFono(inputNumber){
	var fono = /^[0-9]{9,11}$/;
	if(inputNumber.value.match(fono)){
		inputNumber.value = "";
		return true;
	}else{
		inputNumber.value = "";
		alert("Please enter your phone number");  
		inputNumber.focus();  
		return false; 
	}
}

function validarTexto(inputTexto){
	var valueTexto = inputTexto.value.length;
	if(valueTexto == 0){
		inputTexto.value = "";
		alert("Please enter a message");
		inputTexto.focus();
		return false;
	} else{
		return true;
	}
}