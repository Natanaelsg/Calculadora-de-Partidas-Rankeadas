function calcular(wins,defeat){
    return wins - defeat
}

let saldo = calcular(100,50)
let nives = " "


if(saldo <= 10){
    nives = "ferro"
}
else if(saldo >=11 && saldo <=20){
     nives = "Bronze"


} 
else if (saldo >= 21 && saldo <=50){
     nives = "Prata"

}
else if (saldo >= 51 && saldo <=80){
     nives = "Gold"
}
else if (saldo >= 81 && saldo <= 90){
     nives = "Diamante"

}
else if(saldo >= 91 && saldo <=100){
     nives = "Lendário"

}
else if (saldo >=101){
     nives = "IMORTAL"
}

console.log(`o Herói tem de saldo de ${saldo} vitórias está  no elo  ${nives}`)