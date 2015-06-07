
var Hapi = require('hapi');

var config = {
	environment: 'PRODUCTION',
	dbConnection: 'mongodb://myvoodoapp',
};

var server = new Hapi.Server({
	app: config
});

server.connection({
	host: 'localhost',
	port: 8000
});

server.register({
	register: require('./mediterraneaApi.js')
}, function (err) {
        //error handing
});

server.start(function(){

	console.log("Server started!");

	console.log("ADDRESS:", server.info.address);
	console.log("PROTOCOL:", server.info.protocol);

	console.log("PORT:", server.info.port);
	console.log("HOST:", server.info.host);
	console.log("URL:", server.info.uri);
});