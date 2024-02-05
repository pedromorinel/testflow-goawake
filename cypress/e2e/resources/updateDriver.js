const { Client } = require('pg');


function updateDriver() {
const client = new Client({
    host: '10.1.2.131',
    port: 15472,
    user: 'postgres',
    password: 'focuss3cr3t',
    database: 'focus',
  });
  
  client.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conectado ao banco de dados PostgreSQL');
  });
  
  const selectQuery = 'SELECT id FROM alarm ORDER BY datetime desc LIMIT 1';
  
  client.query(selectQuery, (err, result) => {
    if (err) {
      console.error('Erro ao executar o SELECT:', err);
      return;
    }
    const valorDesejado = result.rows[0].id;
    console.log('Valor do campo desejado:', valorDesejado);
  
    const updateQuery = 'UPDATE alarm SET fk_driver_id = 172448 WHERE id = $1';
  
    client.query(updateQuery, [valorDesejado], (err, result) => {
      if (err) {
        console.error('Erro ao executar a atualização:', err);
        return;
      }
      console.log('Atualização realizada com sucesso:', result.rows);
      client.end();
    });
  });
}

updateDriver();