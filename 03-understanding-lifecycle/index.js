
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

server.ext('onRequest', function (request, reply) {

    console.log("onRequest", "event");
    //perform route validations
    routeValidation('dataToValidate', function(err, result){
        return (err || !result) ? reply(err) : reply.continue();
    });

});

var routeValidation = function(data, callback){

    //perform some kind of validation
    // ...
    callback(null, 'dataToValidate');
}

server.start(function(){
	console.log("Server started!");
	console.log("URL:", server.info.uri);
});