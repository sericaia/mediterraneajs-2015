
var Hapi = require('hapi');
var server = new Hapi.Server();


server.connection({
    host: 'localhost',
    port: 8000
});

server.register({register: require('./mediterraneaApi.js')}, {
    routes: {
        prefix: '/api'
    }
}, function (err) {
});

server.register({
    register: require('lout')
}, function (err) {
    /* error handing */
});


server.start(function(){
	console.log("Server started!");

	console.log("ADDRESS:", server.info.address);
	console.log("PROTOCOL:", server.info.protocol);

	console.log("PORT:", server.info.port);
	console.log("HOST:", server.info.host);
	console.log("URL:", server.info.uri);
    console.log("LOUT DOCS URL:", server.info.uri + '/docs');
});