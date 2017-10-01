const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UserRoute = require('./routes/user');
const SubjectRoute = require('./routes/subject');
const UploadRoute = require('./routes/upload');
const SearchRoute = require('./search/index');
const uploader = require('express-fileupload');

// use json everywhere
app.use((req, res, next) => {
    res
        .header('Access-Control-Allow-Origin', '*')
        .header('Access-Control-Allow-Methods', '*')
        .header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(uploader({
    limits: {
        fileSize: 5 * 1024 * 1024
    }
}));

app.all('/', (req, res) => {

    res.json({
        'test': true
    });
    res.end();
});

app.use('/user', UserRoute);
app.use('/subjects', SubjectRoute);
app.use('/upload', UploadRoute);
app.use('/search', SearchRoute);

app.use(express.static('uploadedData'));

app.listen(3000, () => console.log('Server is listening'));

process.on('unhandledRejection', event => {
    console.log('================REJECTION===================');
    console.log(event.reason);
    console.log('===================================');
});
process.on('uncaughtException', err => {
    console.log('================EXCEPTION===================');
    console.log(err.stack);
    console.log('===================================');
});