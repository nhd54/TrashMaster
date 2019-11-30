import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
  one = 'player1';
  two = 'player2';
  three = 'player3';
  four = 'player4';
  five = 'player5';
  six = 'player6';
  seven = 'player7';
  eight = 'player8';
  nine = 'player9';
  ten = 'player10';


  constructor() { }

  ngOnInit() {
  }

}
