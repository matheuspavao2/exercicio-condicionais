let idade = Number(prompt("Qual é sua idade?"))
let resultado = ["reprovado", "aprovado"]

// PRIMEIRA ETAPA & SEGUNDA ETAPA

if (idade < 16) {
    alert(`Você foi ${resultado[0]} na 1° etapa!`)
} else if (idade >=16 && idade < 60) {
    alert(`Você foi ${resultado[1]} na 1° etapa!`)

} else if (idade >= 60) {
    alert(`Você foi ${resultado[1]} na 1° etapa!`)

let resposta = prompt("Você tem atestado? Digite 'Sim' ou 'Não'!")
let atestado = resposta ? resposta.trim().toLowerCase(): "";

if (atestado === "Sim" || atestado === "sim" || atestado === "Sim!" || atestado ==="sim!") {
    alert(`Você foi ${resultado[1]}!`)
} else if (atestado === "Não" || atestado === "não" || atestado === "Não!" || atestado === "não") {
    alert(`Você foi ${resultado[0]}! É necessário ter atestado para idosos com 60 anos ou mais.`)
} else {
    alert("Resposta inválida! Digite 'Sim' ou 'Não'!")
}
} else {
    alert (`Por favor, informe sua idade!`)
}

// TERCEIRA ETAPA

let distância = Number(prompt(`Quantos quilômetros você percorreu?`))
let tempo = Number(prompt("Por quantos minutos você percorreu?"))
let pace = tempo / distância

if (distância === 5 || distância === 15 || distância === 21 || distância === 42) {

if (pace <= 5) {
    alert(`Seu pace de ${pace.toFixed(1)} foi Elite!`)
} else if (pace <= 7.99) {
    alert(`Seu pace de ${pace.toFixed(1)} foi Competitivo!`)
} else {
    alert(`Seu pace ${pace.toFixed(1)}foi Amador!`) 
}}
else{
    alert ("Distância incorreta. As distâncias aceitas são: 5km, 15km, 21km e 42km!")
}
