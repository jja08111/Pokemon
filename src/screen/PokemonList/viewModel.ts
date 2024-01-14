import { useMemo } from 'react';
import Pokemon from '../../model/Pokemon';
import usePokemonListQuery from '../../query/usePokemonListQuery';

interface PokemonListUiState {
  pokemons: Pokemon[];
  error?: unknown;
  isLoading: boolean;
}

const usePokemonListViewModel = (): PokemonListUiState => {
  const page = 0;
  const {
    data: pokemonListData,
    isLoading: isPokemonListLoading,
    error: pokemonListError,
  } = usePokemonListQuery(page);

  const convertedPokemonList = useMemo(
    () => pokemonListData?.results?.map((dto) => Pokemon.from(dto)),
    [pokemonListData],
  );

  return {
    pokemons: convertedPokemonList ?? [],
    error: pokemonListError,
    isLoading: isPokemonListLoading,
  };
};

export default usePokemonListViewModel;
