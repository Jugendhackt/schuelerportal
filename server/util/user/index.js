const DB = require('../../database/db');
const bcrypt = require('bcrypt');

class User {
    /** @param {string} username */
    /** @returns {Promise<boolean>} */
    static exists(username) {
        return new Promise((res, rej) => {
            DB.getConnection((err, con) => {
                var sql = 'SELECT COUNT(username) count ' +
                          'FROM users ' +
                          'WHERE username = ?';
                con.query(sql, [username], (err, results, fields) => {
                    if(err) {
                        throw err;
                    }

                    con.release();

                    res(results.count === 0);
                });
            });
        });
    }

    static generatePassword(password) {
        const salt = bcrypt.genSaltSync(10);

        return bcrypt.hashSync(password, salt);
    }
}
module.exports = User;