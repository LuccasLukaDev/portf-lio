var x = 0; //iteração id botão
var y = 0; //iteração id input
var z = 0; //iteração id label
var d = 0; //iteração id div
var valorTotalAdicionado = 0.00;

var element = [];
var inputStringValueIterator = [];
let notEdited= false;

function mkBudget(){


    labelGenerator(element);
    valorTotalAdicionado = inputValueGetter();
    var valorTotalAdicionadoFormatted = valorTotalAdicionado.toFixed(2);

    //Contas
    const luz = document.getElementById("inputLuz").value;
    const agua = document.getElementById("inputAgua").value;
    const telefone = document.getElementById("inputTelefone").value;
    const internet = document.getElementById("inputInternet").value;
    const aluguel = document.getElementById("inputAluguel").value;
    const medico = document.getElementById("inputMedico").value;
    const dentista = document.getElementById("inputDentista").value;
    

    totalContas = (parseFloat(luz) + parseFloat (agua) + parseFloat (telefone) + parseFloat (internet) + parseFloat (aluguel) + parseFloat (medico) + parseFloat (dentista)).toFixed(2);

    document.getElementById("Cluz").textContent = `Conta de Luz:.............R$ ${parseFloat(luz).toFixed(2)}`;
    document.getElementById("Cagua").textContent = `Conta de Água:............R$ ${parseFloat(agua).toFixed(2)}`;
    document.getElementById("Ctelefone").textContent = `Conta de Telefone:........R$ ${parseFloat(telefone).toFixed(2)}`;
    document.getElementById("Cinternet").textContent = `Conta de Internet:........R$ ${parseFloat(internet).toFixed(2)}`;
    document.getElementById("Caluguel").textContent = `Valor do Aluguel:.........R$ ${parseFloat(aluguel).toFixed(2)}`;
    document.getElementById("Cdentista").textContent = `Convênio Odontológico:....R$ ${parseFloat(dentista).toFixed(2)}`;
    document.getElementById("Cmedico").textContent = `Convênio Médico:..........R$ ${parseFloat(medico).toFixed(2)}`;


    //Ganhos
    const salario = document.getElementById("inputSalario").value;
    const pensao = document.getElementById("inputPensao").value;
    const outrosG = document.getElementById("inputOutrosG").value;

    totalGanhos = (parseFloat(salario) + parseFloat(pensao)+ parseFloat(outrosG)).toFixed(2);

    document.getElementById("Gsalario").textContent = `Sálario:..................R$ ${parseFloat(salario).toFixed(2)}`;
    document.getElementById("Gpensao").textContent = `Pensão:...................R$ ${parseFloat(pensao).toFixed(2)}`;
    document.getElementById("Goutros").textContent = `Outros:...................R$ ${parseFloat(outrosG).toFixed(2)}`;
    

    



    //Total
    
    totalSobrando = (parseFloat(totalGanhos) - parseFloat(totalContas) - parseFloat(valorTotalAdicionado)).toFixed(2);

    document.getElementById("totalContas").textContent = `Total Contas:.............R$ ${totalContas}`;
    document.getElementById("totalGanhos").textContent = `Total Ganhos:.............R$ ${totalGanhos}`;
    document.getElementById("totalAdicionado").textContent = `Total Adicionados:........R$ ${valorTotalAdicionadoFormatted}`;
    document.getElementById("totalSobrando").textContent = `Total Sobrando:...........R$ ${totalSobrando}`;


    document.getElementById("bordaDentro").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("bordaDentro2").style.display = "flex";
    document.documentElement.scrollTop = 0;
}

function reset(){

    document.getElementById("inputLuz").value="0.00";
    document.getElementById("inputAgua").value="0.00";
    document.getElementById("inputTelefone").value="0.00";
    document.getElementById("inputInternet").value = "0.00";
    document.getElementById("inputAluguel").value = "0.00";
    document.getElementById("inputMedico").value = "0.00";
    document.getElementById("inputDentista").value = "0.00";

    document.getElementById("inputSalario").value = "0.00";
    document.getElementById("inputPensao").value = "0.00";
    document.getElementById("inputOutrosG").value = "0.00";

    document.documentElement.scrollTop = 0;
    document.getElementById("bordaDentro2").style.display = "none";
    document.getElementById("bordaDentro").style.display = "flex";
    document.getElementById("h1").style.display = "flex";
    
    
    var container = document.getElementById("container");
    container.innerHTML = "";

    var finalLine = document.getElementById("finalLine");
    finalLine.innerHTML = "";

    var containerFinal = document.getElementById("containerFinal");
    containerFinal.innerHTML = "";

    notEdited = false;

    luz = 0.00;
    agua = 0.00;
    telefone = 0.00;
    internet = 0.00;
    aluguel = 0.00;
    acordo = 0.00;
    medico = 0.00;
    dentista = 0.00;
    outros = 0.00;
    
    
    salario = 0.00;
    pensao = 0.00;
    outrosG = 0.00;
    

    totalContas = 0.00;
    totalGanhos = 0.00;
    totalSobrando = 0.00;

    z = 0;
    x = 0;
    y = 0;
    d = 0;
    
    element = [];
    inputStringValueIterator = [];
}

