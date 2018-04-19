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

        it('handles generate.player.id', async () => {

            const id = await tasu.request('generate.player.id', {});
            assert.include(id, config.codes.player);
        });

        it('handles generate.factory.id', async () => {

            const id = await tasu.request('generate.factory.id', {});
            assert.include(id, config.codes.factory);
            assert.include(id, config.codes.general);
        });

        it('handles generate.resource.id', async () => {

            const id = await tasu.request('generate.resource.id', {type: 'coal'});
            assert.include(id, config.codes.resource);
            assert.include(id, config.codes.coal);
        });

    });

});

