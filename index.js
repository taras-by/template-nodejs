require('dotenv').config()
const opn = require('open');
const http = require("http");
const port = process.env.PORT;
const message = "Hello world!";
const url = `http://localhost:${port}/test`;

console.log(`Run: ${url}`);

http.createServer(function (request, response) {
    console.log(`${request.method} ${request.url}`);
    response.end(message);
}).listen(port);

opn(url);
