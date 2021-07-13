import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {FeaturesComponent} from "./components/main-page/features/features.component";
import {GamesComponent} from "./components/main-page/games/games.component";
import {GameMemoryComponent} from "./components/main-page/games/game-memory/game-memory.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/memory', component: GameMemoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
