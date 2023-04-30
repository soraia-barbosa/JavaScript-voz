function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteInvalido(numero)){
        chute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroMaiorOuMenorQueValorPermitido(numero)){
        chute.innerHTML += `
        <div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }
}

    if (numero === numeroSecreto){
        document.body.innerHTML= `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente </button>
        `

    }else if (numero > numeroSecreto){
        chute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        chute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>)
        `
    
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})