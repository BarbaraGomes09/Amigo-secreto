// Supondo que você tenha um array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const campoNome = document.getElementById('nomeAmigo'); // ou use document.querySelector
    const nome = campoNome.value.trim(); // Remove espaços em branco

    // Valida a entrada
    if (nome === '') {
        alert("Por favor, insira um nome.");
    } else {
        // Atualiza o array de amigos
        amigos.push(nome);
        console.log(amigos); // Para verificar se o nome foi adicionado

        // Limpa o campo de entrada
        campoNome.value = '';
    }
}
