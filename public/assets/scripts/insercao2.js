const { json } = require("body-parser");
const { application, response } = require("express");

const URL = "http://localhost:3000/noticias"; // Endpoint

function adicionarNoticia() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const conteudo = document.getElementById('conteudo').value;

    const data = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    if (!titulo || !autor || !conteudo) {
        alert("Preencha todos os campos!");
        return;
    }

    const novaNoticia = {
        titulo,
        autor,
        conteudo,
        data
    };

    fetch("http://localhost:3000/noticias", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novaNoticia)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Notícia salva com sucesso!", data);
            alert("Notícia adicionada com sucesso!");

            // Limpa os campos após salvar
            document.getElementById('titulo').value = "";
            document.getElementById('autor').value = "";
            document.getElementById('conteudo').value = "";
        })
        .catch(erro => {
            console.error("Erro ao salvar notícia:", erro);
            alert("Erro ao tentar adicionar a notícia.");
        });
}

// Adição do container de notícias

const noticiasContainer = document.getElementById('noticias-container');
noticiasContainer.innerHTML = "";

const noticiaDiv = document.createElement('div');
noticiaDiv.classList.add('noticia');
noticiaDiv.setAttribute('data-id', id);

const h4 = document.createElement('h4');
h4.textContent = titulo;

const pAutor = document.createElement('p');
pAutor.textContent = autor;

const pConteudo = document.createElement('p');
pConteudo.textContent = conteudo;

