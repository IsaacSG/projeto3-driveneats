let prato;
let drink;
let sobremesa;
let pedido;
let valorprato;
let valordrink;
let valorsobremesa;
let valortotal;
let nome;
let endereço;
let nomecomida;
let nomedrink;
let nomesobremesa;

function selecionar(pratoselecionado){
    prato = document.querySelector(".selecionar");
        if(prato !== null){
        prato.classList.remove("selecionar");
        }
        pratoselecionado.classList.add("selecionar");
        if(prato !== undefined && drink !== undefined && sobremesa !== undefined){
            const botao01 = document.querySelector(".botao1");
            botao01.classList.add("esconder");
            const botao02 = document.querySelector(".botao2");
            botao02.classList.remove("esconder");
        }
    }
function selecionardrink(drinkselecionado){
    drink = document.querySelector(".selecionardrink");
    if(drink !== null){
        drink.classList.remove("selecionardrink");
    }
    drinkselecionado.classList.add("selecionardrink");
    if(prato !== undefined && drink !== undefined && sobremesa !== undefined){
        const botao01 = document.querySelector(".botao1");
        botao01.classList.add("esconder");
        const botao02 = document.querySelector(".botao2");
        botao02.classList.remove("esconder");
    }
}

function selecionarsobremesa(sobremesaselecionada){
    sobremesa = document.querySelector(".selecionarsobremesa");
    if(sobremesa !== null){
        sobremesa.classList.remove("selecionarsobremesa");
    }
    sobremesaselecionada.classList.add("selecionarsobremesa");
    if(prato !== undefined && drink !== undefined && sobremesa !== undefined){
        const botao01 = document.querySelector(".botao1");
        botao01.classList.add("esconder");
        const botao02 = document.querySelector(".botao2");
        botao02.classList.remove("esconder");
    }
}
function fecharpedido(){
    pedido = document.querySelector(".fecharpedido");
    pedido.classList.remove("esconder");
    nomecomida = document.querySelector(".pratos .selecionar h2").innerHTML;
    nomedrink = document.querySelector(".pratos .selecionardrink h2").innerHTML;
    nomesobremesa = document.querySelector(".pratos .selecionarsobremesa h2").innerHTML;
    valorprato = document.querySelector(".pratos .selecionar h3").innerHTML.replace(",",".").replace("R$","");
    valordrink = document.querySelector(".pratos .selecionardrink h3").innerHTML.replace(",",".").replace("R$","");
    valorsobremesa = document.querySelector(".pratos .selecionarsobremesa h3").innerHTML.replace(",",".").replace("R$","");
    prato = document.querySelector(".fecharpedido .pratoconfirmado h2");
    prato.innerHTML = `- Prato: ${nomecomida} R$${valorprato}`;
    drink = document.querySelector(".fecharpedido .drinkconfirmado h2");
    drink.innerHTML = `- Bebida: ${nomedrink} R$${valordrink}`;
    sobremesa = document.querySelector(".fecharpedido .sobremesaconfirmada h2");
    sobremesa.innerHTML = `- Sobremesa: ${nomesobremesa} R$${valorsobremesa}`;
    valortotal = document.querySelector(".fecharpedido .valortotal h2");
    valortotal =`Total: R$ ${(Number(valordrink) + Number(valorprato) + Number(valorsobremesa)).toFixed(2)}`;
}
function fechar(){
    nome = prompt("Informe seu nome");
    endereco = prompt("Informe seu endereço");
    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomecomida}
    - Bebida: ${nomedrink}
    - Sobremesa: ${nomesobremesa}
    Total: R$ ${(Number(valordrink) + Number(valorprato) + Number(valorsobremesa)).toFixed(2)}

    -Nome: ${nome}
    -Endereço: ${endereco}`
    window.open(`https://wa.me/5587996568058?text=${encodeURIComponent(mensagem)}`)
}
function cancelar(){
    pedido = document.querySelector(".fecharpedido");
    pedido.classList.add("esconder");
}