import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { MainRoutes } from './main-routing.module';
import { Router,RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    NgbModule,
    FontAwesomeModule
  ]
})
export class MainModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSearch,);
  }
}
