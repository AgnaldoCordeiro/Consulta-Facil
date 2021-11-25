# Aplicação de Cadastrar e Consultar dados

O Consulta fácil é uma aplicação web feita em NextJS Consumindo uma API NodeJS.

## Desafios:

Fazer um layout simples, totalmente responsivo.
Home Page para que o usuário escolha fazer o login ou cadastrar o acesso.
Page Login, usuário deve informar cpf, login e senha, todos são validados.
Caso estiver os dados corretos o usuário segue para a page Profile.
PAge de cadastro o usuário deve informar os dados como, cpf, telefone, senha, email, login, se todas as informações estiverem preenchidas ao cadastrar o usuário volta para a pagina inicial.

## Tecnologias Utilizadas

NextJS
Mui - Material
Axios
Eslint
TypeScript

### Como instalar e rodar!

Para instalar basta utilizar o comando npm install
Depois um npm run dev, e a aplicação subira, porem é necessario consumir uma aplicação de backend.

A API utilizada de BackEnd é a -API-Node-JWT que consta neste Gihub.
Link da API https://github.com/AgnaldoCordeiro/-API-Node-JWT.

### API desenvolvida em Node.js

Com o intuito de cadastrar clientes, as informaçoes login, cpf, senha, nome, e email. É feito uma validação de CPF, caso ja existe um usuario cadastrado com o mesmo cpf, ele resultara em uma mensagem informando a existencia desse cadastro.

Tambem tem sistema de autenticação feita em Login, CPF e Senha, caso uma das tres estiver errado o usuario não consegue logar, apos o login é criado um token de acesso apra maior segurança.

A aplicação é integrada de forma CLoud com MongoDB.

Basta utilizar o yarn add para instalar todas as dependencias e node src/index.js para rodar a aplicação.

### Lembrando que é preciso criar um closter no MongoDB e criar um arquivo .env na raiz do projeto e colocar a string de conexão nele.
