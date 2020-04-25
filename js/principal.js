const canvas = document.getElementById('estrelas');
const espaco = new Espaco(canvas.width, canvas.height);

const context = canvas.getContext('2d');
espaco.desenhar(context);