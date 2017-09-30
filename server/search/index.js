const DB = require('../database/db');
const Router = require('express').Router();

Router.post('/', (req, res) => {
    let { keywords } = req.body;

    keywords = keywords.split(',').map(x => x.trim());

    if(!keywords.length) {
        res.json({
            error: true,
            success: false,
            errmsg: 'You need to provide keyword(s)!'
        });
        res.end();
        return;
    }
    DB.getConnection((err, con) => {
        if(err) throw err;
        const queries = [];
        const query = "SELECT * FROM documents WHERE text LIKE ? UNION SELECT * FROM documents WHERE keywords LIKE ?";
        keywords.forEach(ele => {
            queries.push(query);
        });

        let parameters = [];
        keywords.forEach(el => {
            parameters.push(el);
            parameters.push(el);
        })



        con.query(queries.join(' UNION '), parameters, (err, results, fields) => {
            if(err) throw err;

            const userIDs = new Set;
            results.forEach(result => {
                userIDs.add(result.userID);
            });

            let sql = 'SELECT username, userID FROM users WHERE userID IN (?)';

            con.query(sql, Array.from(userIDs), (err, usernames, fields) => {
                if(err) throw err;
                const savedIDs = new Map;

                for(const username of usernames) {
                    savedIDs.set(username.userID, username.username);
                }

                for(const result of results) {
                    result.username = savedIDs.get(result.userID);
                }

                con.release();
                res.json({
                    success: true,
                    error: false,
                    items: results
                });
                res.end();
            });

        });
    })
});

module.exports = Router;
