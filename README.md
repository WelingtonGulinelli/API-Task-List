# 🚀 API Task-List

Uma API robusta para gerenciamento de tarefas pessoais, desenvolvida com tecnologias modernas de back-end. Esta aplicação oferece uma solução completa para organização de tarefas com sistema de autenticação seguro e operações CRUD otimizadas.

![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-orange)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![JWT](https://img.shields.io/badge/JWT-Auth-yellow)

## ✨ Funcionalidades

### 👤 Autenticação e Usuários
- Registro de novas contas com validação de dados
- Autenticação segura via JWT (JSON Web Token)
- Atualização de perfil de usuário
- Proteção de rotas com middleware de autenticação

### 📋 Gerenciamento de Tarefas
- Criação de tarefas personalizadas
- Listagem de tarefas por usuário autenticado
- Atualização de informações da tarefa
- Marcação de tarefas como concluídas
- Exclusão de tarefas

## 🛠️ Stack Tecnológica

### Back-end
- **Node.js** - Ambiente de execução JavaScript de alta performance
- **Express** - Framework web rápido e minimalista
- **Sequelize** - ORM poderoso para bancos de dados relacionais
- **PostgreSQL** - Sistema de banco de dados SQL robusto e confiável

### Ferramentas de Desenvolvimento
- **JWT** - Implementação segura de autenticação baseada em tokens
- **Nodemon** - Monitoramento de alterações no código com reinicialização automática
- **Sucrase** - Suporte à sintaxe moderna de JavaScript (ES6+)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js v18 ou superior
- PostgreSQL instalado e configurado
- npm ou yarn como gerenciador de pacotes

### Configuração

1. **Clone o repositório**
   ```bash
   git clone https://github.com/WelingtonGulinelli/API-Task-List.git
   cd api-task-list
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o banco de dados**
   
   Crie um arquivo `config/database.js` com as seguintes configurações:
   ```javascript
   module.exports = {
     dialect: 'postgres',
     host: 'localhost',
     username: 'seu-usuario',
     password: 'sua-senha',
     database: 'tasklist',
     define: {
       timestamps: true,
       underscored: true,
       underscoredAll: true,
     },
   };
   ```

4. **Execute as migrations**
   ```bash
   npx sequelize-cli db:migrate
   # ou
   yarn sequelize db:migrate
   ```

5. **Inicie o servidor**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O servidor estará disponível em: http://localhost:3333

## 📚 Documentação da API

### Autenticação de Usuários

#### Registro de usuário
- **POST** `/users`
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "123456"
  }
  ```

#### Login (obter token)
- **POST** `/sessions`
  ```json
  {
    "email": "john.doe@example.com",
    "password": "123456"
  }
  ```
  - **Resposta**: Token JWT para autenticação

#### Listar usuários
- **GET** `/users`
  - **Header**: `Authorization: Bearer {seu-token-jwt}`

#### Atualizar usuário
- **PUT** `/users`
  - **Header**: `Authorization: Bearer {seu-token-jwt}`
  ```json
  {
    "name": "John Updated",
    "email": "john.updated@example.com",
    "oldPassword": "123456",
    "password": "newpassword",
    "confirmPassword": "newpassword"
  }
  ```

### Gerenciamento de Tarefas

#### Criar tarefa
- **POST** `/tasks`
  - **Header**: `Authorization: Bearer {seu-token-jwt}`
  ```json
  {
    "task": "Estudar Node.js"
  }
  ```

#### Listar tarefas do usuário
- **GET** `/tasks`
  - **Header**: `Authorization: Bearer {seu-token-jwt}`

#### Atualizar tarefa
- **PUT** `/tasks/:task_id`
  - **Header**: `Authorization: Bearer {seu-token-jwt}`
  ```json
  {
    "task": "Nova descrição da tarefa",
    "check": true
  }
  ```

#### Excluir tarefa
- **DELETE** `/tasks/:task_id`
  - **Header**: `Authorization: Bearer {seu-token-jwt}`

## 🔒 Segurança

Todas as rotas de manipulação de tarefas e informações de usuário são protegidas por middleware de autenticação, garantindo que apenas usuários autenticados possam acessar seus próprios recursos.

