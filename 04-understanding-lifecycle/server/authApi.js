var Joi = require('joi');

var register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path:'/',
        handler: function (request, reply) {
            reply('super awesome index page!');
        }
    });


    plugin.route({
        method: 'GET',
        path: '/vodoo',
        handler: function (request, reply) {
            return reply("making vodoo interceptor @MediterraneaJS");
        }
    });

    next();
};

register.attributes = {
    name : 'authApi',
    version : '1.0.0'
}

module.exports = register;