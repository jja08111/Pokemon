import PokemonDetailResponse from '../service/model/PokemonDetailResponse';
import TypeContainer from './TypeContainer';

// TODO: Find simple way to make the domain model.
export default class PokemonDetail {
  readonly name: string;

  readonly id: number;

  readonly order: number;

  readonly weight: number;

  readonly height: number;

  readonly types: TypeContainer[];

  private constructor(params: {
    name: string;
    id: number;
    order: number;
    weight: number;
    height: number;
    types: TypeContainer[];
  }) {
    this.name = params.name;
    this.id = params.id;
    this.order = params.order;
    this.weight = params.weight;
    this.height = params.height;
    this.types = params.types;
  }

  static from(dto: PokemonDetailResponse): PokemonDetail {
    return new PokemonDetail({
      name: dto.name,
      id: dto.id,
      order: dto.order,
      weight: dto.weight,
      height: dto.height,
      types: dto.types.map((typeContainer) => ({
        slot: typeContainer.slot,
        type: typeContainer.type,
      })),
    });
  }
}
