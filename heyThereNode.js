const http = require("http");   //connect to server
let result = require("./heyThereNodeQuote.js");   // go grab what you wanted to export
console.log(result.randomQuote());

http.createServer(onRequest).listen(3002);

function onRequest(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(result.randomQuote());
response.end();
}

 
