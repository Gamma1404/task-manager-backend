const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(morgan('dev'));

app.use(router);

module.exports = app;