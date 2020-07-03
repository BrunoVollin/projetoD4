let total = 0
let quantidade = 0
let conta = true
let clicado = false

alert(`Baidu V8 instalado com sucesso em c:/%systemdrive%/users/%username%/%documents
    Ok para continuar`)

function roda(num, quant) {
    if (clicado) {
        alert('Selecione somar ou subtrair.')
    } else {
        let resultado = 0

        quantidade = document.getElementById(quant).value

        for (let i = 0; i < quantidade; i++) {
            resultado += Math.floor(Math.random() * num) + 1
        }

        if (conta) total += resultado
        else total -= resultado

        document.getElementById("resultado").value = total
        document.getElementById("conta").value += resultado

        if (quantidade != '' && quantidade != 1) {
            document.getElementById("mostraDados").value += quantidade + 'D' + num 
        } else {
            document.getElementById("mostraDados").value += 'D' + num
        }
        quantidade = ''
    }

    clicado = true

}

function maisMenos(aux) {
    conta = aux

    if (aux) {
        document.getElementById("conta").value += " + "
        document.getElementById("mostraDados").value += " + "
    } else {
        document.getElementById("conta").value += " - "
        document.getElementById("mostraDados").value += " - "
    }

    clicado = false
}

function reset() {
    total = 0

    document.getElementById("q4").value = 1
    document.getElementById("q6").value = 1

    document.getElementById("resultado").value = ''
    document.getElementById("conta").value = ''
    document.getElementById("mostraDados").value = ''

    clicado = false
}