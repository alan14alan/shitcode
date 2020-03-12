const fs = require('fs');
const axios = require('axios');
const path = require('path');

let count = 0;
const getpic = () => {
    axios({
        method: 'get',
        url: 'https://npm.cpami.gov.tw/CheckImageCode.aspx',
        responseType: 'stream'
    }).then((response) => {
        //console.log(response.data);
        response.data.pipe(fs.createWriteStream(`oripicture/pic${count}.png`));
        console.log(`下載${count}`);
        count++;
        //fs.writeFileSync('test.png', response.data);
    });
}
// for (let i = 0; i < 20; i++) {
//     getpic(i);    
//     console.log(`下載${i}`);
// }
setInterval(getpic, 500);