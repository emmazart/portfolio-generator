const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {

        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to catch
            if (err) {
                reject(err);
                return; 
            }
        
            // if everything went well, resolve Promise and send successful data
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
            reject(err);
            return;
            }
            
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });
    });
};

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

// ALTERNATIVELY with shorthand property names
module.exports = { writeFile, copyFile };