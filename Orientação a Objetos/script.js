const response = document.querySelector("#erro");
const divAndarAtual = document.querySelector("#andarAtual");
const divPessoasDentro = document.querySelector("#pessoasDentro");

class Elevador {
  constructor() {
    this.andarMax = 15;
    this.andarAtual = 0;
    this.pessoasMax = 10;
    this.pessoasDentro = 0;
  }

  entra() {
    if (this.pessoasDentro < this.pessoasMax) {
      this.pessoasDentro++;
      divPessoasDentro.textContent = this.pessoasDentro;
    } else {
      response.textContent = "O elevador está em sua capacidade máxima."
    }
  }

  sai() {
    if (this.pessoasDentro > 0) {
      this.pessoasDentro--;
      divPessoasDentro.textContent = this.pessoasDentro;
    } else {
      response.textContent = "O elevador está vazio."
    }
  }

  sobe() {
    if (this.andarAtual < this.andarMax) {
      this.andarAtual++;
      if (this.andarAtual == 0) {
        divAndarAtual.textContent = '0 - Térreo';
      } else {
        divAndarAtual.textContent = this.andarAtual + '° Andar';
      }
    } else {
      response.textContent = "Você está no último andar."
    }
  }

  desce() {
    if (this.andarAtual > 0) {
      this.andarAtual--;
      if (this.andarAtual == 0) {
        divAndarAtual.textContent = 'Térreo';
      } else {
        divAndarAtual.textContent = this.andarAtual + '° Andar';
      }
    } else {
      response.textContent = "Você já está no térreo."
    }
  }
}

const btnEntra = document.querySelector("#btnEntra");
const btnSair = document.querySelector("#btnSair");
const btnSobe = document.querySelector("#btnSobe");
const btnDesce = document.querySelector("#btnDesce");

let elevador = new Elevador();

btnEntra.addEventListener('click', () => {
  elevador.entra();
});

btnSair.addEventListener('click', () => {
  elevador.sai();
});

btnSobe.addEventListener('click', () => {
  elevador.sobe();
});

btnDesce.addEventListener('click', () => {
  elevador.desce();
});


