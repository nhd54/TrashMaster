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
    /* let replaceUrlWith = "endgame"; */

    this.score = url.replace(/\/+$/, '').split('=').pop();

    /* var stateObj = { foo: "bar" };
    history.pushState(stateObj, "some useless title", replaceUrlWith); */

  }

}
