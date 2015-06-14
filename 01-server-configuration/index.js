
var Hapi = require('hapi');

var config = {
	dbConnection: 'mongodb://myvoodoapp',
    drinks: ['capirinha', 'mojito', 'margarita']
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

	console.info("Server started!");

	console.info("ADDRESS:", server.info.address);
	console.info("PROTOCOL:", server.info.protocol);

	console.info("PORT:", server.info.port);
	console.info("HOST:", server.info.host);
	console.info("URL:", server.info.uri);
});