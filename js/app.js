//let gamesAlugados = document.querySelectorAll(".dashboard__item__img--rented");

function contarGamesAlugados() {
    let gamesAlugados = document.querySelectorAll(".dashboard__item__img--rented");
    console.log(`Quantidade de games alugados = ${gamesAlugados.length}`);
}

contarGamesAlugados();

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let nomeGame = gameClicado.querySelector(".dashboard__item__name").textContent;

    //Para saber se ele já está alugado ou não, cria uma variável para receber o status da classe e depois verificar se está true ou false através de estrutura condicional
    let statusGame = imagem.classList.contains("dashboard__item__img--rented");

    if (statusGame) {
        let confirmDevolver = window.confirm(`Deseja realmente devolver o game ${nomeGame}?`);
        if (confirmDevolver) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
        } 
    } else {
        let confirmAlugar = window.confirm(`Deseja realmente alugar o game ${nomeGame}?`);
        if (confirmAlugar) {
            imagem.classList.add("dashboard__item__img--rented");
            botao.classList.add("dashboard__item__button--return");
            botao.textContent = "Devolver";
        }
    }
    contarGamesAlugados();
}