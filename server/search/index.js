const DB = require('../database/db');
const Router = require('express').Router();

Router.post('/', (req, res) => {
    const { keywords } = req.body;
    keywords = keywords.map(x => x.trim());
    DB.getConnection((err, con) => {
        if(err) throw err;
        var sql = 'SELECT * FROM documents ' +
                  'WHERE '
        con.query(sql);
    })
});

module.exports = Router;
