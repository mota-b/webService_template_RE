#!/usr/bin/env node






/**
 * First Set the Express App 
 */ 
var app = require('./Controller/Express_app.js');



/**
 * When the App is ready
 * Start the Server 
 */ 
 

/* Requirements */
var http = require('http');
var debug = require('debug')(require('./package.json').name + ':server');
normalizePort = require('normalize-port');

/* Get the port from env or default 3000 */
var port = normalizePort(require('./package.json').links.local_host);
app.set('port', port);


/* Create HTTP server. */
 
var server = http.createServer(app);

/* Listening on provided port */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/* Listening callbacks */
function onError(error) { 
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
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
function onListening() {
    console.log("\n\n-- Server Listening on port", port, "...");
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
