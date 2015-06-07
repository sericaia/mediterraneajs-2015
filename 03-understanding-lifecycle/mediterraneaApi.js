var register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path:'/mediterraneajs',
        handler: function (request, reply) {

            console.log("GET /mediterraneajs called");
            reply('Mediterranea JS...the best route to meet Barcelona!');
        }
    });

    next();
};

register.attributes = {
    name : 'mediterraneaApi',
    version : '1.0.0' /* I am confident! */
}

module.exports = register;