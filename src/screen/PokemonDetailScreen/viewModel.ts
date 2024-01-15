import { useMemo } from 'react';
import PokemonDetail from '../../model/PokemonDetail';
import usePokemonDetailQuery from '../../query/usePokemonDetailQuery';

interface PokemonDetailUiState {
  pokemonDetail?: PokemonDetail;
  isLoading: boolean;
  error?: unknown;
}

const usePokemonDetailViewModel = (
  pokemonName: string,
): PokemonDetailUiState => {
  const {
    isLoading,
    error,
    data: pokemonDetail,
  } = usePokemonDetailQuery(pokemonName);

  const convertedPokemonDetail = useMemo(() => {
    if (pokemonDetail === undefined) {
      return undefined;
    }
    return PokemonDetail.from(pokemonDetail);
  }, [pokemonDetail]);

  return {
    isLoading,
    error,
    pokemonDetail: convertedPokemonDetail,
  };
};

export default usePokemonDetailViewModel;
