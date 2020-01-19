// Requisição HTTP

// GET, POST, PUT, DELETE

// REQUISIÇÃO Frontend -> Backend -> Frontend
// Protocolo WebSocket

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Jonathan:parede123@cluster0-jkqbk.mongodb.net/week10?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true, 
});

app.use(cors())
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.query (Identificar um recurso na alteração ou remoção)
// body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);