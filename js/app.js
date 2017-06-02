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