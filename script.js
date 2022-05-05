const root = document.getElementById("root")

const titulo = document.createElement("h1")
titulo.innerText = "contador"

root.appendChild(titulo)

const input = document.createElement("input")
root.appendChild(input)


const botao1 = document.createElement("button")
botao1.innerText = "aumentar"
root.appendChild(botao1)

const botao2 = document.createElement("button")
botao2.innerText = "diminuir"
root.appendChild(botao2)

const botao3 = document.createElement("button")
botao3.innerText = "printar"
root.appendChild(botao3)

/**
 * pegar o conteudo do input com input.value
 * verificar se esse valor é uma strimg vazia
 * se não for, 
 * criar um p com conteudo do input
 * colocar o p dentro do root
 */


let contador = 0

const mostrador = document.createElement("p")
mostrador.innerText = contador
root.appendChild(mostrador)

function incrementarContador() {
    contador ++
    mostrador.innerText = ""
    mostrador.innerText = contador

}
function decrementarContador() {
    if( contador > 0){
        contador --
    }
    mostrador.innerText = ""
    mostrador.innerText = contador
}
function printarValor(){
    if (input.value !== ""){
        let print = document.createElement("p")
        print.innerText = input.value
        root.appendChild(print)
    }
}

botao1.addEventListener("click", incrementarContador)
botao2.addEventListener("click", decrementarContador)
botao3.addEventListener("click", printarValor)


