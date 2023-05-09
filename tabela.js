let codigo
let quantidade

let preco

let valorTotal

function Comprar(){
    codigo = Number(prompt("digite o codigo: "))
    quantidade = Number(prompt("digite a quantidade: "))

    if(codigo == 1){
        preco = 4.00
    }else{
        if(codigo == 2){
            preco = 4.50
        }else{
            if(codigo == 3)
            preco = 5.00
        }

    }

    valorTotal = quantidade * preco
    alert("Valor Total: R$" + valorTotal.toFixed(2))
}