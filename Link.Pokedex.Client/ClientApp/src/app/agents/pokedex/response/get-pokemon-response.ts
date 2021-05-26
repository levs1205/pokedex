import { PokemonDto } from "../../../models/dto/pokemon-dto";
import { BaseResponse } from "../../core/base-response";

export class GetPokemonResponse extends BaseResponse {
  public Pokemon: PokemonDto;
}
