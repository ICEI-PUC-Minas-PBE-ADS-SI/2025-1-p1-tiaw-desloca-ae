# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![desloca-arquitetura](https://github.com/user-attachments/assets/fd46360e-0f02-41fa-ba3b-d618e66ef7de)

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.

##### Funcionalidade 1 - Cadastro de contatos ⚠️ EXEMPLO ⚠️

Permite a inclusão, leitura, alteração e exclusão de contatos para o sistema

* **Estrutura de dados:** [Contatos](#estrutura-de-dados---contatos)
* **Instruções de acesso:**
  * Abra o site e efetue o login;
  * Acesse o menu principal e escolha a opção "Cadastros";
  * Em seguida, escolha a opção "Contatos".
* **Tela da funcionalidade**:

![Tela de funcionalidade](images/exemplo-funcionalidade.png)

> ⚠️ **APAGUE ESTA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente cada uma das funcionalidades que a aplicação fornece tanto para os usuários, quanto aos administradores da solução.
>
> Inclua, para cada funcionalidade, itens como: (1) títulos e descrição da funcionalidade; (2) estrutura de dados associada; (3) o detalhe sobre as instruções de acesso e uso.

### Estruturas de dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info.

##### Estrutura de dados - Contatos

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema.

```json
  {
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    email: "admin@abc.com",
    id: "eed55b91-45be-4f2c-81bc-7686135503f9",
    login: "admin",
    nome: "Administrador do Sistema",
    senha: "123"
  }
```
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

##### Estrutura de dados - Notícias

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


### Módulos e APIs

Esta seção apresenta os módulos e APIs utilizados na solução.

**Images**:

* Unsplash - [https://unsplash.com/](https://unsplash.com/) ⚠️ EXEMPLO ⚠️

**Fonts:**

* Icons Font Face - [https://fontawesome.com/](https://fontawesome.com/) ⚠️ EXEMPLO ⚠️

**Scripts:**

* jQuery - [http://www.jquery.com/](http://www.jquery.com/) ⚠️ EXEMPLO ⚠️
* Bootstrap 4 - [http://getbootstrap.com/](http://getbootstrap.com/) ⚠️ EXEMPLO ⚠️

> ⚠️ **APAGUE ESTA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente os módulos e APIs utilizados no desenvolvimento da solução. Inclua itens como: (1) frameworks, bibliotecas, módulos, etc. utilizados no desenvolvimento da solução; (2) APIs utilizadas para acesso a dados, serviços, etc.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
