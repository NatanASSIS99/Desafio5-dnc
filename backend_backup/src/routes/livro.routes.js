const { Router } = require('express');
const LivroController = require('../controllers/LivroController');

const livroRoutes = Router();
let livroController = new LivroController();

livroRoutes.post(
  '/livros',
  livroController.cadastrarLivro
);

livroRoutes.get(
  '/livros',
  livroController.listarLivros
);

livroRoutes.get(
  '/livros/:id',
  livroController.listarLivroPorId
);

livroRoutes.put(
  '/livros/:id',
  livroController.atualizarLivro
);

livroRoutes.delete(
  '/livros/:id',
  livroController.excluirLivro
);

module.exports = livroRoutes;
