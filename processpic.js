const path = require('path');
const gm = require('gm');
//const PNG = require('png-js');
const fs = require('fs');
const PNG = require('pngjs').PNG;

//const imageBuff = Buffer.from(imgbase64, 'base64');
const processPic = (img, i) => {
    gm(img)
        .resize(156, 60)
        .colorspace("gray")
        .normalize()
        .threshold("40%")
        //.crop(88, 24, 14, 10)
        //.extent(120, 44, "-14-10")
        .write(`processpic/out${i}.png`, function (err) {
        })
}
const findNoise = (data, idx,size) => {
    if(size>10)
    let top = isBlack(data, (156 * (y - 1) + x) << 2);
    let right = isBlack(data, ((156 * y) + x + 1) << 2);
    let left = isBlack(data, ((156 * y) + x - 1) << 2);
    let down = isBlack(data, (156 * (y + 1) + x) << 2);
}
const isBlack = (data, idx) => {
    if (idx < 0) return false;
    return (data[idx] === 0 && data[idx + 1] === 0 && data[idx + 2] === 0);
};
for (let i = 0; i < 1; i++) {
    let image = path.resolve(`oripicture/pic${i}.png`);
    processPic(image, i);
    fs.createReadStream(`processpic/out${i}.png`)
        .pipe(new PNG({
            filterType: 4
        }))
        .on('parsed', function () {
            //console.log(this.data[0] + " " + this.data[1] + " " + this.data[2] + " " + this.data[3]);
            for (let x = 0; x < 156; x++) {
                for (let y = 0; y < 60; y++) {
                    let idx = (156 * y + x) << 2;
                    if (isBlack(this.data, idx)) {
                        let top = isBlack(this.data, (156 * (y - 1) + x) << 2);
                        let right = isBlack(this.data, ((156 * y) + x + 1) << 2);
                        let left = isBlack(this.data, ((156 * y) + x - 1) << 2);
                        let down = isBlack(this.data, (156 * (y + 1) + x) << 2);
                        if (!top && !right && !left && !down) {
                            this.data[idx] = 255;
                            this.data[idx + 1] = 255;
                            this.data[idx + 2] = 255;

                        }
                    }
                }
            }

            this.pack().pipe(fs.createWriteStream('out.png'));
        });

}