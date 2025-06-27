# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

<br>

| **Caso de teste**  | **CT-001 – Cadastrar Notícia**  |
|:---: |:---: |
| Requisito associado | A aplicação deve possuir opção de cadastrar uma notícia. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar uma notícia. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site (Link) <br> - Clicar no menu "Notícias" <br> - Preencher os campos da nova notícia <br>- Clicar em "Cadstrar Notícia" |
| Critério de êxito | - Notícia cadastrada com sucesso. |
| Responsável pela elaboração do caso de teste | Lucas Gabriel |

<br>

<br>

| **Caso de teste**  | **CT-002 – Cadastro de Conta**  |
|:---: |:---: |
| Requisito associado | A página deve permitir que o usuário crie uma nova conta. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar no site. |
| Passos | - Acessar a página de login <br> - Clicar no botão "Cadastre-se" <br> - Preencher os campos correspondentes <br> - Clicar em "Criar" |
| Critério de êxito | - A conta foi criada com sucesso. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **CT-003 – Login de usuário**  |
|:---: |:---: |
| Requisito associado | A página deve permitir que o usuário faça login com a conta criada.|
| Objetivo do teste | Verificar se o usuário consegue fazer login no site.|
| Passos | - Acessar a página de login <br> - Preencher o campo "E-mail ou Telefone" <br> - Preencher o campo "Senha" <br> - Clicar em "Entrar" |
| Critério de êxito | - Caso o e-mail ou telefone e senha estejam corretos, o login é efetuado com êxito e o usuário é direcionado para a página about.|
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **CT-004 – Enviar Feedback**  |
|:---: |:---: |
| Requisito associado | A seção "Feedbacks" deve permitir que o usuário avalie a página através de feedbacks.|
| Objetivo do teste | Verificar se o usuário consegue realizar uma avaliação.|
| Passos | - Acessar a página de feedbacks <br> - Preencher os campos correspondentes <br> - Clicar em "Enviar Feedback" |
| Critério de êxito | - O feedback é enviado com sucesso e um pop-up de êxito aparece no canto inferior da tela. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **CT-005 – Ver e Excluir Feedback**  |
|:---: |:---: |
| Requisito associado | O botão "Feedbacks Enviados" deve levar o usuário a uma seção de visualização das avaliações.|
| Objetivo do teste | Verificar se o usuário consegue visualizar e excluir os feedbacks enviados por ele.|
| Passos | - Clicar no botão "Feedbacks Enviados" <br> - Visualizar um feedback  <br> - Clicar em "Excluir" |
| Critério de êxito | - O feedback é visualizado e excluído com sucesso. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **CT-006 – Perfil de usuário**  |
|:---: |:---: |
| Requisito associado | A página deve permitir que o usuário veja os dados cadastrados no login na aba "Meu Perfil" e permitir que ele personalize o perfil com uma foto.|
| Objetivo do teste | Verificar se o usuário consegue visualizar seus dados de cadastro.|
| Passos | - Clicar no botão "Meu Perfil" na aba de feedbacks <br> - Visualizar os dados ja cadastrados |
| Critério de êxito | - Os dados cadastrados são exibidos corretamente. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **CT-007 - Mapa de Feedbacks**  |
|:---: |:---: |
| Requisito associado | O usuário pode visualizar a média de avaliações dos príncipais bairros de Betim onde há feedbacks enviados.|
| Objetivo do teste | Verificar se o usuário consegue vizualizar o mapa com as médias de feedbacks dos bairros de Betim.|
| Passos | - Realizar um feedback e prencher o campo "Bairro" corretamente <br> - Clicar no botão "Mapa de Feedbacks" no navbar da aba de feedbacks |
| Critério de êxito | - Um marcador deve aparecer no mapa com o nome do bairro que você inseriu e a nota atribuída. |
| Responsável pela elaboração do caso de teste | VITOR GUIMARÃES |

<br>

| **Caso de teste**  | **CT-008 – Editar/Excluir Compromisso** |
|:---: |:---: |
| Requisito associado | A aplicação deve permitir ao usuário editar ou excluir compromissos exibidos na tela principal. |
| Objetivo do teste | Verificar se o usuário consegue editar ou excluir compromissos existentes. |
| Passos | -  Na tela principal, identificar a tabela com compromissos <br> - Clicar no botão "Editar" de um compromisso <br> - Modificar a hora e o local <br> - Sair do campo para confirmar a edição <br> - Clicar no botão "Excluir" para remover um compromisso. |
| Critério de êxito | - As edições são salvas automaticamente e a seção “Próximo Deslocamento” é atualizada <br> - O compromisso é removido da tabela após a exclusão. |
| Responsável pela elaboração do caso de teste | Pedro Martins |

