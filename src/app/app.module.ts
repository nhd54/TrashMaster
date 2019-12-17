import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { StartComponent } from './component/start/start.component';
import { BurgerComponent } from './component/burger/burger.component';
import { PopupComponent } from './component/popup/popup.component';
import { AboutComponent } from './component/about/about.component';
import { GamepopupComponent } from './component/gamepopup/gamepopup.component';
import { PlayComponent } from './component/play/play.component';
import { LevelComponent } from './component/level/level.component';
import { CountdownComponent } from './component/countdown/countdown.component';
import { GameComponent } from './component/game/game.component';
import { LifeComponent } from './component/life/life.component';
import { ScoreComponent } from './component/score/score.component';
import { CurrentitemComponent } from './component/currentitem/currentitem.component';
import { TrashComponent } from './component/trash/trash.component';
import { TimeComponent } from './component/time/time.component';
import { HighscoreComponent } from './component/highscore/highscore.component';
import { EndgameComponent } from './component/endgame/endgame.component';
import { DataService } from './component/data.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCyp7QXfV8z1FO_mWiBRc9gpSsmppcHUpM",
    authDomain: "trashmasterexam.firebaseapp.com",
    databaseURL: "https://trashmasterexam.firebaseio.com",
    projectId: "trashmasterexam",
    storageBucket: "trashmasterexam.appspot.com",
    messagingSenderId: "1043986869543",
    appId: "1:1043986869543:web:89892f510ecfbb7d744d02"
  };

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		StartComponent,
		BurgerComponent,
		PopupComponent,
		AboutComponent,
		GamepopupComponent,
		PlayComponent,
		LevelComponent,
		CountdownComponent,
		GameComponent,
		LifeComponent,
		ScoreComponent,
		CurrentitemComponent,
		TrashComponent,
		TimeComponent,
		HighscoreComponent,
		EndgameComponent
	],
	imports: [ 	BrowserModule, 
				AppRoutingModule,
				AngularFireModule.initializeApp(firebaseConfig),
				AngularFirestoreModule ],
	providers: [ DataService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
