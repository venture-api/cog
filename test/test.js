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

        it('handles player.id.generate', async () => {

            const id = await tasu.request('player.id.generate', {});
            assert.include(id, config.codes.player);
        });

        it('handles factory.id.generate', async () => {

            const id = await tasu.request('factory.id.generate', {});
            assert.include(id, config.codes.factory);
            assert.include(id, config.codes.general);
        });

        it('handles resource.id.generate', async () => {

            const id = await tasu.request('resource.id.generate', {type: 'coal'});
            assert.include(id, config.codes.resource);
            assert.include(id, config.codes.coal);
        });

    });

});

