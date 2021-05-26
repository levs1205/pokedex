import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { PokedexAgent } from './agents/pokedex/pokedex-agent';
import { PokedexService } from './services';
import { NetworkManager } from './agents/networkmanager';
import { Notifications } from './shared/notifications';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' }),
    ToastrModule.forRoot(),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    NetworkManager,
    Notifications,
    PokedexService,
    PokedexAgent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSearch,);
  }
}
