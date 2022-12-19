const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// style sheet middleware sass
const sassMiddleware = require('node-sass-middleware');
// db connection
const db = require('./config/mongoose');

app.use(sassMiddleware({
  src: './asset/scss',
  dest: './asset/css',
  debug: false,
  outputStyle: 'extended',
  prefix:  '/css' 
}));

// set up view engine to ejs
app.set('view engine', 'ejs');
// folder path to view ejs files
app.set('views', path.join(__dirname, 'views'));

// layouts
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// css files
app.use(express.static(path.join(__dirname, 'asset')));

// urlencoded add to extract data from
app.use(express.urlencoded());

// routs middleware
app.use('/', require('./routes'));

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return error;
    }
  console.log(`Music app server listening on port ${port}`)
})