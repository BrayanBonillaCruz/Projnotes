#!/usr/bin/env node

/**
 * Module dependencies.
 */
// Se importa en app la logica del server
// require importa codigo de otro archivo
//const app = require('../app');
import app from '../app';
//Se importa una dependencia externa
const debug = require('debug')('projnotes');
//Modulo que permite la comunicacion con un cliente via el protocolo Http
//const http = require('http');
import http from 'http';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
//Store the port info in the app
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app); //(req, res) => {acciones}

/**
 * Listen on provided port, on all network interfaces.
 */
//Specifying the port where the server will be listening
server.listen(port);
//Attaching callbacks to events
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  //debug('⭐ Listening on ' + bind + '⭐⭐');
  debug(`⭐⭐ Listening on ${process.env.APP_URL}:${addr.port} ⭐⭐`);
}
