let nome = prompt('qual seu nome?')
let nasc = prompt('Ano de nascimento:')

let numIdade = Number(nasc)

let idade = 2024 - numIdade
let verificacao = idade >= 18 == true 
let FutIdade = 2050 - numIdade

console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`É maior de idade? ${verificacao}`)
console.log(`Idade em 2050: ${FutIdade}`)