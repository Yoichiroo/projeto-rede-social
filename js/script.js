let itens_menu = document.querySelectorAll(".itemMenu")

let mudar_item_ativo = () => {
    itens_menu.forEach(item => {
        item.classList.remove("itemAtivo")
    })
}

itens_menu.forEach(item => {
    item.addEventListener("click", ()=>{
        mudar_item_ativo()
        item.classList.add("itemAtivo")
        if(item.id != "notificacoes") {
            document.querySelector(".notificacoesPopup").style.display = 'none'
        } else {
            document.querySelector(".notificacoesPopup").style.display = "block"
            document.querySelector("#notificacoes .contagemNotificacoes").style.display = 'none'
        }
    })
})

// console.log(itens_menu)

// Mensagens

let notificacoes_mensagens = document.querySelector("#notificacaoMensagens")
let mensagens = document.querySelector(".sectionMensagens")

notificacoes_mensagens.addEventListener("click", ()=>{
    mensagens.style.boxShadow = '0 0 1rem var(--corPrimaria)'
    setTimeout(()=>{
        mensagens.style.boxShadow = 'none'
    }, 2000)
})