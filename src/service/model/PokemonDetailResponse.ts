/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';

const Type = z.object({
  name: z.string(),
});

const TypeContainer = z.object({
  slot: z.number().int(),
  type: Type,
});

const PokemonDetailResponse = z.object({
  id: z.number(),
  name: z.string(),
  order: z.number().int(),
  weight: z.number(),
  height: z.number(),
  types: z.array(TypeContainer),
});

type PokemonDetailResponse = z.infer<typeof PokemonDetailResponse>;

export default PokemonDetailResponse;
