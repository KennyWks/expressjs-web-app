const usersTable = `
CREATE TABLE IF NOT EXISTS student(
    id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    nim VARCHAR(8) NOT NULL,
    email TEXT NOT NULL,
    major TEXT NOR NULL
)`;

exports.Tables = [usersTable];
