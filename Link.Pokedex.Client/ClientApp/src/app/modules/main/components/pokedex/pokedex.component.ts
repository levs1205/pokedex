import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonDto } from '../../../../models/dto';
import { PokedexService } from '../../../../services';
import { Notifications } from '../../../../shared/notifications';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import Speech from "speak-tts";

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  speech = new Speech();
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;
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
    private notificator: Notifications,
  ) {
    this.mostrardetalle = false;
    this.cantMax = 10;
    this.iniciarpokemon();
  }

  ngOnInit() {
    this.initvoice();
    this.initspeech();
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
    this.getpokemon(nombre);
    
  }

  getpokemon(name) {
    this._pokedexservice.GetPokemon(name).subscribe(result => {
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

      this.pokemontospeech();
    });
  }

  pokemontospeech() {
    var alt = this.pokemon.Altura.toString().split(".");
    var pes = this.pokemon.Peso.toString().split(".");
    var sexo = this.pokemon.Sexo.toString().split(",");

    var txt = 'Pokémon ' + this.pokemon.Nombre;
    txt += ', altura ' + alt[0] + " punto " + alt[1] + " metros";
    txt += ', categoria ' + this.pokemon.Categoria;
    txt += ', peso ' + pes[0] + " punto " + pes[1] + ' kilogramos';
    txt += ', habilidad ' + this.pokemon.Habilidad;
    txt += ', sexo ';

    for (var i = 0; i < sexo.length; i++) {
      if (sexo[i] == "M") {
        txt += 'macho,';
      } else {
        txt += 'hembra,';
      }
    }

    txt += ' tipos ';

    for (var i = 0; i < this.pokemon.Tipo.length; i++) {
      txt += this.pokemon.Tipo[i].Nombre + ',';
    }

    txt += ' debilidad ';

    for (var i = 0; i < this.pokemon.Debilidad.length; i++) {
      txt += this.pokemon.Debilidad[i].Nombre + ',';
    }

    txt += ' ps ' + this.pokemon.Ps;
    txt += ', ataque ' + this.pokemon.Ataque;
    txt += ', defensa ' + this.pokemon.Defensa;
    txt += ', ataque especial ' + this.pokemon.AtaqueEspecial;
    txt += ', defensa especial ' + this.pokemon.DefensaEspecial;
    txt += ', velocidad ' + this.pokemon.Velocidad;

    this.talk(txt);
  }

  initvoice() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  startvoice() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat();
        this.recognition.stop();
        this.busquedapokemon(this.text);
        //this.recognition.start();
      }
    });
  }

  stopvoice() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    //this.text = this.text + ' ' + this.tempWords + '.';
    this.text = this.tempWords;
    this.tempWords = '';
  }

  initspeech() {
    this.speech
      .init({
        volume: 0.5,
        lang: "en-GB",
        rate: 1,
        pitch: 1,
        //'voice':'Google UK English Male',
        //'splitSentences': false,
        listeners: {
          onvoiceschanged: voices => {
            console.log("Voices changed", voices);
          }
        }
      })
      .then(data => {
        console.log("Speech is ready", data);

      })
      .catch(e => {
        console.error("An error occured while initializing : ", e);
      });
  }

  talk(texttospeak) {
    this.speech.setLanguage("es-ES");
    this.speech.setVoice("Microsoft Helena - Spanish (Spain)");
    this.speech
      .speak({
        text: texttospeak,
        queue: false,
        listeners: {
          onstart: () => {
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
              " boundary reached after " +
              event.elapsedTime +
              " milliseconds."
            );
          }
        }
      })
      .then(data => {
        console.log("Success !", data);
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  }
}
