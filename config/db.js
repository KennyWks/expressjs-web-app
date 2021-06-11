const mysql = require("mysql2");
require('dotenv').config();

const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

dbConnection.connect();

const runQuery = (query, callBack) => {
  query = `
  use ${process.env.DB_NAME};
  ${query}
  `;
  return dbConnection.query(query, callBack);
};

module.exports = {
  dbConnection,
  runQuery,
};