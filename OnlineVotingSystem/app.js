var express = require('express'); // Tao ung dung Web
var app = express(); // Tao ung dung Express
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3005;

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('voteEvent', function(data) {
        io.emit('newestData', data)
    });
});

http.listen(port, function() {
    console.log('Server is running at port: 3005!')
})



