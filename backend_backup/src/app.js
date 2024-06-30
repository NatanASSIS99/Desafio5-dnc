const express = require('express');
const app = express();
const livroRoutes = require('./routes/livro.routes');
const cors = require('cors');
require('dotenv').config();

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());

// Parsear o corpo das requisições como JSON
app.use(express.json());

// Rotas
app.use(livroRoutes);

// Middleware para conectar ao banco de dados (exemplo, substitua por sua lógica)
app.use(async (req, res, next) => {
  try {
    req.db = await connectToDatabase(); // Substitua connectToDatabase() pela sua lógica de conexão
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = app;
