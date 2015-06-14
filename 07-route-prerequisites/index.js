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

server.register({register: require('lout')}, function (err) {
    /* error handing */
});


server.register({register: require('./server/mediterraneaApi.js')}, {
}, function (err) {});

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
