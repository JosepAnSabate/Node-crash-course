//streams reprod un video sense tindrel tot cargat com youtube rebent petits paquets de data
const fs = require('fs');

//read from blog3
const readStream = fs.createReadStream('./docs/blog3.txt');


/* readStream.on('data', (chunk) => {
    console.log('---new chunk---');
    console.log(chunk.toString());
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
}); */
//wrtie mes funcio dalt
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//piping alternativa writting
readStream.pipe(writeStream);