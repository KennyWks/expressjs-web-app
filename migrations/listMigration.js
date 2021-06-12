const roles = require("./usersRoles");
const users = require("./users");
const student = require("./student");

module.exports = {
  tables: [...roles.Tables, ...users.Tables, ...student.Tables],
  relation: [...roles.Relations, ...users.Relations],
};
