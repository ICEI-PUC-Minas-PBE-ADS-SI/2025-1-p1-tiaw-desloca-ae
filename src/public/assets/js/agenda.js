const tableBody = document.querySelector('.agenda-compromissos tbody');
const addBtn = document.querySelector('.agenda-btn');
const proximoCard = document.querySelector('.agenda-card');
let compromissoExtra = null;
let alertasEmitidos = {};
const API_URL = "http://localhost:3000/compromissos";

async function carregarCompromissos() {
    const resposta = await fetch(API_URL);
    const compromissos = await resposta.json();

    tableBody.innerHTML = "";

    compromissos.forEach(item => {
        const linha = document.createElement('tr');
        linha.dataset.id = item.id;
        linha.innerHTML = `
            <td>${item.hora}</td>
            <td>${item.destino}</td>
        `;

        adicionarBotoesAcao(linha, item.id);
        tableBody.appendChild(linha);
    });

    atualizarProximoDeslocamento();
}

function atualizarProximoDeslocamento() {
    const linhas = tableBody.querySelectorAll('tr');
    const agora = new Date();
    let maisProximo = null;
    let menorDiferenca = Infinity;

    linhas.forEach(linha => {
        const horaTexto = linha.children[0].innerText.trim();
        const [hora, minuto] = horaTexto.split(':').map(Number);
        const compromissoHora = new Date();
        compromissoHora.setHours(hora, minuto, 0, 0);

        const diffMin = (compromissoHora - agora) / (1000 * 60);

        if (diffMin >= 0 && diffMin < menorDiferenca) {
            menorDiferenca = diffMin;
            maisProximo = { horaTexto, diffMin };
        }
    });

    if (maisProximo) {
        proximoCard.innerHTML = `
            <p><strong>Hoje, ${maisProximo.horaTexto}</strong></p>
            <p>Saída em ${Math.round(maisProximo.diffMin)} min</p>
            <p>Notificação de lembrete definida.</p>
        `;

        const intervalos = [30, 15, 10, 5, 1];
        const horaAtual = maisProximo.horaTexto;
        const minRestantes = Math.round(maisProximo.diffMin);

        if (!alertasEmitidos[horaAtual]) {
            alertasEmitidos[horaAtual] = [];
        }

        intervalos.forEach(min => {
            if (
                minRestantes <= min &&
                !alertasEmitidos[horaAtual].includes(min)
            ) {
                alert(`Alerta: Saída em ${min} minutos para o compromisso das ${horaAtual}.`);
                alertasEmitidos[horaAtual].push(min);
            }
        });
    } else {
        proximoCard.innerHTML = ` <p>Nenhum compromisso futuro hoje.</p> `;
        alertasEmitidos = {};
    }
}

function adicionarBotoesAcao(linha, id) {
    const actionCell = linha.insertCell(-1);

    const editBtn = document.createElement('button');
    editBtn.innerText = "Editar";
    editBtn.classList.add("agenda-edit");
    editBtn.onclick = async () => {
        const horaCell = linha.children[0];
        const destinoCell = linha.children[1];

        if (horaCell.isContentEditable) {
            const atualizado = {
                hora: horaCell.innerText.trim(),
                origem: "Casa",
                destino: destinoCell.innerText.trim()
            };

            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(atualizado)
            });

            alert("Compromisso atualizado.");
            carregarCompromissos();
        } else {
            horaCell.contentEditable = true;
            destinoCell.contentEditable = true;
            horaCell.focus();
        }
    };

    const delBtn = document.createElement('button');
    delBtn.innerText = "Excluir";
    delBtn.classList.add("agenda-delete");
    delBtn.onclick = async () => {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        alert("Compromisso removido.");
        carregarCompromissos();
    };

    actionCell.appendChild(editBtn);
    actionCell.appendChild(delBtn);
}

addBtn.addEventListener('click', async () => {
    if (compromissoExtra) {
        alert("Limite atingido: só é possível adicionar um compromisso extra no momento.");
        return;
    }

    compromissoExtra = document.createElement('tr');
    compromissoExtra.innerHTML = `
        <td contenteditable="true">00:00</td>
        <td contenteditable="true">Novo Local</td>
    `;

    const salvarBtn = document.createElement('button');
    salvarBtn.innerText = "Salvar";
    salvarBtn.classList.add("agenda-save");
    salvarBtn.onclick = async () => {
        const hora = compromissoExtra.children[0].innerText.trim();
        const destino = compromissoExtra.children[1].innerText.trim();
        const origem = "Casa"; // Definido aqui, para evitar erro

        const novo = { hora, origem, destino };

        console.log("Novo compromisso:", novo); // Debug

        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novo)
        });

        if (resposta.ok) {
            alert("Compromisso salvo!");
            compromissoExtra = null;
            carregarCompromissos();
        } else {
            alert("Erro ao salvar compromisso.");
        }
    };

    const cell = compromissoExtra.insertCell(-1);
    cell.appendChild(salvarBtn);
    tableBody.appendChild(compromissoExtra);

    alert("Novo compromisso adicionado! Agora edite o horário e o local, e clique em 'Salvar' para que o sistema seja atualizado.");
});

document.addEventListener('DOMContentLoaded', () => {
    carregarCompromissos();
    setInterval(atualizarProximoDeslocamento, 60000);
});