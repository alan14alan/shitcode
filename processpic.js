const path = require('path');
const gm = require('gm');

//const imageBuff = Buffer.from(imgbase64, 'base64');
const processPic = (img, i) => {
    gm(img)
        .resize(156, 60)
        //.colorspace("gray")
        .normalize()
        .threshold("40%")
        //.crop(88, 24, 14, 10)
        //.extent(120, 44, "-14-10")
        .write(`processpic/out${i}.png`, function (err) {
        })
}
for (let i = 0; i < 10; i++) {
    let image = path.resolve(`oripicture/pic${i}.png`);
    processPic(image, i);
}