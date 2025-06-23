# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="03-Product-design.md">Especificação do projeto</a>.

Por exemplo:

| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que estes consigam criar e gerenciar seu perfil. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar em "Criar conta" <br> - Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, CPF, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" |
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Nome do integrante da equipe. |

<br>

| **Caso de teste**  | **CT-002 – Efetuar login**  |
|:---: |:---: |
| Requisito associado | RF-00Y - A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail. |
| Objetivo do teste | Verificar se o usuário consegue realizar login. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Nome do integrante da equipe. |

<br>

| **Caso de teste**  | **CT-003 – Cadastrar Notícia**  |
|:---: |:---: |
| Requisito associado | RF-00Y - A aplicação deve possuir opção de cadastrar uma notícia. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar uma notícia. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site (Link) <br> - Clicar no menu "Notícias" <br> - Preencher os campos da nova notícia <br>- Clicar em "Cadstrar Notícia" |
| Critério de êxito | - Notícia cadastrada com sucesso. |
| Responsável pela elaboração do caso de teste | Lucas Gabriel. |

<br>

| **Caso de teste**  | **VT-001 – Cadastro de Conta**  |
|:---: |:---: |
| Requisito associado | A página deve permitir que o usuário crie uma nova conta. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar no site. |
| Passos | - Acessar a página de login <br> - Clicar no botão "Cadastre-se" <br> - Preencher os campos correspondentes <br> - Clicar em "Criar" |
| Critério de êxito | - A conta foi criada com sucesso. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **VT-002 – Login de usuário**  |
|:---: |:---: |
| Requisito associado | A página deve permitir que o usuário faça login com a conta criada.|
| Objetivo do teste | Verificar se o usuário consegue fazer login no site.|
| Passos | - Acessar a página de login <br> - Preencher o campo "E-mail ou Telefone" <br> - Preencher o campo "Senha" <br> - Clicar em "Entrar" |
| Critério de êxito | - Caso o e-mail ou telefone e senha estejam corretos, o login é efetuado com êxito e o usuário é direcionado para a página about.|
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **VT-003 – Enviar Feedback**  |
|:---: |:---: |
| Requisito associado | A seção "Feedbacks" deve permitir que o usuário avalie a página através de feedbacks.|
| Objetivo do teste | Verificar se o usuário consegue realizar uma avaliação.|
| Passos | - Acessar a página de feedbacks <br> - Preencher os campos correspondentes <br> - Clicar em "Enviar Feedback" |
| Critério de êxito | - O feedback é enviado com sucesso e um pop-up de êxito aparece no canto inferior da tela. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **VT-004 – Ver e Excluir Feedback**  |
|:---: |:---: |
| Requisito associado | O botão "Feedbacks Enviados" deve levar o usuário a uma seção de visualização das avaliações.|
| Objetivo do teste | Verificar se o usuário consegue visualizar e excluir os feedbacks enviados por ele.|
| Passos | - Clicar no botão "Feedbacks Enviados" <br> - Visualizar um feedback  <br> - Clicar em "Excluir" |
| Critério de êxito | - O feedback é visualizado e excluído com sucesso. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **VT-005 – Perfil de usuário**  |
|:---: |:---: |
| Requisito associado | A página deve permitir que o usuário veja os dados cadastrados no login na aba "Meu Perfil" e permitir que ele personalize o perfil com uma foto.|
| Objetivo do teste | Verificar se o usuário consegue visualizar seus dados de cadastro e adicionar uma foto de perfil.|
| Passos | - Clicar no botão "Meu Perfil" na aba de feedbacks <br> - Visualizar os dados ja cadastrados  <br> - Clicar em "Enviar nova foto" <br> - Escolher uma foto e fazer o upload |
| Critério de êxito | - A foto enviada e os dados cadastrados são exibidos corretamente. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **VT-006 - Mapa de Feedbacks**  |
|:---: |:---: |
| Requisito associado | O usuário pode visualizar a média de avaliações dos príncipais bairros de Betim onde há feedbacks enviados.|
| Objetivo do teste | Verificar se o usuário consegue vizualizar o mapa com as médias de feedbacks dos bairros de Betim.|
| Passos | - Realizar um feedback e prencher o campo "Bairro" corretamente <br> - Clicar no botão "Mapa de Feedbacks" no navbar da aba de feedbacks |
| Critério de êxito | - Um marcador deve aparecer no mapa com o nome do bairro que você inseriu e a nota atribuída. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |




## Ferramentas de testes (opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links úteis**:
> - [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e técnicas de testes ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de software: conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e geração de planos de teste de software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de teste para JavaScript](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
