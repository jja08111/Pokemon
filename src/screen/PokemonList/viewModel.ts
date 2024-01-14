import { useMemo } from 'react';
import Pokemon from '../../model/Pokemon';
import usePokemonListQuery from '../../query/usePokemonListQuery';

interface PokemonListUiState {
  pokemons?: Pokemon[];
}

const usePokemonListViewModel = (): PokemonListUiState => {
  const page = 0;
  const { data: pokemonListData } = usePokemonListQuery(page);

  const convertedPokemonList = useMemo(
    () => pokemonListData?.results?.map((dto) => Pokemon.from(dto)),
    [pokemonListData],
  );

  return {
    pokemons: convertedPokemonList,
  };
};

export default usePokemonListViewModel;
