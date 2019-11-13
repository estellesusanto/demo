const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

/**
 * This file will only execute if the no `npm start` is configured in the package.json
 * Why? because `npm start` defaults to `node server.js` if no configuration is set.
 * You can also run this file by setting the configuration for `npm start` to `node <anyfileName.js>`.
 */