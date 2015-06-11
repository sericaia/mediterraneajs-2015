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
        path:'/welcome/{name}',  // ex. http://localhost:8000/welcome/daniela?mood=happy
        handler: function (request, reply) {

            var welcomeMsg = 'Welcome ' + request.params.name + "!\n";
            welcomeMsg += 'Are you ' + request.query.mood + "?";

            reply(welcomeMsg);
        },
        config: {
            validate: {
                params: {
                    name: Joi.string().required()
                },
                query: {
                    mood: Joi.string().valid(["happy","sad"]).default("happy")
                }
            }
        }
    });

    next();
};

register.attributes = {
    name : 'authApi',
    version : '1.0.0'
}

module.exports = register;