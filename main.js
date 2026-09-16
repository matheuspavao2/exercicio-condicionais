let idade = Number(prompt("Qual é sua idade?"))
let resultado = ["aprovado", "reprovado"]

// PRIMEIRA ETAPA

if (idade <= 16) {
    alert(`Você foi ${resultado[1]} na 1° etapa!`)
} else if (idade >= 60) {
    alert(`Você foi ${resultado[0]} na 1° etapa!`)
}
// ATESTADO

let atestado = confirm("Você tem atestado?")
if (atestado) {
    alert(`Você foi ${resultado[0]}!`)
} else {
    alert(`Você foi ${resultado[1]}!`)
}

// SEGUNDA ETAPA

let distância = Number(prompt(`Quantos quilômetros você percorreu?`))
let tempo = Number(prompt("Por quantos minutos você percorreu?"))
let pace = tempo / distância.toFixed(2)

if (distância === 5 || distância === 15 || distância === 21 || distância === 42) {

 if (pace <= 5) {
    alert(`Seu pace de ${pace}.0 foi Elite!`)
} else if (pace <= 7.99) {
    alert(`Seu pace de ${pace}.0 foi Competitivo!`)
} else {
    alert(`Seu pace ${pace}.0 foi Amador!`)
}}
else{
    alert ("Distância incorreta. As distâncias aceitas são: 5km, 15km, 21km e 42km!")
}
