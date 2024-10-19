function play() {
    const buttons = document.querySelectorAll('.Buttons');

    buttons.forEach(elemento => {
        elemento.style.display = 'flex';
        console.log('Jogo iniciado');
    });
}

function test(str) {
    const p = document.getElementById("resultado");
    let Sucesso = '';
    const ResultadoDaMaquina = JogoDaMaquina();

    if (str === 't' && ResultadoDaMaquina === 0) {
        Sucesso = 'Empate - ambos escolheram tesoura';
    }
    else if (str === 't' && ResultadoDaMaquina === 1) {
        Sucesso = 'Perdeu - tesoura contra pedra';
    }
    else if (str === 't' && ResultadoDaMaquina === 2) {
        Sucesso = 'Ganhou - tesoura contra papel';
    }
    else if (str === 'pe' && ResultadoDaMaquina === 0) {
        Sucesso = 'Ganhou - pedra contra tesoura';
    }
    else if (str === 'pe' && ResultadoDaMaquina === 1) {
        Sucesso = 'Empate - ambos escolheram pedra';
    }
    else if (str === 'pe' && ResultadoDaMaquina === 2) {
        Sucesso = 'Perdeu - pedra contra papel';
    }
    else if (str === 'pa' && ResultadoDaMaquina === 0) {
        Sucesso = 'Perdeu - papel contra tesoura';
    }
    else if (str === 'pa' && ResultadoDaMaquina === 1) {
        Sucesso = 'Ganhou - papel contra pedra';
    }
    else if (str === 'pa' && ResultadoDaMaquina === 2) {
        Sucesso = 'Empate - ambos escolheram papel';
    }

    p.innerText = Sucesso;
}

function JogoDaMaquina() {
    return Math.floor(Math.random() * 3);
}

// 0 = tesoura
// 1 = pedra
// 2 = papel
