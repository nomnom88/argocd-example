var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Duncans test app, version:'); //write a response to the client
    res.write(process.env.APP_VERSION); //write a response to the client
    res.end(); //end the response
}).listen(80); //the server object listens on port 8080
