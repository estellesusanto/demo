const http = require('http');

port = process.env.PORT || 5000;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(port);

console.log(`server running on port ${port}`)

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("Hello World!");
}).listen(5001);

/**
 * Need to create both HTTPs and HTTP server to serve both http/https
 */