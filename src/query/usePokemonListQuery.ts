import { useQuery } from 'react-query';
import { fetchPokemonList } from '../service/api/pokemon';

const usePokemonListQuery = (page: number) => {
  const param = { page };
  return useQuery({
    queryKey: ['pokemonList', page],
    queryFn: () => fetchPokemonList(param),
  });
};

export default usePokemonListQuery;
