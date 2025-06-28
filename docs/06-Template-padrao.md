## 🧩 Template padrão da aplicação

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="04-Metodologia.md"> Metodologia</a>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

O **template padrão da aplicação Desloca Aê** foi desenvolvido com foco em identidade visual moderna, responsividade e usabilidade. Ele é utilizado como base em todas as páginas da aplicação.

### ✅ Estrutura do layout:

- **Cabeçalho fixo (header):**
  - Contém o logotipo “Desloca Aê” e uma barra de navegação com links para as principais páginas do sistema (Agenda, Feedbacks, Notícias, Rotas, etc.).
  - Possui menu responsivo tipo “hambúrguer” ativado em dispositivos móveis.
  
- **Área principal (main):**
  - Exibe o conteúdo específico de cada página.
  - Exemplo: campo de busca e resultados na tela de pesquisas.

- **Rodapé (footer):**
  - Ícones de redes sociais e contatos (Instagram, LinkedIn, telefone e e-mail).
  - Aviso de direitos autorais da plataforma.

### 🎨 Identidade visual:

- **Fonte e cores:**
  - Cores principais: tons de azul escuro (`#0f365f`) com branco, sugerindo confiança e modernidade.
  - Ícones e texto com uso da biblioteca **Font Awesome** para reforçar a identidade digital.
  
- **Responsividade:**
  - Utilização de *media queries* e design *mobile-first*.
  - Menu colapsável em telas menores.
  
- **Iconografia:**
  - Font Awesome para perfis, redes sociais e navegação.
  - Ícones utilizados com propósito funcional e estético.

### 🛠️ Tecnologias aplicadas:

- **HTML5 + CSS3**
- **Font Awesome**
- **JavaScript** (modularizado com scripts separados)
- Layout e comportamento definidos nos arquivos:
  - `tela-home.css`, `style.css` para o visual
  - `navbar.js`, para o comportamento

### 🧪 Observações:

- O template serve como base reutilizável para novas páginas.
- Todos os componentes seguem o mesmo padrão visual, garantindo consistência e fácil manutenção do projeto.

