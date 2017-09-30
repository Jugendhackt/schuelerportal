const Fork = require('child_process');

/** @param {string} filename */
function readTextFromFile(filename) {
    return new Promise((resolve, reject) => {
        Fork.execFile('python', ["python/ocr.py", filename], {
            env: {
                PYTHONIOENCODING: 'utf-8'
            }
        }, (err, stdout, stderr) => {
            if(err || stderr) return reject(err || stderr);

            resolve(stdout);
        });
    });
}

module.exports = readTextFromFile;