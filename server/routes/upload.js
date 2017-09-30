const Router = require('express').Router();
const FileSystem = require('fs');
const dataParser = require('dataurl');
const crypto = require('crypto');
const OCRReader = require('../ocr');
const DB = require('../database/db');

Router.post('/', (req, res) => {
    if(!req.body.file) {
        res.statusCode = 400;
        res.json({
            error: true,
            success: false,
            errmsg: 'No files sent'
        })
        res.end();
        return;
    }
    // TODO: Verify data

    console.log('Processing incoming file', req.body.title);

    const { title, subjectID, teacher, type, notes, userID, keywords } = req.body;
    const Class = req.body.class;
    const date = new Date();


    /** @type {string} name */
    const UploadedFile = req.body.file;

    console.log('Validate file');
    const RealFile = dataParser.parse(UploadedFile);

    if(RealFile === false) {
        throw new Error('You did not uploaded any valid file.');
    }


    const { mimetype, charset, data } = RealFile;

    if(!mimetype.startsWith('image/')) {
        res.statusCode = 400;
        res.json({
            error: true,
            success: false,
            errmsg: 'The uploaded file is not a valid image'
        })
        res.end();
    }

    console.log('Generate random hash');

    crypto.randomBytes(15, (err, buffer) => {
        if(err) throw err;
        const tmpHash = buffer.toString('hex');

        let filename = 'uploadedData/' + tmpHash + '.' + mimetype.substr('image/'.length);

        FileSystem.writeFileSync(filename, data);

        console.log('Reading file...');
        OCRReader(filename).then(content => {
            const text = content;
            console.log('Successfully read text... Getting db connection');
            DB.getConnection((err, con) => {
                if(err) throw err;

                var sql = 'INSERT INTO documents(documentID, class, title, notes, type, date, userID, subjectID, text, teacher, keywords, tmpHash) '+
                                        'VALUES( null,       ?,     ?,     ?,     ?,    ?,    ?,      ?,         ?,    ?,       ?,        ?)'
                var parameters = [Class, title, notes, type, date, userID, subjectID, text, teacher, keywords, tmpHash];
                con.query(sql, parameters, (err/*, results, fields*/) => {
                    if(err) throw err;
                    // do not worry about anything else
                    console.log('Saved data!');
                });
            });
        });

    });

    res.json({
        success: true
    })
    res.end();
});

module.exports = Router;