let prato;
let drink;
let sobremesa;

function selecionar(pratoselecionado){
    prato = document.querySelector(".selecionar");
        if(prato !== null){
        prato.classList.remove("selecionar");
        }
        pratoselecionado.classList.add("selecionar");
}
function selecionardrink(drinkselecionado){
    drink = document.querySelector(".selecionardrink");
    if(drink !== null){
        drink.classList.remove("selecionardrink");
    }
    drinkselecionado.classList.add("selecionardrink");
}

function selecionarsobremesa(sobremesaselecionada){
    sobremesa = document.querySelector(".selecionarsobremesa");
    if(sobremesa !== null){
        sobremesa.classList.remove("selecionarsobremesa");
    }
    sobremesaselecionada.classList.add("selecionarsobremesa");
}