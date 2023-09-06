import axios from 'axios';
import {PokedexClient} from '../app/PokedexClient';

describe('PokedexClient', function () {
    let client: PokedexClient;

    beforeEach(() => {
        client = new PokedexClient();
        jest.mock('axios');
        axios.get = jest.fn();
    });

    describe('#all', function () {
        test('successfully returns fetched data', async function () {
            (axios.get as jest.Mock).mockResolvedValue({data: [{}]});
            
            const res = await client.all();

            expect(res).toHaveLength(1);
            expect(axios.get).toBeCalled();
        });
    });
    describe('#getData', function () {
        test('successfully returns fetched data', async function () {
            (axios.get as jest.Mock).mockResolvedValue({data: {}});
            
            const res = await client.getData(1);

            expect(res).toBeDefined();
            expect(axios.get).toBeCalled(); 
        });
    });
});
