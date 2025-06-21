# INVEX – Plataforma de Estoque Eletrônico Online

**CENTRO PAULA SOUZA**  
**FACULDADE DE TECNOLOGIA DE FRANCA “Dr THOMAZ NOVELINO”**

**TECNOLOGIA EM DESENVOLVIMENTO DE SOFTWARE MULTIPLATAFORMA**

**Autores:**
- Arthur Cesar Sousa Marcelino
- Hugo de Castro Rodrigues
- Pablo Miguel Sousa Nobrega
- Vitor Siqueira Simeão

**FRANCA/SP 2024**

---

## 1. Introdução

### a) Descrição do problema
A gestão de estoques é um desafio para micro, pequenas e médias empresas. Falta de controle, ausência de informações em tempo real e desorganização nos registros geram prejuízos e dificultam decisões. Muitas empresas ainda usam planilhas ou processos manuais, o que causa inconsistências e retrabalho. A integração entre setores é limitada, dificultando o crescimento sustentável.

### b) Objetivo do trabalho
Desenvolver a INVEX, uma plataforma web inteligente e intuitiva para gerenciamento completo de estoques. A aplicação automatiza processos, registra e organiza dados de forma segura e apresenta informações analíticas para suporte à decisão. Permite cadastrar e gerenciar produtos, fornecedores, clientes, categorias, movimentações, níveis de estoque mínimo, entre outros. Conta com dashboard interativo com indicadores-chave.

### c) Contribuição e importância
A INVEX contribui para a digitalização e profissionalização da gestão de estoques em pequenas e médias empresas, oferecendo automação, rastreabilidade, acesso remoto, relatórios e centralização dos dados. O projeto também tem valor acadêmico e social, explorando conceitos de engenharia de software, UX, arquitetura de sistemas e boas práticas web.

### d) Público-alvo
- Pequenos e médios empresários
- Lojistas e comerciantes
- Profissionais autônomos e empreendedores digitais
- Equipes administrativas e de logística

---

## 2. Funcionalidades e Requisitos Atendidos

- Cadastro, listagem, edição, inativação e reativação de **produtos** (com nome, descrição, quantidade, categoria, preço, variações e estoque mínimo)
- Cadastro, listagem, edição e inativação de **fornecedores** (com validação de CNPJ/CPF)
- Cadastro, listagem, edição e inativação de **clientes** (com validação de CPF/CNPJ)
- Cadastro, listagem, edição, inativação e reativação de **categorias** (e vinculação obrigatória de produtos a categorias ativas)
- Registro de **movimentações** de entrada/saída de estoque (produto, tipo, quantidade, fornecedor, usuário, observações)
- Atualização automática do estoque conforme movimentação
- Bloqueio de saída com estoque insuficiente
- Listagem detalhada de movimentações
- Cadastro, edição e listagem de **usuários** (com associação às movimentações)
- **Login** seguro de usuários
- **Dashboard** com indicadores (estoque baixo, movimentações recentes, fornecedores mais ativos, etc.)
- Mensagens claras de sucesso e erro após cada operação
- Interface responsiva, moderna e intuitiva
- Validação de dados críticos em frontend e backend

---

## 3. Tecnologias Utilizadas

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express + Mongoose (MongoDB)
- **Banco de Dados:** MongoDB (com referências entre entidades)
- **Hospedagem:** Suporte a deploy em Render, Vercel ou similar
- **Versionamento:** Git + GitHub

---

## 4. Instalação e Inicialização

### Pré-requisitos
- Node.js (v18+ recomendado)
- Git

### Clonando o projeto
```bash
git clone https://github.com/FatecFranca/DSM-P3-G03-2025-1.git
cd DSM-P3-G03-2025-1
```

### Configuração do Backend
1. Acesse a pasta `backend`:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o backend:
   ```bash
   npx tsx server.ts
   ```
   O backend estará disponível em `http://localhost:5000`.

### Configuração do Frontend
1. Em outro terminal, acesse a pasta `frontend`:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o frontend:
   ```bash
   npm run dev
   ```
   O frontend estará disponível em `http://localhost:5173` (ou porta informada pelo Vite).

---

## 5. Guia de Uso

1. **Login:** Acesse a plataforma e faça login com suas credenciais.
2. **Cadastro Inicial:** Cadastre categorias, produtos, fornecedores e clientes antes de registrar movimentações.
3. **Movimentações:** Registre entradas e saídas de estoque, sempre vinculando produtos, fornecedores e usuários.
4. **Acompanhamento:** Utilize o dashboard para monitorar indicadores e alertas de estoque.
5. **Gestão:** Edite, inative ou reative registros conforme necessário.

---

## 6. Estrutura do Projeto

```
DSM-P3-G03-2025-1/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.ts
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── ...
│   └── ...
└── README.md
```

---

## 7. Considerações Finais

A plataforma INVEX representa uma solução moderna, robusta e acessível para a gestão de estoques, promovendo automação, segurança e facilidade de uso para empresas de todos os portes. O projeto foi desenvolvido com foco em boas práticas, usabilidade e integração total entre frontend e backend.

---

> Para dúvidas, sugestões ou contribuições, entre em contato com os autores ou abra uma issue no repositório.
