const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const cors = require('cors');

const postsRouter = require('./routes/posts/postRouter');
const companiesRouter = require('./routes/companies/companiesRouter');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//Middleware

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  next();
})


//Routes
app.use('/companies', companiesRouter);
app.use('/posts', postsRouter);

//Connect to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));


module.exports = app;