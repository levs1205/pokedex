import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  {
    path: 'pokedex',
    loadChildren: './modules/main/main.module#MainModule',
    //runGuardsAndResolvers: 'always'
  }
];
export class AppRoutingModule { }
