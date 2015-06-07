var register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path:'/settings',
        handler: function (request, reply) {
            reply(plugin.settings.app);
        }
    });

    next();
};

register.attributes = {
    name : 'mediterraneaApi',
    version : '1.0.0' /* I am confident! */
}

module.exports = register;