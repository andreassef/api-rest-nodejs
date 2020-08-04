import express, { response } from 'express';

const app = express();
app.use(express.json());

//Corpo (Request Body): Dados para criação ou atualização
// Route Params: Identificar qual recursos eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.post('/users', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333);