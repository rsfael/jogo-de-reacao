
//const sleep = (ms) => {
    //if(!ms) {
        //ms = Math.floor(Math.random() * (5000 - 1000) + 1000) ;
    //}
    
    //return new Promise(resolve => setTimeout(resolve, ms));
//}




//const mudarImagem = (img) => {
    //let numImg;
    //switch (img) {
        //case "vermelho":
            //numImg = 1;
            //break;
        //case "azul":
            //numImg = 2;
            //break;
        //case "cinza":
            //numImg = 3;
            //break;
        //case "verde":
            //numImg = 4;
            //break;

        //default:
            //console.error("Imagem não encontrada");
            //return;
    //}

    //document.getElementById("imagem").src = `./img/${numImg}.png`; 

//}



//const react = async () => {
    //console.log("REAÇÃO")
    
    //mudarImagem("cinza")
    //mudarTexto("Pronto...")
    //await sleep();
    //mudarImagem("verde")
    //mudarTexto("Clica")
    //let start = window.performance.now();



    //let end = window.performance.now();

    //document.getElementById("textoPontos").innerHTML = `${(end - start).toFixed(2)}ms`;




    //await sleep(1000);
    //console.log(end - start)

//}
//funcao de ajuda para mudar o texto em cima do butao
const mudarTexto = (msg) => {
    document.getElementById("textoButao").innerHTML = msg;
}

//funcao de ajuda para gerar um numero aleatorio
function numAleatoreo () {
    var aleatorio = (Math.random() * (5000 - 1000) + 1000);
    return aleatorio
}


//butoes e etc
var inteiro = document.getElementById("start");
var Start = document.getElementById("butaoStart");
var Espera = document.getElementById("espera");
var DemasiadoRapido = document.getElementById("demasiadorapido");
var Clica = document.getElementById("clica");
var Resultado = document.getElementById("resultado");
var primeiro = document.getElementById("primeiro")
var segundo = document.getElementById("segundo")
var terceiro = document.getElementById("terceiro")
var insultos = document.getElementById("insultos");



var RESULTADOS = [];

inteiro.onclick = () => {
    inteiro.setAttribute("oculta", "");
    Espera.removeAttribute("oculta");
    mudarTexto("Pronto...");
    // parte do "pronto" e do delay
    tempo = setTimeout(() => {
        Espera.setAttribute("oculta", "");
        Clica.removeAttribute("oculta");
        mudarTexto("Clica!!!");
        reacao = window.performance.now();
        
    }, numAleatoreo());
}


// parte que troca do botao espera para o botao de "erro"
Espera.onclick = () => {
    clearTimeout(tempo);
    Espera.setAttribute("oculta", "");
    DemasiadoRapido.removeAttribute("oculta");
    mudarTexto("Demasiado rápido...");
}

Clica.onclick = () => {
    //parte que tira o tempo para a reação
    const inicioTempo = window.performance.now();
    reaction = inicioTempo - reacao;
    Clica.setAttribute("oculta", "");
    Resultado.removeAttribute("oculta");
    mudarTexto("Resultado: " + reaction.toFixed(2) + "ms");
    //parte que ordena os resultados na tabela
    document.getElementById("textoButao").innerHTML += "<br>Clique no butão azul para voltar ao inicio";
    RESULTADOS.push(reaction);
    RESULTADOS.sort(function(a, b){return a - b});
    primeiro.innerHTML = "1º " + RESULTADOS[0].toFixed(2) + "ms";
    //parte que filtra os resultados e insulta o jogador
    if (reaction > 1000) {
        insultos.innerHTML = "ES UMA BALENTE MERDA ANDANTE!";
    }
    else if (reaction < 200) {
        insultos.innerHTML = "Nada Mau";
    }
    else if (reaction > 200 && reaction < 1000) {
        insultos.innerHTML = "Consegues ser bem melhor";
    }



    //ver se o segundo e terceiro resultados existem e se sim mudar o seu valor no HTML
    if (RESULTADOS[1]) {
        segundo.innerHTML = "2º " + RESULTADOS[1].toFixed(2) + "ms";
    }
    if (RESULTADOS[2]) {
        terceiro.innerHTML = "3º " + RESULTADOS[2].toFixed(2) + "ms";
    }



}

//voltar a jogar depois dos resultados
Resultado.onclick = () => {
    Resultado.setAttribute("oculta", "");
    inteiro.removeAttribute("oculta");
}

//pate em que renicia o jogo depois de ter clicado demasiado rapido
DemasiadoRapido.onclick = () => {
    DemasiadoRapido.setAttribute("oculta", "");
    mudarTexto("Clica no butão azul");
    inteiro.removeAttribute("oculta");
}


