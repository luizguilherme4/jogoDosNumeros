var delayInMilliseconds = 1000;
var main = document.querySelector("main");
var body = document.querySelector("body");
var acertos = 0;

setTimeout(function delay() {
    main.innerHTML = `
    <h1>Escolha um jogo</h1>
    <div class="jogos-botoes">
        <button id="jogo-1" onclick="jogo1()">O que vem depois?</button>
        <button id="jogo-2" onclick="jogo2()">O que vem antes?</button>
        <button id="jogo-3" onclick="jogo3()">Está entre isso e aquilo</button>
        <button id="jogo-4" onclick="jogo4()">Quantidade de bolinhas</button>
    </div>
    <footer>
        <p>feito com</p>
        <img src="img/coracaoIcon.svg">
        <p>por Luiz</p>
    </footer>`
}, delayInMilliseconds);

function voltar() {
    acertos = 0;

    body.innerHTML = "";
    body.innerHTML = `
<main class="fundo-branco">
    <h1>Escolha um jogo</h1>
    <div class="jogos-botoes">
        <button id="jogo-1" onclick="jogo1()">O que vem depois?</button>
        <button id="jogo-2" onclick="jogo2()">O que vem antes?</button>
        <button id="jogo-3" onclick="jogo3()">Está entre isso e aquilo</button>
        <button id="jogo-4" onclick="jogo4()">Quantidade de bolinhas</button>
    </div>
    <footer>
        <p>feito com</p>
        <img src="img/coracaoIcon.svg">
        <p>por Luiz</p>
    </footer>
</main>`
}

function mudaNumeroAleatorio() {
    numeroAleatorio = parseInt((Math.random() * 11) + 1)

    circuloNumero = document.querySelector(".circulo-numero");
    circuloNumero.innerHTML = `<p>${numeroAleatorio}</p>`
}

function jogo1() {
    numeroAleatorio = parseInt(Math.random() * 11)

    body.innerHTML = `<main class="fundo-azul">
    <h1 class="pergunta">Qual número vem depois do:</h1>
    <div class="circulo-numero">
        <p>${numeroAleatorio}</p>
    </div>

    <div class="numero-user">
        <input type="number" class="numeroUsuario">
        <button onclick="confirmarNumero()">Confirmar</button>
    </div>

    <div class="tentativas">
        <div class="tentativa" id="tentativa-1"></div>
        <div class="tentativa" id="tentativa-2"></div>
        <div class="tentativa" id="tentativa-3"></div>
        <div class="tentativa" id="tentativa-4"></div>
    </div>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>
</main>`
}

