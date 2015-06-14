var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

var options = {
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

    // route interceptor

    console.log("onRequest", "event");

    doSomething('sendSomeData', function(err, result){
        return (err || !result) ? reply(err) : reply.continue();
    });
});

var doSomething = function(data, callback){
    //perform some kind of interception
    // ...
    callback(null, data);
}
