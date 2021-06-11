const usersTable = `
CREATE TABLE IF NOT EXISTS users(
    id_user INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    status INT(2) NOT NULL,
    role_id INT(1) UNSIGNED
)`;

const usersRelations = `
ALTER TABLE users
    ADD CONSTRAINT fk_role
    FOREIGN KEY (role_id) REFERENCES user_roles(role_id)
    ON DELETE SET NULL
`;

exports.Tables = [usersTable];
exports.Relations = [usersRelations];
