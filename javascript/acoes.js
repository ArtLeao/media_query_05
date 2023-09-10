const menu = document.getElementById("menu")
let ul = document.getElementById("teste")

function mudarTamanho(){
    if(window.innerWidth >= 768 ){
        ul.style.display = "block"
    }else{
        ul.style.display = "none"
    }
}

function clickMenu(){
    if(ul.style.display == "block"){
        ul.style.display = "none"
    }else{
        ul.style.display = "block"
    }
}