<br>

| **Caso de teste**  | **CT-009 – Adicionar Novo Compromisso** |
|:---: |:---: |
| Requisito associado | A aplicação deve permitir ao usuário adicionar um novo compromisso. |
| Objetivo do teste | Verificar se o usuário consegue adicionar um novo compromisso e editar seus dados. |
| Passos | - Na tela principal, clicar em "+ Adicionar compromisso" <br> - Preencher os campos de hora e local do novo compromisso e clicar em salvar <br> - Notificação que e o compromisso foi adicionado com sucesso. |
| Critério de êxito | - O sistema permite a criação/adição de um novo compromisso <br> - O novo compromisso aparece na lista e influencia a seção “Próximo Deslocamento” |
| Responsável pela elaboração do caso de teste | Pedro Martins |

<br>

| **Caso de teste**  | **CT-010 – Acessar a Seção de Estatísticas** |
|:---: |:---: |
| Requisito associado | A aplicação deve permitir acesso à seção de estatísticas na visualização dos compromisos presentes e salvos na agenda.  |
| Objetivo do teste | Verificar se o usuário consegue acessar corretamente a seção de estatísticas. |
| Passos | - Estar na tela da agenda com o JSON Server em execução <br> - Clicar no botão "Estatísticas" no cabeçalho |
| Critério de êxito | - A tela de estatísticas é carregada exebibindo dados salvos e computados com base na agenda do usuário |
| Responsável pela elaboração do caso de teste | Pedro Martins|

<br>

| **Caso de teste**  | **CT-011 – Atualização Automática das Estatísticas** |
|:---: |:---: |
| Requisito associado | A aplicação deve atualizar automaticamente os dados estatísticos ao alterar a agenda. |
| Objetivo do teste | Verificar se as estatísticas são atualizadas automaticamente após mudanças nos compromissos. |
| Passos | - Acessar a página da agenda com compromissos existentes <br> - Adicionar, editar ou excluir um compromisso <br> - Clicar em "Estatísticas" para verificar as alterações |
| Critério de êxito | - As alterações feitas nos compromissos são refletidas automaticamente na tela de estatísticas |
| Responsável pela elaboração do caso de teste | Pedro Martins |

<br>

| **Caso de teste**  | **CT-012 – Acessar a Tela Inicial** |
|:---: |:---: |
| Requisito associado | Ao Logar ou clicar na logo site. |
| Objetivo do teste | Verificar se o usuário consegue acessar corretamente a seção de estatísticas. |
| Passos | - Acessar a tela inicial com o JSON Server em execução <br> - Logar ou Clicar na logo do site caso estiver em outra funcionalidade <br> - Permitir que o navegador use a localização |
| Critério de êxito | - O mapa é carregado corretamente, exibindo a localização do usuário e o carrossel de novidades está funcional |
| Responsável pela elaboração do caso de teste | Flávio Lara |

<br>

| **Caso de teste**  | **CT-013 – Exibir Página de Recompensas** |
|:---: |:---: |
| Requisito associado | A aplicação deve exibir os dados de missões recompensas do usuário. |
| Objetivo do teste | Verificar se a página mostra as missões e recompensas corretamente. |
| Passos | - Acessar a página de recompensas através do cabeçalho <br> - Verificar se a página carrega e exibe os dados |
| Critério de êxito | - A página de recompensas é carregada e exibe os dados corretamente |
| Responsável pela elaboração do caso de teste | Flávio Lara |
<br>

| **Caso de teste**  | **CT-014 – Pesquisar Rotas** |
|:---: |:---: |
| Requisito associado | A aplicação deve exibir os dados de rotas cadastradas. |
| Objetivo do teste | Verificar se a página mostra as rotas cadastradas corretamente. |
| Passos | - Acessar a página de rotas através do cabeçalho <br> - Verificar se a página carrega e exibe os dados após pesquisa. |
| Critério de êxito | - As rotas são carregadas corretamente. |
| Responsável pela elaboração do caso de teste | Lucas Gabriel |



