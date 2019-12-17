import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { User } from '../user';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.css']
})

export class EndgameComponent implements OnInit {

  username;
  url_score;
  score;

  user = new User();

  constructor(private afs: AngularFirestore) { }

  submit() {
    this.afs.collection('users').add({
      name: this.username,
      score: this.score
    });
  }

  ngOnInit() {
    let url = window.location.href;
    /* let replaceUrlWith = "endgame"; */

    this.url_score = url.replace(/\/+$/, '').split('=').pop();
    this.score = Number(this.url_score);

    /* if (this.score = NaN) {
      this.score = 0;
    } */

    /* var stateObj = { foo: "bar" };
    history.pushState(stateObj, "some useless title", replaceUrlWith); */

    this.username = localStorage.getItem('username');
    //this.username = JSON.parse(this.username);
    console.log(this.username);

    this.submit();
  }

}
