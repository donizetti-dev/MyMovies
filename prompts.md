### Nome das IAs consultadas
 Gemini
 Chatgpt
 Manus ai

### Prompt usado
Você é um desenvolvedor front-end iniciante e foi encarregado para a criação do MyMovies. Uma aplicação web que simula um sistema simples de cadastro de filmes que os usúarios pretende assistir futuramente. A aplicação deve ter uma tela de login e, após autenticação, exibir a lista com as operações de CRUD.

A tela de login deve ser a primeira tela da aplicação, o único login aceito deve ser com usuário: aluno senha: fiap2025, caso as credenciais estejam erradas deve aparecer uma mensagem de erro, caso estejam certas o usuario será redirecionado para a tela do MyMovies, com o CRUD.

- **Adicionar** um item ao final da lista
- **Adicionar** um item ao início da lista
- **Ver** todos os itens exibidos dinamicamente na tela
- **Editar** qualquer item individualmente
- **Remover** qualquer item individualmente

Toda vez que a lista muda, a tela deve ser atualizada automaticamente para refletir o estado atual dos dados. A lista deve conter pelo menos **3 itens iniciais**, que serão exibidos ao carregar a primeira vez a página.

**REQUISITOS:
- a aplicação será desenvolvida unicamente em HTML, CSS E Javascript puro - sem nenhum uso de bibliotecas e frameworks e utilizando a versão mais nova das linguagens
- Os dados devem ser armazenados em um array de strings — sem uso de objetos dentro do array
- A lógica deve ser organizada em funções nomeadas — sem código solto fora de funções, exceto a declaração de variáveis e a chamada inicial de renderização
- O javascript, principalmente, deve ser gerado como realmente um front-end iniciante, então devem ser usados funções básicas e com o mínimo de complexidade no código, deixando assim o código funcional mas o mais básico possível.

 Validações obrigatórias

- Os campos de login não podem ser enviados vazios
- Nenhum item pode ser salvo com o campo vazio — a mensagem de erro deve aparecer na tela
- Ao editar um item, se o usuário cancelar ou confirmar com o campo vazio, o item original deve permanecer sem alteração
- A remoção de um item deve considerar sua posição na lista, não o seu valor — para evitar que itens com o mesmo texto sejam removidos ao mesmo tempo

Utilize javascript atual e usado no mercado.

### Principais problemas em cada resposta

### gemini
Antes de ser subido para produção, seria necessário uma refatoração de praticamente todo o código, ainda que estruturado o gemini gerou um código totalmente bagunçado e com alguns erros, causando um retrabalho muito grande para funcionamento das funções.

### Chat gpt
Gerou um código funcional mas com funções e algumas linhas mais complexas, além de não ter atendido todas os requisitos solicitados no prompt

### Manus AI
Gerou um código funcional mas com declarações de variaveis com 'var', não atendendo requisito de geração de um código com javascrpt atual

### IA escolhida: Manus AI
Gerou o ccódigo funcional, bem estruturado e muito claro sem nenhuma complexidade conforme foi solicitado, apenas alguns detalhes para refatoração.



