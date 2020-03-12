//import Tesseract from 'tesseract.js';
const path = require('path');
const Tesseract = require('tesseract.js');
const gm = require('gm');
const fs = require('fs');

const ans = ['H0H8N', 'FDD6H','4024D','8HHF4','88DL4','D0846','LLHXV','TJX46','04T24','2622F','H882J'];
const image = path.resolve('captcha2.png');
//const imageBuff = Buffer.from(imgbase64, 'base64');
gm(imageBuff)
    .resize(156, 60)
    .colorspace("gray")
    .normalize()
    .threshold("40%")
    //.crop(88, 24, 14, 10)
    //.extent(120, 44, "-14-10")
    .write('out.png', function (err) {
    })
//console.log('降躁');

Tesseract.recognize(
    'out.png',
    'eng',
    { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
})

