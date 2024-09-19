// Dados do gráfico
const dados = [50, 75, 55, 65, 80, 90]; // Valores y
const rotulos = ["20/06", "21/06", "22/06", "23/06", "24/06", "25/06"]; // Rótulos x

// Seleciona o canvas e define o contexto
const canvas = document.getElementById('graficoLinha');
const ctx = canvas.getContext('2d');

// Atualiza dinamicamente a largura e altura do canvas conforme a janela
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const larguraCanvas = canvas.width;
const alturaCanvas = canvas.height;

// Definindo margens proporcionais ao novo tamanho
const margemEsquerda = 0.1 * larguraCanvas;  // 10% da largura do canvas
const margemBaixo = 0.1 * alturaCanvas;      // 10% da altura do canvas

// Função para desenhar o gráfico de linha
function desenharGraficoLinha() {
    ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);
    
    // Desenha a linha
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000"; // Cor vermelha para a linha
    ctx.lineWidth = 3;

    for (let i = 0; i < dados.length; i++) {
        const x = margemEsquerda + (i * ((larguraCanvas - margemEsquerda * 2) / (dados.length - 1)));
        const y = alturaCanvas - margemBaixo - (dados[i] * (alturaCanvas * 0.007)); // Multiplicador para ajustar altura

        if (i === 0) {
            ctx.moveTo(x, y); // Início da linha
        } else {
            ctx.lineTo(x, y); // Desenha a linha para o próximo ponto
        }
    }

    ctx.stroke(); // Finaliza a linha

    // Desenha os pontos na linha
    for (let i = 0; i < dados.length; i++) {
        const x = margemEsquerda + (i * ((larguraCanvas - margemEsquerda * 2) / (dados.length - 1)));
        const y = alturaCanvas - margemBaixo - (dados[i] * (alturaCanvas * 0.007));
        ctx.fillStyle = "#FF0000"; // Cor dos pontos (vermelho)
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI); // Ponto no gráfico (raio 6 para destacar mais)
        ctx.fill();
    }

    // Desenha os rótulos do eixo X
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    for (let i = 0; i < rotulos.length; i++) {
        const x = margemEsquerda + (i * ((larguraCanvas - margemEsquerda * 2) / (rotulos.length - 1)));
        ctx.fillText(rotulos[i], x - 25, alturaCanvas - margemBaixo + 30); // Ajusta a posição do rótulo
    }

    // Desenha o eixo X
    ctx.beginPath();
    ctx.moveTo(margemEsquerda, alturaCanvas - margemBaixo);
    ctx.lineTo(larguraCanvas - margemEsquerda, alturaCanvas - margemBaixo);
    ctx.strokeStyle = "#ddd";
    ctx.stroke();

    // Desenha o eixo Y
    ctx.beginPath();
    ctx.moveTo(margemEsquerda, alturaCanvas - margemBaixo);
    ctx.lineTo(margemEsquerda, margemBaixo);
    ctx.stroke();
}

// Chama a função para desenhar o gráfico
desenharGraficoLinha();

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('.cabecalho__menu__link');

    // Adiciona o evento de clique em cada link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            menuLinks.forEach(link => link.classList.remove('active'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');

            // Aqui não usamos preventDefault() para permitir o redirecionamento
        });
    });
});


