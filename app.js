let amigos = [];

function adicionarAmigo() {
    const campoNome = document.getElementById('amigo'); // Use o ID correto
    const nome = campoNome.value.trim();

    if (nome === '') {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos); // Para verificar se o nome foi adicionado

        // Aqui você pode adicionar o nome à lista no HTML, se desejar
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);

        campoNome.value = ''; // Limpa o campo de entrada
    }
}