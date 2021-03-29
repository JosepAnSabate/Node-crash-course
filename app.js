const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');

//express app
const app = express();
//connect to mongodb
const dbURI = 'mongodb+srv://netninja:12345@nodetuts.trs5d.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
//register view engine
app.set('view engine', 'ejs');
//app.set('views', 'myviews'); fem una carwpeta viewa i indexjs

//listen for request
//app.listen(3000);
//middleware static files
app.use(express.static('public'));


//middleware req request res response
app.use(morgan('dev'));

/* app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});
 */
/* app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});
 */
//mongoose and mongo sandbox routes, basics interaccions
/* app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
app.get('/single-blog', (req, res) => {
    Blog.findById('60610657cc66754484ec30e6')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})
 */
//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
   /*  const blogs = [
        {title: 'Marc busca bolets', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'El Maercel busca el nord', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs }); */
    //res.send('<p> home page</p>');
   // res.sendFile('./views/index.html', { root: __dirname });//si fos una relative path sauria despecificar, segon parametree object
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'about'})
    //res.send('<p> about page</p>');
    // sense about ejs =>res.sendFile('./views/about.html', { root: __dirname });

});
//blogs routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
});



app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Creat a new blog'});
})
//redirects
/* app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
 */
//404 pages !!sempre a sota de totes !!!!
app.use((req, res) => {
   res.status(404).render('404', { title: '404'});
    // res.status(404).sendFile('./views/404.html', {
      //   root: __dirname});
});