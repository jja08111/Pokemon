import PokemonDto from '../service/model/PokemonDto';

export default class Pokemon {
  readonly name: string;

  readonly url: string;

  constructor({ name, url }: { name: string; url: string }) {
    this.name = name;
    this.url = url;
  }

  get imageUrl(): string {
    const splittedUrl = this.url.split('/');
    const index = splittedUrl[splittedUrl.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
  }

  static from(dto: PokemonDto): Pokemon {
    return new Pokemon({ name: dto.name, url: dto.url });
  }
}
