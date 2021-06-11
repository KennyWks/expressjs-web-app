const roles = require("./usersRoles");
const users = require("./users");

module.exports = {
  tables: [...roles.Tables, ...users.Tables],
  relation: [...roles.Relations, ...users.Relations],
};
