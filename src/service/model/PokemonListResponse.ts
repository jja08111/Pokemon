/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
import PokemonDto from './PokemonDto';

const PokemonListResponse = z.object({
  count: z.number().int(),
  previous: z.string().url().nullable(),
  next: z.string().url().nullable(),
  results: z.array(PokemonDto),
});

type PokemonListResponse = z.infer<typeof PokemonListResponse>;

export default PokemonListResponse;