function addElements(){

    if(notEdited === false){
        notEdited = true;
        var container = document.getElementById("container");
        var controlDiv = document.createElement("div");
        var editBtn = document.createElement("button"); 
        var newElement = document.createElement("label");
        var newElement2 = document.createElement("input");
        var labelDesc = document.createElement('label');



        editBtn.setAttribute(`id`, `btn${x}`);
        editBtn.textContent = "✎";
        editBtn.addEventListener(`click`, function(event){

            for(i = 0; i < controlDiv.childNodes.length; i++){
                if (controlDiv.childNodes[i].id === `label${z - 1}` || element.length === 0){
                    var childId = controlDiv.childNodes[i].id;
                    if(element.indexOf(childId) == -1 || element.length === 0){
                        element.push(childId);
                    }else{
                        console.log(`Ja tem o valor: ${childId} aqui`);
                    }
                }
            }
            
            event.stopPropagation();
            if(newElement.contentEditable === 'false'){
                event.stopPropagation();
                newElement.contentEditable = 'true';
                newElement.style.padding = '10px';
                newElement.style.border = 'solid black 1px';
                newElement.style.borderRadius = '10px';
                newElement.style.color = 'black';
                newElement.style.backgroundColor = "white";
                editBtn.textContent = "💾";
                labelDesc.textContent = '<- Clique aqui para salvar !';
                labelDesc.style.padding = '10px 0px 0px 10px';
                controlDiv.appendChild(labelDesc);
            }else{
                labelDesc.textContent = "";
                event.stopPropagation();
                newElement.removeAttribute('style');
                newElement.contentEditable = "false";
                editBtn.textContent = "✎";
                notEdited = false;
            }
        });
        x++
        

        newElement.setAttribute(`id`, `label${z}`);
        newElement.textContent = `Novo Campo`;
        newElement.contentEditable = "false";
        z++;

        newElement2.setAttribute(`id`, `input${y}`);
        newElement2.value = "0.00";
        y++
        

        controlDiv.style.display = "flex";
        controlDiv.setAttribute(`id`, `div${d}`);
        d++

        var finalLine = document.getElementById("finalLine");
        finalLine.textContent = "🔨 CAMPOS ADICIONADOS";


        container.appendChild(controlDiv);
        controlDiv.appendChild(newElement);
        controlDiv.appendChild(editBtn);
        container.appendChild(newElement2);

        document.documentElement.scrollTo(0, 
        document.body.scrollHeight ||
        document.documentElement.scrollHeight);
    }else{
        alert("Renomeie o campo Criado");
    } 
}

function labelGenerator(element){
    if(element.length == 0){
        var containerFinal = document.getElementById("containerFinal");
        var labelNenhum = document.createElement("label");
        labelNenhum.textContent = "Nenhum";
        containerFinal.appendChild(labelNenhum);
        console.log("vazio", labelNenhum);
    }else{
        var containerFinal = document.getElementById("containerFinal");
        var labelNenhum = document.getElementById("labelNenhum");
        for(i = 0;i < element.length; i++){
            let inputedField = document.getElementById(element[i]);
            let textContent = inputedField.textContent;

            if(inputedField){
                let createdLabel = document.createElement("label");
                createdLabel.setAttribute(`id`, `labelControl${i}`);
                inputStringGetter();
                createdLabel.textContent = `${textContent}.............R$ ${(inputStringValueIterator[i]).toFixed(2)}`;   
                containerFinal.appendChild(createdLabel);
                console.log(`Created label for element with ID '${element[i]}, ${createdLabel}'.`);
            }else{
                console.log(`There's no ${element[i]} in this array !`);
            }
        }
    }    
}

function inputValueGetter(){

    var total = 0.00;
    var container = document.getElementById("container");
    

    for(var i = 0; i < container.childNodes.length; i++){
        
        var containerControl = container.childNodes[i];
        if(containerControl.nodeName === "INPUT"){
            var valorAdicionado = parseFloat(containerControl.value);
            if(!isNaN(valorAdicionado)){
                total = total + valorAdicionado;
            }
        }else{
            console.log("It was not an input type element",containerControl, containerControl.value);
        }
    }

    return total;
}

function inputStringGetter(){


    var container = document.getElementById("container");
    

    for(var i = 0; i < container.childNodes.length; i++){

        var containerControl = container.childNodes[i];
        if(containerControl.nodeName === "INPUT"){
            inputStringValueIterator.push(parseFloat(containerControl.value));
        }else{
            console.log("It was not an input type element",containerControl, containerControl.value, inputStringValueIterator);
        }
    }
}
