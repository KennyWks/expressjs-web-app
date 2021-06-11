const rolesTable = `
CREATE TABLE IF NOT EXISTS user_roles(
    role_id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL
    )`;

exports.Tables = [rolesTable];
exports.Relations = [];
