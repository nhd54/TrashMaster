import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from "./component/start/start.component";
import { MenuComponent } from "./component/menu/menu.component";
import { PopupComponent } from "./component/popup/popup.component";
import { AboutComponent } from "./component/about/about.component";
import { GamepopupComponent } from "./component/gamepopup/gamepopup.component";
import { PlayComponent } from "./component/play/play.component";
import { LevelComponent } from "./component/level/level.component";
import { GameComponent } from "./component/game/game.component";
import { EndgameComponent } from "./component/endgame/endgame.component";
import { HighscoreComponent } from "./component/highscore/highscore.component";
import { ScoreComponent } from "./component/score/score.component";


const routes: Routes = [
  {path: 'start' , component: StartComponent},
  {path: 'menu' , component: MenuComponent},
  {path: 'popup' , component: PopupComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'gamepopup' , component: GamepopupComponent},
  {path: 'play' , component: PlayComponent},
  {path: 'level' , component: LevelComponent},
  {path: 'game' , component: GameComponent},
  {path: 'endgame' , component: EndgameComponent},
  {path: 'highscore' , component: HighscoreComponent},
  {path: 'score' , component: ScoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
