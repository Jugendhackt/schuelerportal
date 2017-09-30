const router = require('express').Router();
const DB = require('../database/db');


router.get('/', (req, res) => {
    DB.getConnection((err, con) => {
        if(err) throw err;

        var sql = 'SELECT * FROM subjects';

        con.query(sql, (err, results, fields) => {
            res.json({
                subjects: results
            });
            res.end();
            con.release();
        });
    })
});

module.exports = router;