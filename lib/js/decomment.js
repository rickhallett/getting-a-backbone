const fs = require('fs');

const decomment = require('decomment');

console.log(__dirname, __filename);

const file = fs
    .readFileSync(`${__dirname}/backbone.1.4.1.annotated.js`)
    .toString();

fs.writeFileSync(`${__dirname}/backbone.1.4.1.js`, decomment(file));
