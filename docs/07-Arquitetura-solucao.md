# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![desloca-arquitetura](https://github.com/user-attachments/assets/fd46360e-0f02-41fa-ba3b-d618e66ef7de)

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.

##### Funcionalidade 1 - Cadastro de Notícias 

Permite a inclusão, leitura, alteração e exclusão de notícias para o sistema

* **Estrutura de dados:** [Notícias](#estrutura-de-dados---Notícias)
* **Instruções de acesso:**
  * Abra o site e efetue o login;
  * Acesse o menu principal e escolha a opção "Notícias";
  * Em seguida, preencha o formulário e cadastre uma nova notícia.
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/90ec15b3-98b2-4080-bd8e-9c88e3d4c55b)

### Estruturas de dados

A aplicação utiliza uma estrutura baseada em objetos JSON para representar e armazenar as notícias cadastradas. Cada notícia é representada como um objeto com as seguintes propriedades:

##### Estrutura de dados - Notícias

Notícias cadastradas na aplicação:

```json
  {
    "id": "13",
      "titulo": "Linha direta entre bairros é criada para facilitar deslocamentos",
      "autor": "Lucas Gabriel",
      "conteudo": "Novo itinerário ligando os bairros Santa Rita e Palmeiras entra em operação hoje. Ônibus circulam de 15 em 15 minutos.",
      "data": "07/06/2025"
  }
  
```
##### Funcionalidade 2 - Pesquisas por Rotas Rodoviárias 

Permite a pesquisa de rotas rodoviárias cadastradas no sistema.

* **Estrutura de dados:** [Rotas](#estrutura-de-dados---rotas)
* **Instruções de acesso:**
  * Abra o site e efetue o login;
  * Acesse o menu principal e escolha a opção "rotas";
  * Em seguida, preencha o campo de busca com a rota desejada.
* **Tela da funcionalidade**:

![image](https://github.com/user-attachments/assets/ab30cc16-4081-449a-8669-3f497653f7a7)

### Estruturas de dados

A aplicação utiliza objetos JSON para armazenar informações sobre rotas de ônibus. Cada rota é representada por um objeto contendo os seguintes campos:

##### Estrutura de dados - Rotas

Rotas cadastradas na aplicação:

```json
  {
    "id": "9",
      "numero_rota": "910",
      "sentido": "Norte",
      "trajeto": "Venda Nova - Terminal Vilarinho",
      "preco": "5.90"
  }
  
```

##### Funcionalidade 3 - Cadastro de Feedbacks 

Permite a inclusão, leitura e exclusão de feedbacks para o json.server

* **Estrutura de dados:** [Feedbacks](#estrutura-de-dados---Feedbacks)
* **Instruções de acesso:**
  * Abra o site e efetue o login;
  * Acesse o menu principal e escolha a opção "Feedbacks";
  * Preencha os campos e envie um novo feedback, que pode ser visualizado no campo "Feedbacks enviados".
* **Tela da funcionalidade**:

![Image](https://github.com/user-attachments/assets/fe179ac2-0b5c-45b9-8741-65a62a721cd6)

### Estruturas de dados

A aplicação utiliza uma estrutura baseada em objetos JSON para representar e armazenar os feedbacks cadastrados. Cada feedback é representado como um objeto contendo as seguintes propriedades:

##### Estrutura de dados - Feedbacks

Feedbacks enviados para o JSON Server:

```json
  "feedbacks": [
    {
      "id": "1",
      "nome": "VITOR DE OLIVEIRA GUIMARÃES",
      "email": "ovitordeoliveiraguimaraes@gmail.com",
      "comentario": "Excelente, funciona muito bem!",
      "bairro": "CENTRO",
      "nota": 5,
      "data": "15/06/2025, 16:09:07"
    }
  ],
  
```

##### Funcionalidade 4 - Cadastro de Usuário e Perfil

Permite o cadastro de usuários, e a visualização dos dados no perfil 

* **Estrutura de dados:** [Usuários](#estrutura-de-dados---Usuários)
* **Instruções de acesso:**
  * Abra o site e cadastre uma nota conta;
  * Acesse o login com os dados cadastrados;
  * Acesse o menu principal e escolha a opção "Perfil";
* **Tela da funcionalidade**:

![Image](https://github.com/user-attachments/assets/aeda0ed5-114a-4dae-80ae-406d4fa020d6)

![Image](https://github.com/user-attachments/assets/32a526db-040f-4ce3-8202-961217bf6a91)

### Estruturas de dados

A aplicação utiliza uma estrutura baseada em objetos JSON para representar e armazenar os usuários cadastrados. Cada usuário é representado como um objeto contendo as seguintes propriedades:

##### Estrutura de dados - Usuários

Usuários cadastrados na aplicação do JSON Server:

```json
  "usuarios": [
    {
      "id": "f6a3",
      "nome": "Vitor Guimarães",
      "email": "ovitordeoliveiraguimaraes@gmail.com",
      "telefone": "31991665840",
      "senha": "123VT"
    }
  ],
  
```


## Módulos e APIs

Esta seção descreve os módulos, bibliotecas e APIs utilizadas no desenvolvimento da solução para o sistema de deslocamento e transporte em Betim.

### 1. Frameworks e Bibliotecas
- Bootstrap 5 – Framework CSS utilizado para construção da interface responsiva e estilização dos componentes do site.
Link: https://getbootstrap.com

- Font Awesome 6.5.0 – Biblioteca de ícones vetoriais utilizada para a inserção de ícones em botões, menus e rodapé, melhorando a experiência visual.
Link: https://fontawesome.com

- Leaflet.js – Biblioteca JavaScript open source para mapas interativos, utilizada para exibir o mapa de avaliações por bairros na cidade de Betim.
Link: https://leafletjs.com

- jQuery – Biblioteca JavaScript para facilitar manipulação do DOM e interatividade.

### 2. APIs para Acesso a Dados e Serviços
- OpenStreetMap – Serviço de mapas colaborativo utilizado para fornecer os mapas base exibidos no sistema via Leaflet.
Link: https://www.openstreetmap.org

LocalStorage do navegador – Utilizado para armazenar localmente os feedbacks dos usuários e suas avaliações, permitindo a persistência dos dados entre sessões.

### 3. Outros Recursos
- Google Fonts – Poppins – Fonte tipográfica usada para manter a identidade visual do site, proporcionando boa legibilidade.
Link: https://fonts.google.com/specimen/Poppins

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
