const mysql = require('mysql2/promise');

let lastId = 0;
class CyborgsService {
  constructor() {
    // Crear conexión a la base de datos
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cyborgs-api',
    });
  }
  
  async find() {
    const [rows, fields] = await this.pool.query('SELECT * FROM `cyborgs`');
    return rows;
  }
  

  async findOne(id) {
    const [rows, fields] = await this.pool.query('SELECT * FROM cyborgs WHERE id = ?', [id]);
    return rows[0];
  }
  
  async create(body) {
    lastId += 1;
    const newCyborg = { ...body, id: lastId };
    const [result] = await this.pool.query('INSERT INTO cyborgs SET ?', [newCyborg]);
    return newCyborg;
  }
  

  async update(id, body) {
    await this.pool.query('UPDATE cyborgs SET ? WHERE id = ?', [body, id]);
    return { ...body, id: parseInt(id) };
  }

  async delete(id) {
    await this.pool.query('DELETE FROM cyborgs WHERE id = ?', [id]);
    return { id: parseInt(id) };
  }
}

  
  module.exports = CyborgsService;