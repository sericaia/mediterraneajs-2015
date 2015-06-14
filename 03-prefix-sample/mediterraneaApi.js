var register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path:'/mediterraneajs',
        handler: function (request, reply) {
            reply('Mediterranea JS...the best route to meet Barcelona!');
        }
    });

    plugin.route({
        method: 'POST',
        path:'/mediterraneajs',
        handler: function (request, reply) {
            reply('Example POST route');
        }
    });

    plugin.route({
        method: 'PUT',
        path:'/mediterraneajs/{id}',
        handler: function (request, reply) {
            reply('Example PUT route with id=' + request.params.id);
        }
    });

    plugin.route({
        method: 'DELETE',
        path:'/mediterraneajs/{id}',
        handler: function (request, reply) {
            reply('Example DELETE route with id=' + request.params.id);
        }
    });

    next();
};

register.attributes = {
    name : 'mediterraneaApi',
    version : '1.0.0' /* I am confident! */
}

module.exports = register;