const app = require('express')();

const UserRoute = require('./routes/user');

// use json everywhere
app.use((req, res, next) => {
    res.type('json');
    next();
});

app.get('/', (req, res) => {
    res.end(JSON.stringify({
        'test': true
    }));
});

app.use('/user', UserRoute);
app.listen(3000, () => console.log('Server is listening'));