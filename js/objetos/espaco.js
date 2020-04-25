const N = 5;

class Espaco {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
    this.estrelas = [];

    this.gerarEstrelas();
  }

  gerarEstrelas() {
    const larguraCelula = Math.floor(this.largura / N);
    const alturaCelula = Math.floor(this.altura / N);

    for (let linha = 0; linha < N; linha++) {
      const estrelasParaLinha = [];

      for (let coluna = 0; coluna < N; coluna++) {
        const posicaoEsquerdaCelula = coluna * larguraCelula;
        const posicaoDireitaCelula = posicaoEsquerdaCelula + larguraCelula - 1;
        const posicaoTopoCelula = linha * alturaCelula;
        const posicaoFundoCelula = posicaoTopoCelula + alturaCelula - 1;

        const posicaoAleatoriaX = Utils.aleatorioEntre(posicaoEsquerdaCelula, posicaoDireitaCelula);
        const posicaoAleatoriaY = Utils.aleatorioEntre(posicaoTopoCelula, posicaoFundoCelula);
        const estrela = new Estrela(posicaoAleatoriaX, posicaoAleatoriaY);
        estrelasParaLinha.push(estrela);
      }

      this.estrelas.push(estrelasParaLinha);
    }
  }

  desenharEstrelas(context) {
    for (let i = 0; i < this.estrelas.length; i++) {
      const estrelasParaLinha = this.estrelas[i];

      for (let j = 0; j < estrelasParaLinha.length; j++) {
        estrelasParaLinha[j].desenhar(context);
      }
    }
  }

  desenhar(context) {
    context.fillStyle = 'black';
    context.fillRect(0, 0, this.largura, this.altura);

    this.desenharEstrelas(context);
  }
}
