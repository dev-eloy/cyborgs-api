const mysql = require('mysql2');

// Crea una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost', // Dirección del servidor MySQL
  user: 'root',      // Nombre de usuario
  password: '', // Contraseña
  database: 'cyborgs_api'   // Nombre de la base de datos
});

connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
      return;
    }
    console.log('Conexión exitosa a la base de datos');
  
    // Ejecuta una consulta simple para verificar la conexión
    connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        return;
      }
      console.log('La respuesta de la consulta es:', results[0].solution);
    });
  });

// Exporta el objeto de conexión para usarlo en otros archivos
module.exports = connection;
