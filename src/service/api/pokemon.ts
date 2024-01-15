import PokemonListResponse from '../model/PokemonListResponse';
import PokeApi from '.';

const PAGE_SIZE = 30;

// eslint-disable-next-line import/prefer-default-export
export const fetchPokemonList = async (page: number) => {
  const response = await PokeApi.get('/pokemon', {
    params: {
      offset: page * PAGE_SIZE,
      limit: PAGE_SIZE,
    },
  });
  return PokemonListResponse.parse(response.data);
};
