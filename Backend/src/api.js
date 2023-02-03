require('express-async-errors');
const express = require('express');
const errorMiddleware = require('../src/Middleware/errorMiddleware');
const userRouter = require('./Router/userRouter');
const deliveryRouter = require('./Router/deliveryRouter');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(deliveryRouter);
app.use(errorMiddleware);

module.exports = app;
