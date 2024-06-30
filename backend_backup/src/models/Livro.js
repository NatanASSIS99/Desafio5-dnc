
const db = require('../database/db');

class Livro {
    async criar(item) {
        try {
            const [rows] = await db.query(
                'INSERT INTO livros (titulo, isbn, autor, editora, ano, link) VALUES (?, ?, ?, ?, ?, ?)', 
                [item.titulo, item.isbn, item.autor, item.editora, item.ano, item.link]
            );
            return { status: 200, response: 'Livro cadastrado com sucesso!' };
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
            return { status: 500, response: 'Erro ao cadastrar livro no banco de dados.' };
        }
    }

    async listar() {
        try {
            const [rows] = await db.query('SELECT * FROM livros');
            return { status: 200, response: rows };
        } catch (error) {
            console.error('Erro ao obter livros:', error);
            return { status: 500, response: 'Erro ao obter livros do banco de dados.' };
        }
    }

    async listarPorId(id) {
        try {
            const [rows] = await db.query('SELECT * FROM livros WHERE id = ?', [id]);
            return { status: 200, response: rows[0] };
        } catch (error) {
            console.error('Erro ao obter livro por ID:', error);
            return { status: 500, response: 'Erro ao obter livro do banco de dados.' };
        }
    }

    async atualizar(item, id) {
        try {
            await db.query(
                'UPDATE livros SET titulo = ?, isbn = ?, autor = ?, editora = ?, ano = ?, link = ? WHERE id = ?', 
                [item.titulo, item.isbn, item.autor, item.editora, item.ano, item.link, id]
            );
            return { status: 200, response: 'Livro atualizado com sucesso!' };
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
            return { status: 500, response: 'Erro ao atualizar livro no banco de dados.' };
        }
    }

    async excluir(id) {
        try {
            await db.query('DELETE FROM livros WHERE id = ?', [id]);
            return { status: 200, response: 'Livro excluído com sucesso!' };
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
            return { status: 500, response: 'Erro ao excluir livro do banco de dados.' };
        }
    }
}

module.exports = Livro;
