/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function (){
    try {
       if(window.localStorage){
           if(window.localStorage.getItem("mensagem")!== null){
               document.getElementById("txtMensagem").value = window.localStorage.getItem("mensagem");
           }
           
           if(window.localStorage.getItem("assunto")!== null){
               document.getElementById("txtAssunto").value = window.localStorage.getItem("assunto");
           }
       }
    }catch (e){
        document.getElementById("btnSalvar").style.display = "none";
    }
};

document.getElementById("btnSalvar").addEventListener("click", salvar);

function salvar(){
	var mensagem = document.getElementById("txtMensagem").value;
	var assunto = document.getElementById("txtAssunto").value;			

	if(assunto.length == 0) {
		alert('Digite o assunto');
	} else if(mensagem.length == 0){
		alert('Mensagem vazia');
	} else {
		window.localStorage.setItem("mensagem", mensagem);
		window.localStorage.setItem("assunto", assunto);
		alert('Rascunho salvo com sucesso!');
	}
}

document.getElementById("btnEnviar").addEventListener("click", enviarMensagem);

function enviarMensagem() {
    var mensagem = document.getElementById("txtMensagem").value;
    var assunto = document.getElementById("txtAssunto").value;

    if (assunto.length == 0) {
        alert('Digite um assunto antes de continuar!');
    } else if (mensagem.length == 0) {
        alert('Sua mensagem está vazia! Digite sua mensagem antes de enviar.');
    } else {
        window.location.href = "mailto:yurioliveira.abel@gmail.com?Subject=" + assunto + "&Body=" + mensagem + "\n";
        document.getElementById("txtMensagem").value = "";
        document.getElementById("txtAssunto").value = "";
        window.localStorage.clear();
    }
}

document.getElementById("btnSalvarSessao").addEventListener("click", salvarSessao);

function salvarSessao(){
	var mensagem = document.getElementById("txtMensagem").value;
	var assunto = document.getElementById("txtAssunto").value;			

	if(assunto.length == 0) {
		alert('Digite o assunto');
	} else if(mensagem.length == 0){
		alert('Mensagem vazia');
	} else {
		window.sessionStorage.setItem("mensagem", mensagem);
		window.sessionStorage.setItem("assunto", assunto);
		alert('Rascunho salvo com sucesso!');
	}
}
