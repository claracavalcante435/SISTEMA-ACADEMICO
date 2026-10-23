function calcularMedia () {
    let nome = document.getElementById("nome").value;
    let materia = document.getElementById("materia").value;
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);
    // ADICIONADO A NOTA 4

    // Printar valores no console (terminal)
    console.log("Nome:", nome);
    console.log("Materia:", materia);
    console.log("Nota1:", nota1);
    console.log("Nota2:", nota2);
    console.log("Nota3:", nota3);
    console.log("Nota4:", nota4);
    // ADICIONADO A NOTA 4


    // calculando a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    // ADICIONADO A NOTA 4 AO CÁLCULO

    console.log("Média calculada:", media);

    // Condicionais para verificar o resultado média com base para saber se reside aprovado ou reprovado
    let situacao;
    if (media >= 6) {
        situacao = "Aprovado ✅";
    } else {
        situacao = "Reprovado ❌"; // ADICIONADO EMOJIS
    }

    console.log("Situação:", situacao);

    let mediaArredondada = media.toFixed(1);

    // Montando o resultado
    let texto = nome + ", na matéria: " + materia + " sua média é: " + mediaArredondada + " (" + situacao + ")";
    // O sinal + aqui não é soma matemática - quando está entre textos, ele "cola" as partes. Se nome="Maria", mediaArredondada="8.0" e situacao="Aprovado", o resultado é: Maria - Média: 8.0 (Aprovado0)

    // colocando o resultado na tela
    document.getElementById("resultado").innerText = texto;

    // Pop-up para média maior que 9
    if (media > 9) {
        document.getElementById("popup-texto").innerText =
            nome + ", sua média foi " + mediaArredondada + "! Excelente desempenho!";
        document.getElementById("popup").classList.add("ativo");
    }
}

// Escutando o clique
document.getElementById("btn-calcular").addEventListener("click", calcularMedia);

// Fechando o pop-up
function fecharPopup() {
    document.getElementById("popup").classList.remove("ativo");
}

document.getElementById("btn-fechar").addEventListener("click", fecharPopup);

// Fecha também ao clicar fora da caixa (no fundo escuro)
document.getElementById("popup").addEventListener("click", function (evento) {
    if (evento.target === this) {
        fecharPopup();
    }
});

// function -> cria um bloco de código para realizar uma tarefa
// calcularMedia -> o nome que demos a essa função
// { } as chaves delimitam o bloco de código que pertence à função

// ================================================================

// let -> cria uma variável 
// document -> representa a página exibida no navegador
// .getElementById("nome") -> procura o elemento com o id="nome"
// .value -> pega o valor que está dentro do campo

// Number -> informando que vamos trabalhar com valores numericos

// ================================================================

// console.log() -> mostra uma mensagem no console do navegador
// "Nome:" -> texto fixo: aparece exatamente como foi escrito
// nome -> o valor guardado na variável (ex.: Maria)

// ================================================================

// toFixed(1) -> trabalha com 1 casa decimal: 7.666... vira 7.7
// mediaArredondada -> nova variável, só para a apresentação do valor

// ================================================================

// getElementById("resultado") -> procura o elemento com id="resultado" - a div vazia do HTML
// .innerText = texto -> coloca dentro dele o conteúdo da variável texto

// ================================================================

// addEventListener("click", ...) -> "fique de olho no clique nesse elemento"
// calcularMedia -> a função que deve rodar quand o clique acontecer