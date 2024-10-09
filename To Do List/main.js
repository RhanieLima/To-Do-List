function AdicionarTarefa(){

    let GetInput = document.querySelector('input').value
    

    let li = document.createElement("li")
    li.innerHTML = GetInput + '<span onclick="DeletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector('input').value = ''
}

function DeletarTarefa(li){
    li.parentElement.remove(li)
}