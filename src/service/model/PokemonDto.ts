/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';

const PokemonDto = z.object({
  name: z.string(),
  url: z.string().url(),
});

type PokemonDto = z.infer<typeof PokemonDto>;

export default PokemonDto;
