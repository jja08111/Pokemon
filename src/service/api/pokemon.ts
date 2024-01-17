import PokemonListResponse from '../model/PokemonListResponse';
import PokeApi from '.';
import PokemonDetailResponse from '../model/PokemonDetailResponse';

const PAGE_SIZE = 30;

export const fetchPokemonList = async (
  page: number,
): Promise<PokemonListResponse> => {
  const response = await PokeApi.get('/pokemon', {
    params: {
      offset: page * PAGE_SIZE,
      limit: PAGE_SIZE,
    },
  });
  return PokemonListResponse.parse(response.data);
};

export const fetchPokemonDetail = async (
  pokemonName: string,
): Promise<PokemonDetailResponse> => {
  const response = await PokeApi.get(`/pokemon/${pokemonName}`);
  return PokemonDetailResponse.parse(response.data);
};
