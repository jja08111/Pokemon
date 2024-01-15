import { useQuery } from 'react-query';
import { fetchPokemonDetail } from '../service/api/pokemon';

const usePokemonDetailQuery = (pokemonName: string) => {
  return useQuery({
    queryKey: ['pokemonDetail', pokemonName],
    queryFn: () => fetchPokemonDetail(pokemonName),
  });
};

export default usePokemonDetailQuery;
