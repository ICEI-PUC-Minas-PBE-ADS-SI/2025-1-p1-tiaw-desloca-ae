const dadosRotas = [
    { id: 1, numero_rota: 102, sentido: "norte", trajeto: "Alvorada – Via Expressa", preco: 5.50 },
    { id: 2, numero_rota: 203, sentido: "sul", trajeto: "Centro – Barreiro", preco: 4.75 },
    { id: 3, numero_rota: 304, sentido: "leste", trajeto: "Savassi – Praça da Liberdade", preco: 6.00 },
    { id: 4, numero_rota: 405, sentido: "oeste", trajeto: "Estação Diamante – Betim", preco: 7.25 },
    { id: 5, numero_rota: 506, sentido: "norte", trajeto: "Pampulha – Aeroporto", preco: 8.00 },
    { id: 6, numero_rota: 607, sentido: "sul", trajeto: "BH Shopping – Praça Sete", preco: 5.25 },
    { id: 7, numero_rota: 708, sentido: "leste", trajeto: "Santa Tereza – Bairro Funcionários", preco: 4.90 },
    { id: 8, numero_rota: 809, sentido: "oeste", trajeto: "Cidade Industrial – Contagem", preco: 6.75 },
    { id: 9, numero_rota: 910, sentido: "norte", trajeto: "Venda Nova – Terminal Vilarinho", preco: 5.90 },
    { id: 10, numero_rota: 1011, sentido: "sul", trajeto: "Nova Lima – Centro de BH", preco: 7.00 }
];

document.querySelector("#caixa-pesquisa").addEventListener("input", function () {
    let termo = this.value.toLowerCase();
    let resultado = dadosRotas.filter(rota => 
        rota.numero_rota.toString().includes(termo) ||
        rota.sentido.toLowerCase().includes(termo) ||
        rota.trajeto.toLowerCase().includes(termo)
    );

    exibirResultados(resultado);
});

function exibirResultados(rotas) {
    let container = document.querySelector("#resultado-container");
    container.innerHTML = ""; // Limpa resultados anteriores

    if (rotas.length === 0) {
        container.innerHTML = "<p>Nenhuma rota encontrada.</p>";
        return;
    }

    rotas.forEach(rota => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>Rota ${rota.numero_rota}</h3>
            <p><strong>Sentido:</strong> ${rota.sentido}</p>
            <p><strong>Trajeto:</strong> ${rota.trajeto}</p>
            <p><strong>Preço:</strong> R$ ${rota.preco.toFixed(2)}</p>
        `;
        container.appendChild(card);
    });
}

