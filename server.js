//crating a server . that server linsten the requestt from the browser and then decide what responses sent to the server

const http = require('http');
const fs = require('fs'); //read files
const _= require('lodash');//loadash pack

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    //lodash
    const num = _.random(0, 20);
    console.log(num);
    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
//set header content type
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch (req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about': 
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-us': //redirect      about-me redirecft a about  
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;

}

// sens html file(view)
fs.readFile(path, (err, data) => {
      if (err) {
         console.log(err);
         res.end();
       } else {
       //res.write(data);
       
       res.end(data);
       }
   })
});

/*     // set header content type en comptes de fero en views
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="#"> </head>');
    res.write('<p>hello ninjas</p>');
    res.write('<p>hello again ninjas</p>');
    res.end();
}); */

server.listen(3000 ,'localhost', () => {
    console.log('listening for request on port 3000')
});

/* //els log aquests no es veuen al browser pk estem al */