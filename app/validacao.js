function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteInvalido(numero)){
        console.log('Valor inválido')
    }

    if (numeroMaiorOuMenorQueValorPermitido(numero)){
        (`Valor inválido: o número secreto precisa estar 
        entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}