import { fireEvent, render } from '@testing-library/react'
import { PokemonData} from '../app/PokedexClient';
import PokeListItem from '../app/PokeListItem';

describe('<PokeListItem />', function () {
    let pokemon: PokemonData;

    beforeEach(() => {
        pokemon = {
            id: 1,
            name: 'Bulbasaur',
            sprites: new Map().set('front_default', 'image'),
        }
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('it renders an image', function () {
        const i = 0;
        render(<PokeListItem pokemon={pokemon} i={i} choosePokemon={() => {}} />);
        const sprite = document.querySelector('img') as HTMLImageElement;

        expect(sprite.src).toEqual(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`);
    });

    test('it renders a number', function () {
        const { container } = render(<PokeListItem pokemon={pokemon} i={0} choosePokemon={() => {}} />);
        const number = container.querySelector('h2');

        expect(number).toBeDefined();
        expect(number?.textContent).toEqual('No. 001');
    });

    test('it renders a name', function () {
        const { container } = render(<PokeListItem pokemon={pokemon} i={0} choosePokemon={() => {}} />);;
        const name = container.querySelectorAll('h2')[1];

        expect(name).toBeDefined();
        expect(name?.textContent).toEqual(pokemon.name);
    });

    test('it sets the chosenPokemon when clicked', function () {
        let chosenPokemon = 0
        const { container } = render(<PokeListItem pokemon={pokemon} i={0} choosePokemon={(chosen) => {chosenPokemon = chosen}} />);
        const listItem = container.querySelector('div');

        expect(listItem).toBeDefined();

        fireEvent.click(listItem!);

        expect(chosenPokemon).toEqual(1)
    });
});
