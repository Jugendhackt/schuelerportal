const router = require('express').Router();

router.get('/test', (req, res) => {
    res.end(JSON.stringify({
        success: true
    }))
});

module.exports = router;