var register = function (plugin, options, next) {

    var caipirinhaIngredients = function (request, reply) {
        return reply('Cachaça, lime, and sugar');
    };

    var mojitoIngredients = function (request, reply) {
        return reply('Mint leaves, limes, rum, sugar, and soda');
    };

    var partyDrinks = function (request, reply) {
        return reply(request.pre.caipirinha + ' and ' + request.pre.mojito);
    };


    //mediterraneaJS party route
    plugin.route({
        method: 'GET',
        path: '/party',
        config: {
            pre: [
                [
                    /* capirinha and mojito executed in parallel */
                    { method: caipirinhaIngredients, assign: 'caipirinha' },
                    { method: mojitoIngredients, assign: 'mojito' }
                ],
                { method: partyDrinks, assign: 'drinks' },
            ],
            handler: function (request, reply) {
                return reply("MediterraneaJS party requirements: \n" + request.pre.drinks);
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