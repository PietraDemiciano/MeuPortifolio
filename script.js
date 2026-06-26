function mostrarCuriosidade() {
    const texto = document.getElementById('texto-curiosidade');
    const botao = document.getElementById('btn-curiosidade');

    if (texto && botao) {
        // Remove a classe que esconde e adiciona a classe de estilo definida no CSS
        texto.classList.remove('escondido');
        texto.classList.add('curiosidade-box');

        // Esconde o botão após ser clicado
        botao.style.display = 'none';
    }
}