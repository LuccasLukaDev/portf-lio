function addElement(){

    
    var newElement = document.createElement("div");
    newElement.setAttribute(`id`, `${x}`);
    newElement.textContent = `Novo Campo id:${x}`;

    var inputOutros = document.getElementById("labelOutros");
    inputOutros.appendChild(newElement);

    for (var i = 0; i < inputOutros.childNodes.length; i++){
        var oChild = inputOutros.childNodes[i];
        if(oChild.nodeName === "DIV"){
            alert(oChild.id);
        }else if(oChild.nodeType === Node.TEXT_NODE){
            alert(oChild.textContent);
        }
    }

    x++;

    //<div id="labelOutros">Outras rendas desse mês (OPCIONAL):</div><input id="inputOutrosG" placeholder="Digite aqui mamasita :3" value="0.00"><br>
    //<button onclick="addElement()">addElement</button>


    var novo = document.createElement("DIV");
    novo.setAttribute("id: ", `${x}`);
    novo.textContent("conteudo");

    var element = document.getElementById("nodeID");
    element.appendChild(novo);


}
