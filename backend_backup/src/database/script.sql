CREATE TABLE livros (
    id INT AUTO_INCREMENT,
    titulo VARCHAR(200),
    isbn INT,
    autor VARCHAR(150),
    editora VARCHAR(100),
    ano YEAR,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);