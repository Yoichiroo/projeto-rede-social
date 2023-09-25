let itens_menu = document.querySelectorAll(".itemMenu")

let mudar_item_ativo = () => {
    itens_menu.forEach(item => {
        item.classList.remove("itemAtivo")
    })
}

itens_menu.forEach(item => {
    item.addEventListener("click", ()=>{
        item.classList.add("itemAtivo")
        if(item.id != "notificacoes") {
            document.querySelector(".notificacoesPopup").style.display = 'none'
        } else {
            document.querySelector(".notificacoesPopup").style.display = "block"
        }
    })
})

console.log(itens_menu)