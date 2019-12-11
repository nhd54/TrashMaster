import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.css']
})
export class EndgameComponent implements OnInit {

  score;

  constructor() { }

  ngOnInit() {
    let url = window.location.href;

    this.score = url.replace(/\/+$/, '').split('=').pop();


  }

}
