require('express-async-errors');
const express = require('express');
const errorMiddleware = require('../src/Middleware/errorMiddleware');

const app = express();

app.use(express.json());

app.use(errorMiddleware)


module.exports = app;
