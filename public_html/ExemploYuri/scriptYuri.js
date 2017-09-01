/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function (){
    try{
        if(window.localStorage){
            if(window.localStorage.getItem("veiculo")!== null){
                document.getElementById("txtVeiculo").value = window.localStorage.getItem("veiculo");
            }
            if(window.localStorage.getItem("veiculo2")!== null){
                document.getElementById("txtVeiculo2").value = window.localStorage.getItem("veiculo2");
            }
            
            if (window.localStorage.getItem("preco2") !== null) {
                document.getElementById("txtPreco2").value = window.localStorage.getItem("preco2");
            }            
            if(window.localStorage.getItem("preco")!== null){
                document.getElementById("txtPreco").value = window.localStorage.getItem("preco");
            }
        }
    }catch(e){
        document.getElementById("btnCompara").style.display = "none";
    }
};

document.getElementById("btnSalvar").addEventListener("click", salvar);

function salvar() {
    var veiculo = document.getElementById("txtVeiculo").value;
    var preco = document.getElementById("txtPreco").value;
    var veiculo2 = document.getElementById("txtVeiculo2").value;
    var preco2 = document.getElementById("txtPreco2").value;
    
    if (veiculo.length == 0) {
        alert('Digite o veiculo');
    } else if (preco.length == 0) {
        alert('Insira um Preço');
    } else if(veiculo2.lenght == 0){
        alert('Insira um veiculo')
    } else if(preco.lenght == 0){
        alert('Insira um preço');
    }else{
        window.localStorage.setItem("veiculo", veiculo);
        window.localStorage.setItem("preco", preco);
        window.localStorage.setItem("preco2", preco2);
        window.localStorage.setItem("veiculo2", veiculo2);
        alert('Veiculo salvo com sucesso!');
    }
}

document.getElementById("btnCompara").addEventListener("click", compara);

function compara() {
    
    var preco = document.getElementById("txtPreco").value;
    var preco2 = document.getElementById("txtPreco2").value;
    var result;
    var car;

    if (preco.length == 0) {
        alert('Digite o preço');
    } else if (preco2.lenght == 0) {
        alert('Digite o preço 2');
    } else {
        result = preco-preco2;
        if(preco<preco2){
            car = document.getElementById("txtVeciulo").value
        }else{
            car = document.getElementById("txtVeiculo2").value;
        }
        document.getElementById("txtResult").value = result;
        document.getElementById("txtCarro").value = car;
        
        window.localStorage.clear();
    }
}

