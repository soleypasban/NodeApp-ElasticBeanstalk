var port = process.env.PORT || 80,
    http = require('http'),
    fs = require('fs')

var html = fs.readFileSync('content.html')

var server = http.createServer(function (request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
})

server.listen(port);

console.log('Server running at http://localhost:' + port + '/');
