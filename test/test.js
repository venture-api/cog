const {assert} = require('chai');
const Cog = require('../cog');


let tasu;
let cog;
let config;

describe('cog', () => {

    before(async function ()  {

        cog = await Cog();
        tasu = cog.get('tasu');
        config = cog.get('config');
    });

    after(async function () {
        console.log('> stopping test cog');
        tasu.close();
    });

    describe('"generate" listeners', () => {

        it('handles player.id', async () => {

            const id = await tasu.request('player.id', {});
            assert.include(id, config.codes.player);
        });

        it('handles factory.id', async () => {

            const id = await tasu.request('factory.id', {});
            assert.include(id, config.codes.factory);
            assert.include(id, config.codes.general);
        });

        it('handles resource.id', async () => {

            const id = await tasu.request('resource.id', {type: 'coal'});
            assert.include(id, config.codes.resource);
            assert.include(id, config.codes.coal);
        });

    });

});

