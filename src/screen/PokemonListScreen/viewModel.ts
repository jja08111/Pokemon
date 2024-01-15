import { useMemo } from 'react';
import Pokemon from '../../model/Pokemon';
import usePokemonListQuery from '../../query/usePokemonListQuery';

interface PokemonListUiState {
  pokemons: Pokemon[];
  error?: unknown;
  isLoading: boolean;
  fetchNextPokemons: () => void;
}

const usePokemonListViewModel = (): PokemonListUiState => {
  const {
    data: pokemonListData,
    isLoading: isPokemonListLoading,
    error: pokemonListError,
    fetchNextPage: fetchNextPokemons,
  } = usePokemonListQuery();

  const convertedPokemonList = useMemo(() => {
    const pages = pokemonListData?.pages;
    return pages?.flatMap((page) => {
      return page.results.map((dto) => Pokemon.from(dto));
    });
  }, [pokemonListData]);

  return {
    fetchNextPokemons,
    pokemons: convertedPokemonList ?? [],
    error: pokemonListError,
    isLoading: isPokemonListLoading,
  };
};

export default usePokemonListViewModel;
