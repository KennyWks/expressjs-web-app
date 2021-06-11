const { dbConnection } = require("../config/db");
const { tables, relation } = require("./listMigration");

dbConnection.query(
  `
  DROP DATABASE IF EXISTS ${process.env.DB_NAME};
  CREATE DATABASE ${process.env.DB_NAME};
  use ${process.env.DB_NAME};
  ${tables.join(";")};
  `,
  (err, result) => {
    if (!err) {
      dbConnection.query(
        `
        use ${process.env.DB_NAME};
        ${relation.join(";")}`,
        (err, result) => {
          if (!err) {
            console.log("Migration Success");
          } else {
            console.log("Migration Failed");
            console.log(err);
          }
          dbConnection.end();
        }
      );
    } else console.log("Migration Failed");
    console.log(err);
  }
);
