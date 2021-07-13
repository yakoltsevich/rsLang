import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/main-page/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './components/main-page/footer/footer.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FeaturesComponent } from './components/main-page/features/features.component';
import { GamesComponent } from './components/main-page/games/games.component';
import { FeatureCartComponent } from './components/main-page/features/feature-cart/feature-cart.component';
import { GameMemoryComponent } from './components/main-page/games/game-memory/game-memory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    FeaturesComponent,
    GamesComponent,
    FeatureCartComponent,
    GameMemoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
