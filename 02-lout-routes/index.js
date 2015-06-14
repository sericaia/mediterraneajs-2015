
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

server.register({register: require('./mediterraneaApi.js')}, function (err) {
});

server.register({
    register: require('lout')
}, function (err) {
    /* error handing */
});

server.start(function(){
	console.info("Server started!");

	console.info("ADDRESS:", server.info.address);
	console.info("PROTOCOL:", server.info.protocol);

	console.info("PORT:", server.info.port);
	console.info("HOST:", server.info.host);
	console.info("URL:", server.info.uri);
    console.info("LOUT DOCS URL:", server.info.uri + '/docs');
});