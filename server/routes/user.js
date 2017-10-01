const router = require('express').Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const UserUtil = require('../util/user/index');
const User = require('../user/index');
const crypto = require('crypto');

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

    // TODO: Verify password :D

    User.getUserByUsername(username)
    .then(user => {
        res.json(user.getJSONDecoration());
        res.end();
        return;
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
});

module.exports = router;