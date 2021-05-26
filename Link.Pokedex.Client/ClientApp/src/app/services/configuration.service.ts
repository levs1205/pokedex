import { Injectable } from '@angular/core';
import { IConfiguration } from '../models/configuration/configuration.model';
import { StorageService } from './storage.service';
import { Observable, Observer, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../shared/constants';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  serverSettings: IConfiguration;
  // observable that is fired when settings are loaded from server
  private settingsLoadedSource = new Subject();
  settingsLoaded$ = this.settingsLoadedSource.asObservable();
  isReady: boolean = false;

  constructor(private http: HttpClient,
    private storageService: StorageService
  ) { }

  loadConfig() {
    this.loadDevelopment();
    this.isReady = true;
    this.settingsLoadedSource.next();
  }

  loadDevelopment() {

    if (this.pokedexUrl == null) {
      this.storageService.store(Constants.SistemaUrl.POKEDEX_URL, environment.PokedexUrl);
    }

  }

  get pokedexUrl() {
    return this.storageService.retrieve(Constants.SistemaUrl.POKEDEX_URL);
  }

}
