# challenges-devioBR

## :memo: Descrição
Projeto baseado em um restaurante, optei por usar o mysql juntamente com o sequelize para facilitar a associação do produto e o usuário. Utilizando uma tabela intermediaria chamada UserProd. usei alguns conceitos de normalização, segui padrões restApi para manter as boas práticas. E para realizar os testes de integração e testes unitários utilizei o mocha, chai e sinon.


## :books: Funcionalidades
<ol><b>Funcionalidade 1</b>: Pesquisar todos produtos;</ol>
<ol><b>Funcionalidade 2</b>: Pesquisar um produto por (name, code);</ol>
<ol><b>Funcionalidade 3</b>: Apagar um pedido;</ol>
<ol><b>Funcionalidade 4</b>: Criar um pedido;</ol>


## <h3>:wrench: Tecnologias utilizadas</h3>
- Mocha, Chai e Sinon
- Mysql
- Sequelize
- Node.js/Express
- Docker

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
- Clone o repositório
git clone git@github.com:Lucas5k/challenges-devioBR.git

- Entre no arquivo do projeto
cd challenges-devioBR

- Instale as dependências
npm install

- Inicialize o projeto
npm start

- Inicialize os testes
npm run test

- Verificar a cobertura de test
npm run test:coverage

- Subir o container mysql, para conseguir utilizar
npm run up

```
## link da documentação:

<a href="https://documenter.getpostman.com/view/25184771/2s935mtRAQ">Clique aqui</a><p></p>


## link para visualizar as tabelas do sequelize:

<a href="https://drive.google.com/file/d/1iISBsjaOUD_gJV2ID9pr3ctdlF_ic7Ec/view">Clique aqui</a><p></p>
