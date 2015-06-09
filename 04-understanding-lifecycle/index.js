
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

var options = {
    opsInterval: 1000,
    reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*' }
    }]
};

server.register({register: require('./server/authApi.js')}, {
}, function (err) {});

server.register({register: require('./server/mediterraneaApi.js')}, {
    routes: {
        prefix: '/api'
    }
}, function (err) {
});

server.register({
    register: require('good'),
    options: options
}, function (err) {
    if (err) {
        console.error(err);
    }
    else {
        server.start(function () {
            console.info("Server started!");
            console.info("URL:", server.info.uri);
        });
    }
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
