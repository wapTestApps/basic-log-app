var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log("Error: Message 1");
  console.log("Error: Message 2");
  console.log("Regular message 1");
  console.log("Error: Message 3");
  console.log("㯑䲘䄂㮉: A line we want to capture");
  console.log("Regular message 2");
  response.end('Hello World\n');
}).listen(process.env.port);

console.log('Server running at http://127.0.0.1:8124/');