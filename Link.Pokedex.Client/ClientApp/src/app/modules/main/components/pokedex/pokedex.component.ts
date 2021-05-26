import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonDto } from '../../../../models/dto';
import { PokedexService } from '../../../../services';
import { Notifications } from '../../../../shared/notifications';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemon: PokemonDto;
  cantMax: number;
  psValido: Array<number>;
  psInvalido: Array<number>;
  ataqueValido: Array<number>;
  ataqueInvalido: Array<number>;
  defensaValido: Array<number>;
  defensaInvalido: Array<number>;
  ataqueEspValido: Array<number>;
  ataqueEspInvalido: Array<number>;
  defensaEspValido: Array<number>;
  defensaEspInvalido: Array<number>;
  velocidadValido: Array<number>;
  velocidadInvalido: Array<number>;
  mostrardetalle: boolean;
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  constructor(private _pokedexservice: PokedexService,
    private notificator: Notifications) {
    this.mostrardetalle = false;
    this.cantMax = 10;
    this.iniciarpokemon();
  }

  ngOnInit() {

  }

  iniciarpokemon() {
    this.pokemon = new PokemonDto;
    this.psValido = [];
    this.psInvalido = [];
    this.ataqueValido = [];
    this.ataqueInvalido = [];
    this.defensaValido = [];
    this.defensaInvalido = [];
    this.ataqueEspValido = [];
    this.ataqueEspInvalido = [];
    this.defensaEspValido = [];
    this.defensaEspInvalido = [];
    this.velocidadValido = [];
    this.velocidadInvalido = [];
    this.mostrardetalle = false;
  }

  busquedapokemon(nombre) {

    this.iniciarpokemon();

    this._pokedexservice.GetPokemon(nombre).subscribe(result => {
      this.pokemon = result;
      
      this.pokemon.Imagen = "/assets/img/" + this.pokemon.Imagen;

      this.mostrardetalle = true;
      //Ps
      for (var i = 0; i < this.pokemon.Ps; i++) { this.psValido.push(i); }
      for (var i = 0; i < this.cantMax - this.pokemon.Ps; i++) { this.psInvalido.push(i); }

      //Ataque
      for (var i = 0; i < this.pokemon.Ataque; i++) { this.ataqueValido.push(i); }
      for (var i = 0; i < this.cantMax - this.pokemon.Ataque; i++) { this.ataqueInvalido.push(i); }

      //Defensa
      for (var i = 0; i < this.pokemon.Defensa; i++) { this.defensaValido.push(i); }
      for (var i = 0; i < this.cantMax - this.pokemon.Defensa; i++) { this.defensaInvalido.push(i); }

      //Ataque Especial
      for (var i = 0; i < this.pokemon.AtaqueEspecial; i++) { this.ataqueEspValido.push(i); }
      for (var i = 0; i < this.cantMax - this.pokemon.AtaqueEspecial; i++) { this.ataqueEspInvalido.push(i); }

      //Defensa Especial
      for (var i = 0; i < this.pokemon.DefensaEspecial; i++) { this.defensaEspValido.push(i); }
      for (var i = 0; i < this.cantMax - this.pokemon.DefensaEspecial; i++) { this.defensaEspInvalido.push(i); }

      //Velocidad
      for (var i = 0; i < this.pokemon.Velocidad; i++) { this.velocidadValido.push(i); }
      for (var i = 0; i < this.cantMax - this.pokemon.Velocidad; i++) { this.velocidadInvalido.push(i); }
    });
  }

}
