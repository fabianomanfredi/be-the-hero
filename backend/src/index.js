/*
Rota / Recursos
*/

/*
* GET: Buscar/listar uma informação de back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/
/* 
* Tipos de parametros
* Query: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação) 
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* SQL: MySQL, SQLlite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, ets...
*/
/*
* Driver: Utilizar selects Select * from users
* Query Builder: Table('users').select('*').where()
*/
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);