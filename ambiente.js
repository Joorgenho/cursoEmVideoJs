let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor é o ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`[SIMPLIFICADO] A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

var pos2 = num.indexOf(4)
if(pos2 == -1){
    console.log("O valor não foi encontrado!")
} else{
    console.log(`O valor 4 está na posição ${pos2}`)
}
