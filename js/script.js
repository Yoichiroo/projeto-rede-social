// Sidebar

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

// Mensagens

let notificacoes_mensagens = document.querySelector("#notificacaoMensagens")
let mensagens = document.querySelector(".sectionMensagens")

notificacoes_mensagens.addEventListener("click", ()=>{
    mensagens.style.boxShadow = '0 0 0.5rem var(--corPrimaria)'
    notificacoes_mensagens.querySelector(".contagemNotificacoes").style.display = 'none'
    setTimeout(()=>{
        mensagens.style.boxShadow = 'none'
    }, 2000)
})

// Filtrando mensagens

let mensagem = mensagens.querySelectorAll('.mensagem')
let search_box_mensagem = document.getElementById("searchMensagem")
let procurar_mensagem = () => {
    let valor = search_box_mensagem.value.toLowerCase()
    console.log(valor)
    mensagem.forEach(chat => {
        let nome = chat.querySelector("h5").textContent.toLocaleLowerCase()
        if(nome.indexOf(valor) != -1) {
            chat.style.display ='flex'
        } else {
            chat.style.display = 'none'
        }
    })
}

search_box_mensagem.addEventListener("keyup", procurar_mensagem)

// Personalização do tema