function confirmarNumero() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa01 = document.querySelector("#tentativa-1");
    botaoConfirmar = document.querySelector(".numero-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa01.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;
    }
    else {
        tentativa01.innerHTML = `<img src="img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    botaoConfirmar.innerHTML = `<input type="number" class="numeroUsuario">
    <button onclick="confirmarNumero2(acertos)">Confirmar</button>`
}

function confirmarNumero2() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa02 = document.querySelector("#tentativa-2");
    botaoConfirmar = document.querySelector(".numero-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa02.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;

    }
    else {
        tentativa02.innerHTML = `<img src="img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    botaoConfirmar.innerHTML = `<input type="number" class="numeroUsuario">
    <button onclick="confirmarNumero3(acertos)">Confirmar</button>`
}

function confirmarNumero3() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa03 = document.querySelector("#tentativa-3");
    botaoConfirmar = document.querySelector(".numero-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa03.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;

    }
    else {
        tentativa03.innerHTML = `<img src="img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    botaoConfirmar.innerHTML = `<input type="number" class="numeroUsuario">
    <button onclick="confirmarNumero4(acertos)">Confirmar</button>`
}

function confirmarNumero4() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa04 = document.querySelector("#tentativa-4");
    botaoConfirmar = document.querySelector(".numero-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa04.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;

    }
    else {
        tentativa04.innerHTML = `<img src="img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    body.innerHTML = `<main class="fundo-azul">
    <h1 id="texto-final">Você acertou:</h1>
    <h1 id="acertos">${acertos}/4</h1>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>

    <footer class="footer-final">
        <p>feito com</p>
        <img src="img/coracaoIcon.svg">
        <p>por Luiz</p>
    </footer>
</main>`
}

function jogo2() {
    numeroAleatorio = parseInt((Math.random() * 11) + 1)

    body.innerHTML = `<main class="fundo-ciano">
    <h1 class="pergunta">Qual número vem antes do:</h1>
    <div class="circulo-numero">
        <p>${numeroAleatorio}</p>
    </div>

    <div class="numero-user">
        <input type="number" class="numeroUsuario">
        <button onclick="confirmarNumeroJogo2()">Confirmar</button>
    </div>

    <div class="tentativas">
        <div class="tentativa" id="tentativa-1"></div>
        <div class="tentativa" id="tentativa-2"></div>
        <div class="tentativa" id="tentativa-3"></div>
        <div class="tentativa" id="tentativa-4"></div>
    </div>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>
</main>`
}

function confirmarNumeroJogo2() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa01 = document.querySelector("#tentativa-1");
    botaoConfirmar = document.querySelector(".numero-user");

    if (--numeroAleatorio == numeroUser) {
        tentativa01.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;
    }
    else {
        tentativa01.innerHTML = `<img src="img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    botaoConfirmar.innerHTML = `<input type="number" class="numeroUsuario">
    <button onclick="confirmarNumero2Jogo2()">Confirmar</button>`
}

function confirmarNumero2Jogo2() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa02 = document.querySelector("#tentativa-2");
    botaoConfirmar = document.querySelector(".numero-user");

    if (--numeroAleatorio == numeroUser) {
        tentativa02.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;

    }
    else {
        tentativa02.innerHTML = `<img src="img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    botaoConfirmar.innerHTML = `<input type="number" class="numeroUsuario">
    <button onclick="confirmarNumero3Jogo2()">Confirmar</button>`
}

function confirmarNumero3Jogo2() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa03 = document.querySelector("#tentativa-3");
    botaoConfirmar = document.querySelector(".numero-user");

    if (--numeroAleatorio == numeroUser) {
        tentativa03.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;

    }
    else {
        tentativa03.innerHTML = `<img src= "img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    botaoConfirmar.innerHTML = `<input type="number" class="numeroUsuario">
    <button onclick="confirmarNumero4Jogo2(acertos)">Confirmar</button>`
}

function confirmarNumero4Jogo2() {
    numeroUser = (document.querySelector(".numeroUsuario").value);
    tentativa04 = document.querySelector("#tentativa-4");
    botaoConfirmar = document.querySelector(".numero-user");

    if (--numeroAleatorio == numeroUser) {
        tentativa04.innerHTML = `<img src="img/certoIcon.svg">`;
        acertos++;

    }
    else {
        tentativa04.innerHTML = `<img src="img/erraddoIcon.svg">`
    }

    mudaNumeroAleatorio();

    body.innerHTML = `<main class="fundo-ciano">
    <h1 id="texto-final">Você acertou:</h1>
    <h1 id="acertos">${acertos}/4</h1>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>

    <footer class="footer-final">
        <p>feito com</p>
        <img src="img/coracaoIcon.svg">
        <p>por Luiz</p>
    </footer>
</main>`
}

function mudaNumeroAleatorioJogo3() {
    numeroAleatorio = parseInt((Math.random() * 11) + 1)

    circuloNumero = document.querySelector(".circulo-numero");
    circuloNumero.innerHTML = `<p>${numeroAleatorio}</p>`

    circuloNumero2 = document.querySelector(".circulo-numero2");
    circuloNumero2.innerHTML = `<p>${numeroAleatorio + 2}</p>`
}

function jogo3() {
    numeroAleatorio = parseInt(Math.random() * 11)

    body.innerHTML = `<main class="fundo-verde">
    <h1 class="pergunta">Qual número está entre:</h1>
    <div class="entre">
        <div class="circulo-numero">
            <p>${numeroAleatorio}</p>
        </div>

        <div class="input-user">
            <input type="number" class="numero-user">
        </div>

        <div class="circulo-numero2">
            <p>${numeroAleatorio + 2}</p>
        </div>
    </div>
    <div class="confirmar">
        <button class="botao-confirmar" onclick="confirmarNumeroJogo3()">Confirmar</button>
    </div>
    
    <div class="tentativas">
        <div class="tentativa" id="tentativa-1"></div>
        <div class="tentativa" id="tentativa-2"></div>
        <div class="tentativa" id="tentativa-3"></div>
        <div class="tentativa" id="tentativa-4"></div>
    </div>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>
</main>`
}

function confirmarNumeroJogo3() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa01 = document.querySelector("#tentativa-1");
    botaoConfirmar = document.querySelector(".confirmar");
    input = document.querySelector(".input-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa01.innerHTML = `<img src="img/certoVerdeIcon.svg">`;
        acertos++;
    }
    else {
        tentativa01.innerHTML = `<img src="img/erradoVerdeIcon.svg">`;
    }

    mudaNumeroAleatorioJogo3();

    input.innerHTML = `<input type="number" class="numero-user">`
    botaoConfirmar.innerHTML = `<button class="botao-confirmar" onclick="confirmarNumero2Jogo3()">Confirmar</button>`
}

function confirmarNumero2Jogo3() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa02 = document.querySelector("#tentativa-2");
    botaoConfirmar = document.querySelector(".confirmar");
    input = document.querySelector(".input-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa02.innerHTML = `<img src="img/certoVerdeIcon.svg">`;
        acertos++;
    }
    else {
        tentativa02.innerHTML = `<img src="img/erradoVerdeIcon.svg">`;
    }

    mudaNumeroAleatorioJogo3();

    input.innerHTML = `<input type="number" class="numero-user">`
    botaoConfirmar.innerHTML = `<button class="botao-confirmar" onclick="confirmarNumero3Jogo3()">Confirmar</button>`
}

function confirmarNumero3Jogo3() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa03 = document.querySelector("#tentativa-3");
    botaoConfirmar = document.querySelector(".confirmar");
    input = document.querySelector(".input-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa03.innerHTML = `<img src="img/certoVerdeIcon.svg">`;
        acertos++;
    }
    else {
        tentativa03.innerHTML = `<img src="img/erradoVerdeIcon.svg">`;
    }

    mudaNumeroAleatorioJogo3();

    input.innerHTML = `<input type="number" class="numero-user">`
    botaoConfirmar.innerHTML = `<button class="botao-confirmar" onclick="confirmarNumero4Jogo3()">Confirmar</button>`
}

function confirmarNumero4Jogo3() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa04 = document.querySelector("#tentativa-4");
    botaoConfirmar = document.querySelector(".confirmar");
    input = document.querySelector(".input-user");

    if (++numeroAleatorio == numeroUser) {
        tentativa04.innerHTML = `<img src="img/certoVerdeIcon.svg">`;
        acertos++;
    }
    else {
        tentativa04.innerHTML = `<img src="img/erradoVerdeIcon.svg">`;
    }

    mudaNumeroAleatorioJogo3();

    body.innerHTML = `<main class="fundo-verde">
    <h1 id="texto-final">Você acertou:</h1>
    <h1 id="acertos">${acertos}/4</h1>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>

    <footer class="footer-final">
        <p>feito com</p>
        <img src="img/coracaoIcon.svg">
        <p>por Luiz</p>
    </footer>
</main>`
}

function mudaNumeroAleatorioJogo4() {
    imgRandom = ["num1.svg", "num2.svg", "num3.svg", "num4.svg", "num5.svg"];
    randomImg = imgRandom[parseInt(Math.random() * 5)];

    entre = document.querySelector(".entre");
    entre.innerHTML = `<img src="img/${randomImg}">`;
}

function jogo4() {
    imgRandom = ["num1.svg", "num2.svg", "num3.svg", "num4.svg", "num5.svg"];
    randomImg = imgRandom[parseInt(Math.random() * 5)];

    body.innerHTML = `<main class="fundo-roxo">
    <h1 class="pergunta">Há quantas bolinhas?</h1>
    <div class="entre">
        <img src="img/${randomImg}">
    </div>
    <div class="numero-user2">
        <div class="numero-novo">
            <input class="numero-user" type="number">
            <div class="linha"></div>
        </div>
        <div class="confirmar-novo">
            <button class="botao-confirmar" onclick="confirmarNumeroJogo4()">Confirmar</button>
        </div>
    </div>

    <div class="tentativas">
        <div class="tentativa" id="tentativa-1"></div>
        <div class="tentativa" id="tentativa-2"></div>
        <div class="tentativa" id="tentativa-3"></div>
        <div class="tentativa" id="tentativa-4"></div>
    </div>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>
</main>`
}

function confirmarNumeroJogo4() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa01 = document.querySelector("#tentativa-1");
    botaoConfirmar = document.querySelector(".confirmar-novo");
    input = document.querySelector(".numero-novo");

    switch (randomImg) {
        case "num1.svg":
            if (numeroUser == 1) {
                tentativa01.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa01.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num2.svg":
            if (numeroUser == 2) {
                tentativa01.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa01.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num3.svg":
            if (numeroUser == 3) {
                tentativa01.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa01.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num4.svg":
            if (numeroUser == 4) {
                tentativa01.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa01.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num5.svg":
            if (numeroUser == 5) {
                tentativa01.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa01.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;
    }

    mudaNumeroAleatorioJogo4();

    input.innerHTML = `<input class="numero-user" type="number">
    <div class="linha"></div>`
    botaoConfirmar.innerHTML = `<button class="botao-confirmar" onclick="confirmarNumero2Jogo4()">Confirmar</button>`
}

function confirmarNumero2Jogo4() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa02 = document.querySelector("#tentativa-2");
    botaoConfirmar = document.querySelector(".confirmar-novo");
    input = document.querySelector(".numero-novo");

    switch (randomImg) {
        case "num1.svg":
            if (numeroUser == 1) {
                tentativa02.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa02.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num2.svg":
            if (numeroUser == 2) {
                tentativa02.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa02.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num3.svg":
            if (numeroUser == 3) {
                tentativa02.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa02.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num4.svg":
            if (numeroUser == 4) {
                tentativa02.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa02.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num5.svg":
            if (numeroUser == 5) {
                tentativa02.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa02.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;
    }

    mudaNumeroAleatorioJogo4();

    input.innerHTML = `<input class="numero-user" type="number">
    <div class="linha"></div>`
    botaoConfirmar.innerHTML = `<button class="botao-confirmar" onclick="confirmarNumero3Jogo4()">Confirmar</button>`
}

function confirmarNumero3Jogo4() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa03 = document.querySelector("#tentativa-3");
    botaoConfirmar = document.querySelector(".confirmar-novo");
    input = document.querySelector(".numero-novo");

    switch (randomImg) {
        case "num1.svg":
            if (numeroUser == 1) {
                tentativa03.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa03.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num2.svg":
            if (numeroUser == 2) {
                tentativa03.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa03.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num3.svg":
            if (numeroUser == 3) {
                tentativa03.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa03.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num4.svg":
            if (numeroUser == 4) {
                tentativa03.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa03.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num5.svg":
            if (numeroUser == 5) {
                tentativa03.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa03.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;
    }

    mudaNumeroAleatorioJogo4();

    input.innerHTML = `<input class="numero-user" type="number">
    <div class="linha"></div>`
    botaoConfirmar.innerHTML = `<button class="botao-confirmar" onclick="confirmarNumero4Jogo4()">Confirmar</button>`
}

function confirmarNumero4Jogo4() {
    numeroUser = (document.querySelector(".numero-user").value);
    tentativa04 = document.querySelector("#tentativa-4");
    botaoConfirmar = document.querySelector(".confirmar-novo");
    input = document.querySelector(".numero-novo");

    switch (randomImg) {
        case "num1.svg":
            if (numeroUser == 1) {
                tentativa04.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa04.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num2.svg":
            if (numeroUser == 2) {
                tentativa04.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa04.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num3.svg":
            if (numeroUser == 3) {
                tentativa04.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa04.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num4.svg":
            if (numeroUser == 4) {
                tentativa04.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa04.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;

        case "num5.svg":
            if (numeroUser == 5) {
                tentativa04.innerHTML = `<img src="img/certoRoxoIcon.svg">`;
                acertos++;
            }
            else {
                tentativa04.innerHTML = `<img src="img/erradoRoxoIcon.svg">`;
            }
            break;
    }

    mudaNumeroAleatorioJogo4();

    body.innerHTML = `<main class="fundo-roxo">
    <h1 id="texto-final">Você acertou:</h1>
    <h1 id="acertos">${acertos}/4</h1>

    <button class="botao-voltar" onclick="voltar()">
        <img src="img/setaIcon.svg">
        <p>Menu</p>
    </button>

    <footer class="footer-final">
        <p>feito com</p>
        <img src="img/coracaoIcon.svg">
        <p>por Luiz</p>
    </footer>
</main>`
}