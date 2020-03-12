//import Tesseract from 'tesseract.js';
const path = require('path');
const Tesseract = require('tesseract.js');
const gm = require('gm');
const fs = require('fs');

const ans = ['H0H8N', 'FDD6H', '4024D', '8HHF4', '88DL4', 'D0846', 'LLHXV', 'TJX46', '04T24', '2622F', 'H882J'];
let correctcount = 0;

const doOCR = async (i) => {
    let image = path.resolve(`processpic/out${i}.png`);
    await Tesseract.recognize(
        image,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text.trim());
        if (text.trim() === ans[i]) correctcount++;
    })
}
const exeApp = async () => {
    for (let i = 0; i < 10; i++) {
        await doOCR(i);
    }
    console.log(correctcount);
}
exeApp();

