import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


import { User } from '../user';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})

export class HighscoreComponent implements OnInit {

  username;

  usersCol: AngularFirestoreCollection<User>;
  users: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.username = JSON.parse(this.username);
    console.log(this.username);

    this.usersCol = this.afs.collection('users', ref => ref.orderBy('score', "desc"));
    this.users = this.usersCol.valueChanges();
  }

}




