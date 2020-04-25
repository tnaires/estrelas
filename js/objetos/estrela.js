const TAMANHO = 1;

class Estrela {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  desenhar(context) {
    context.fillStyle = 'white';
    context.fillRect(this.x, this.y, TAMANHO, TAMANHO);
  }
}
