import { useInfiniteQuery } from 'react-query';
import { fetchPokemonList } from '../service/api/pokemon';

const usePokemonListQuery = () => {
  return useInfiniteQuery({
    queryKey: ['pokemonList'],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next != null ? allPages.length : undefined,
  });
};

export default usePokemonListQuery;
