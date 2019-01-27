//CONNECTIVITY SETUP
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const socketIO = require('socket.io');
const moment = require('moment');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {SchoolBoards} = require('./models/schoolBoards')
const {JkToTwelve} = require('./models/jkToTwelve');
const {SummerOptions} = require('./models/summerOptions');
const {LanguageSchools} = require('./models/languageSchools');
const {PublicColleges} = require('./models/publicColleges');
const {PrivateColleges} = require('./models/privateColleges');
const {PublicUniversities} = require('./models/publicUniversities');
const {PrivateUniversities} = require('./models/privateUniversities');
const {ThirdParties} = require('./models/thirdParties');


const viewsPath = path.join(__dirname, '../views');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('views', viewsPath);  
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', (req, res) => {
    res.redirect('/schoolBoards');
});

app.use(express.static(viewsPath));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/schoolBoards', (req, res) => {
    res.render('schoolBoards/schoolBoards.html');
});

app.get('/jkToTwelve', (req, res) => {
    
});

app.get('/summerOptions', (req, res) => {
    
});

app.get('/languageSchools', (req, res) => {
    
});

app.get('/publicColleges', (req, res) => {
    
});

app.get('/privateColleges', (req, res) => {
    
});

app.get('/publicUniversities', (req, res) => {
    
});

app.get('/privateUniversities', (req, res) => {
    
});

app.get('/thirdParties', (req, res) => {
    
});

//IO CONNECTIONS
io.on('connection', (socket) => {
    console.log('New user connected.');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});
    
server.listen(port, () => console.log(`Server is up on port ${port}`));

