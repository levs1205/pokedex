import { TipoDto } from "./tipo-dto";

export class PokemonDto {
  Nombre: string;
  Altura: number;
  Categoria: string;
  Peso: number;
  Habilidad: string;
  Sexo: string;
  Ps: number;
  Ataque: number;
  Defensa: number;
  AtaqueEspecial: number;
  DefensaEspecial: number;
  Velocidad: number;
  Imagen: string;
  Tipo: Array<TipoDto>;
  Debilidad: Array<TipoDto>;

  constructor() {
    this.Nombre = "";
    this.Altura = 0;
    this.Categoria = "";
    this.Peso = 0;
    this.Habilidad = "";
    this.Sexo = "";
    this.Ps = 0;
    this.Ataque = 0;
    this.Defensa = 0;
    this.AtaqueEspecial = 0;
    this.DefensaEspecial = 0;
    this.Velocidad = 0;
    this.Imagen = "";
    this.Tipo = [];
    this.Debilidad = [];
  }
}
