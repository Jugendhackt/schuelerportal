const Router = require('express').Router();
const DB = require('../database/db');

Router.post('/', (req, res) => {
    const { documentID, userID } = req.body;

    const rating = Number.parseInt(req.body.rating);

    if(!documentID || !userID || !rating || rating > 5) {
        res.statusCode = 400;
        res.json({
            error: true,
            success: false,
            errmsg: 'Missing/Invalid fields!'
        });
        res.end();
        return;
    }
    DB.getConnection((err, con) => {
        if(err) throw err;

        let sql = 'INSERT INTO rating(ratingID, userID, documentID, rating) '+
                  'VALUES(null, ?, ?, ?)';
        con.query(sql, [Number.parseInt(userID), Number.parseInt(documentID), rating], err => {
            if(err) throw err;

            res.json({
                success: true,
                error: false
            });
            res.end();
            con.release();
        });
    });

});

module.exports = Router;