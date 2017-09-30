const Router = require('express').Router();
const FileSystem = require('fs');
const dataParser = require('dataurl');
const crypto = require('crypto');
const OCRReader = require('../ocr');

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
    /** @type {string} name */
    const UploadedFile = req.body.file;

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


    crypto.randomBytes(15, (err, buffer) => {
        if(err) throw err;

        let filename = 'uploadedData/' + buffer.toString('hex') + '.' + mimetype.substr('image/'.length);

        FileSystem.writeFileSync(filename, data);

        const content = OCRReader(filename);


    })

    res.json({
        success: true
    })
    res.end();
});

module.exports = Router;