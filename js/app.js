/*
 * Archivo principal de JS
 */

 (function main(){
	var boxes = Array.from(document.getElementsByClassName("imagenes"));
	var portfolio = document.getElementById("portfolio");

	var modal, bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal = document.createElement("div");
			modal.classList.add("box-services-modal");
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			
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