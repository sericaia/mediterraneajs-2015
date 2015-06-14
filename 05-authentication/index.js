/*
 * Example from hapi documentation
 * http://hapijs.com/tutorials/auth
 */

var Bcrypt = require('bcrypt');
var Hapi = require('hapi');
var HapiAuthBasic = require('hapi-auth-basic');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

var users = {
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    }
};

var validate = function (username, password, callback) {
    var user = users[username];
    if (!user) {
        return callback(null, false);
    }

    Bcrypt.compare(password, user.password, function (err, isValid) {
        callback(err, isValid, { id: user.id, name: user.name });
    });
};

server.register(HapiAuthBasic, function (err) {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });

    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: 'simple',
            handler: function (request, reply) {
                reply('Welcome, ' + request.auth.credentials.name);
            }
        }
    });

    server.start(function () {
        console.info("Server started!");
        console.info("URL:", server.info.uri);
    });
});