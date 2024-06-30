const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost', // substitua pelo seu host
    user: 'natan', // substitua pelo seu usuário do MySQL
    password: 'root', // substitua pela sua senha do MySQL
    database: 'desafio' // substitua pelo nome do seu banco de dados
});

module.exports = pool;