// const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
// const axios = require('axios');

const FilmesRouter = require('./routers/FilmesRouter');

app.use(express.json());

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', FilmesRouter);



app.listen(3000)