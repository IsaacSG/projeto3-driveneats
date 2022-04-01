function selecionar(pratoselecionado, categoria){
    const prato = document.querySelector(".selecionar");

    const tipo = document.querySelector(".selecionar")
    if(tipo === categoria){
        if(prato !== null){
        prato.classList.remove("selecionar");
        }
        pratoselecionado.classList.add("selecionar");
}
}