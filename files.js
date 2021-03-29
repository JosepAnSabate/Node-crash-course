//file system
const fs = require('fs');
//reading files
/* fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}); //metode asincrone, take some tyme to do

console.log('last line'); */

//writting files 
/* fs.writeFile('./docs/blog2.txt', 'hello world', () => {
    console.log('file was written');
});
 */
//directories crea carpetes o lesborra si existeix
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created')
});
} else {
    fs.rmdir('./assets', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('folder deleted')
})
}

//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}