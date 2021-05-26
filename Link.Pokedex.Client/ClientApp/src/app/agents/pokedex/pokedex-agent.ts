
import { NetworkManager, PostParameters } from "../networkmanager";
import { PathOperation } from "./path-operation";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Constants } from "../../shared/constants";
import { ConfigurationService } from "../../services/configuration.service";
import { StorageService } from "../../services/storage.service";
import { GetPokemonRequest } from "./request/";
import { GetPokemonResponse } from "./response/";

@Injectable()
export class PokedexAgent {

  private pokedexUrl: string;

  constructor(private networkManager: NetworkManager,
    storageService: StorageService,
    configurationService: ConfigurationService) {

    this.pokedexUrl = storageService.retrieve(Constants.SistemaUrl.POKEDEX_URL);
    configurationService.loadConfig();
    if (configurationService.isReady)
      this.pokedexUrl = configurationService.pokedexUrl;
    else
      configurationService.settingsLoaded$.subscribe(x => this.pokedexUrl = configurationService.pokedexUrl);
  }

  GetPokemon(request: GetPokemonRequest): Observable<GetPokemonResponse> {
    let postParameters: PostParameters = new PostParameters();

    postParameters.PathOperation = this.pokedexUrl + PathOperation.PokemonGet;
    postParameters.RequestParameter = request;

    return this.networkManager.Post(postParameters) as Observable<GetPokemonResponse>;
  }



}
