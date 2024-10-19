let saldoVitorias = calcularSaldo(10, 5)
let nivel = ""


function calcularSaldo(qtdVitorias, qtdDerrotas){
    let resultado = qtdVitorias - qtdDerrotas
    return resultado
}

if(saldoVitorias<=10){
    nivel = "Ferro"
}
else if((saldoVitorias>10)&&(saldoVitorias<=20)){
    nivel = "Bronze"
}
else if((saldoVitorias>20)&&(saldoVitorias<=50)){
    nivel = "Prata"
}
else if((saldoVitorias>50)&&(saldoVitorias<=80)){
    nivel = "Ouro"
}
else if((saldoVitorias>80)&&(saldoVitorias<=90)){
    nivel = "Diamante"
}
else if((saldoVitorias>90)&&(saldoVitorias<=100)){
    nivel = "Lendário"
}
else{
    nivel = "Imortal"
}

console.log("O saldo de Vitórias do Herói é: " + saldoVitorias + ", e seu nível é " + nivel)