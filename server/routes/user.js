const router = require('express').Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const UserUtil = require('../util/user/index');

router.get('/test', (req, res) => {
    res.end(JSON.stringify({
        success: true
    }));
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        res.statusCode = 401;
        res.json({
            err: true,
            success: false,
            errmsg: 'Missing/Invalid parameters'
        });
        res.end();
        return;
    }

    UserUtil.exists(username).then(result => {
        if(!result) {
            res.statusCode = 404;
            throw new Error('User does not exist');
        }
    }).then(() => {
        return UserUtil.getByUsername(username);
    }).then(() => {
        return
    })
    .catch(err => {
        res.json({
            err: true,
            success: false,
            errmsg: err.message
        });
        res.end();
        return;
    });


    // db.getConnection((err, con) => {

    // });
});

module.exports = router;