
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { PokemonDto } from "../models/dto";
import { Injectable } from '@angular/core';
import { PokedexAgent } from "../agents/pokedex/pokedex-agent";
import { GetPokemonRequest } from "../agents/pokedex/request";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pokedexAgent: PokedexAgent;

  constructor(pokedexAgent: PokedexAgent) {
    this.pokedexAgent = pokedexAgent;
  }

  GetPokemon(nombre: string): Observable<PokemonDto> {
    let getPokemonRequest: GetPokemonRequest = new GetPokemonRequest();
    getPokemonRequest.Name = nombre;

    return this.pokedexAgent.GetPokemon(getPokemonRequest)
      .pipe(map((response) => response.Pokemon));
  }
}
