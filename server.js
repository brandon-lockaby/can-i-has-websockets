var connect = require("connect");
var app = connect.createServer(
	connect.static(__dirname + '/static')
);
app.listen(process.env.PORT || 8080);

var io = require("socket.io").listen(app);
io.set('log level', 1);
io.set("transports", ["websocket", "xhr-polling", "jsonp-polling", "htmlfile", "flashsocket"]);
io.set("force new connection", true);
io.sockets.on("connection", function(socket) {
	socket.emit("ok");
	setTimeout(function() {
		socket.disconnect();
	}, 200);
});
