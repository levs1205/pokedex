import { Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';


export const MainRoutes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
];
export class MainRoutingModule { }
