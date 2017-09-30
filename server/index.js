const app = require('express')();
const bodyParser = require('body-parser');
const UserRoute = require('./routes/user');
const SubjectRoute = require('./routes/subject');

// use json everywhere
app.use((req, res, next) => {
    res
        .header('Access-Control-Allow-Origin', '*')
        .header('Access-Control-Allow-Methods', '*')
        .header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.all('/', (req, res) => {

    res.json({
        'test': true
    });
    res.end();
});

app.use('/user', UserRoute);
app.use('/subjects', SubjectRoute);

app.listen(3000, () => console.log('Server is listening'));