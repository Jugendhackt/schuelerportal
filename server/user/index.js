const UserUtil = require('../util/user/index');
const DB = require('../database/db');
class User {
    constructor(data) {
        this.userID = data.userID;
        this.username = data.username;
        this.password = data.password;
        this.schoolName = data.schoolName;
        this.className = data.class;
    }

    getJSONDecoration() {
        return {
            userID: this.userID,
            username: this.username,
            schoolName: this.schoolName,
            className: this.className
        }
    }

    /** @returns {Promise<User>} */
    static getUserByUsername(username) {
        return new Promise((res, rej) => {
            DB.getConnection((err, con) => {
                var sql = 'SELECT * ' +
                          'FROM users ' +
                          'WHERE username = ?';
                con.query(sql, [username], (err, results, fields) => {
                    if(err) throw err;
                    con.release();

                    if(results.length > 0) {
                        res(new User(results[0]));
                        return;
                    }
                    rej(new Error('There is no user with username ' + username));
                })
            })
        });
    }

}

module.exports = User;

// User.getUserByUsername('jens1o').then(user=> console.log(user));