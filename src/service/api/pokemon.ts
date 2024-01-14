import axios from 'axios';
import PokemonListResponse from '../model/PokemonListResponse';

const PAGE_SIZE = 30;

// eslint-disable-next-line import/prefer-default-export
export const fetchPokemonList = async (param: { page: number }) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
    params: {
      offset: param.page * PAGE_SIZE,
      limit: PAGE_SIZE,
    },
  });
  return PokemonListResponse.parse(response.data);
};
