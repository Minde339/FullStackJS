const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/Errors/ErrorController');
const companiesRouter = require('./routes/companies/companiesRouter');
const statsRouter = require('./routes/stats/statsRouter');
const usersRouter = require('./routes/users/usersRoute');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//Middleware

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  // console.log(req.headers)
  next();
})


//Routes
app.use('/companies', companiesRouter);
app.use('/stats', statsRouter);
app.use('/users', usersRouter);
//Handling all unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler);

//Connect to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));


module.exports = app;