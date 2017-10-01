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
        const query = 'SELECT * FROM documents d '+
                      'JOIN rating r ON d.documentID = r.documentID '+
                      'WHERE text LIKE ? '+
                      'UNION '+
                      'SELECT * FROM documents d '+
                      'JOIN rating r ON d.documentID = r.documentID '+
                      'WHERE keywords LIKE ? ';
        keywords.forEach(ele => {
            queries.push(query);
        });

        let parameters = [];
        keywords.forEach(el => {
            el = '%'+el+'%';
            parameters.push(el);
            parameters.push(el);
        })


        con.query(queries.join(' UNION '), parameters, (err, results, fields) => {
            if(err) throw err;

            const userIDs = new Set;
            results.forEach(result => {
                userIDs.add(result.userID);
                result.text = result.text.substring(0, 29) + '…';
            });

            if(userIDs.size) {
                let sql = 'SELECT username, userID FROM users WHERE userID IN (?)';

                con.query(sql, Array.from(userIDs), (err, usernames, fields) => {
                    if(err) throw err;
                    const savedIDs = new Map;

                    for(const usernameEntry of usernames) {
                        savedIDs.set(usernameEntry.userID, usernameEntry.username);
                    }

                    for(const result of results) {
                        result.userName = savedIDs.get(result.userID);
                    }

                    con.release();
                    res.json({
                        success: true,
                        error: false,
                        items: results
                    });
                    res.end();
                });
            } else {
                con.release();
                res.json({
                    success: true,
                    error: false,
                    items: results
                });
                res.end();
            }

        });
    })
});

module.exports = Router;
