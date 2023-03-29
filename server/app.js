//const createError = require('http-errors');
import createError from 'http-errors';
//const express = require('express');
import express from 'express';
//const path = require('path');
import path  from 'path';
//const cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
//const logger = require('morgan');
import logger from 'morgan';

//Importing subroutes
//const indexRouter = require('./routes/index');
import indexRouter from '@server/routes/index';
//const usersRouter = require('./routes/users');
import usersRouter from '@server/routes/users';
//const apiRouter = require('./routes/api');
import apiRouter from '@server/routes/api';

//Settig webpack modules
import webpack from 'webpack'; 
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
//Importing webpack configuration
import webpackConfig from '../webpack.dev.config';

const app = express();

//Get the execution mode
const nodeEnviroment = process.env.NODE_ENV || 'production';

//Deciding if we add webpack middleware or not
if(nodeEnviroment === 'development'){
  console.log("⚽Ejecutando en modo desarrollo⚽");
  //Adding the key "mode" with its value "developement"
  webpackConfig.mode = nodeEnviroment;
  //Setting the port
  webpackConfig.devServer.port = process.env.PORT;
  //Setting up the HMR(Hot module replacement)
  webpackConfig.entry = [
    "webpack-hot-middleware/client?reload=true&timeout=1000", webpackConfig.entry
  ];
  //Creating the bundler
  const bundle = webpack(webpackConfig);
  //Enabling the webpack middleware
  app.use(webpackDevMiddleware(bundle, {
    publicPath: webpackConfig.output.publicPath
  }));
  //Enabling the webpack HMR
  app.use(webpackHotMiddleware(bundle, {
    publicPath: webpackConfig.output.path
  }));
  //Enabling the webpack HRM
  app.use(webpackHotMiddleware(bundle));
}else {
  console.log("📯Ejecutando en modo producción📯")
}

// view engine setup
//We are declaring the localization of the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Registrando middlewares
//Log all received requests
app.use(logger('dev'));
// app.use((req, res, next) => {
//  console.log("🍎 We have received a request");
//  next();
//});
//app.use((req, res,next) => {
//  console.log(`😷 IP: ${req.ip}`);
//  console.log(`😷 METHOD: ${req.method}`);
//  next();
//});
//Parse request data into json
app.use(express.json());
//Decode url info
app.use(express.urlencoded({ extended: false }));
// Parse client cookies info json
app.use(cookieParser());
// Set up the static files server
app.use(express.static(path.join(__dirname, '../public')));

//Registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;

export default app;
