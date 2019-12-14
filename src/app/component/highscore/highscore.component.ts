import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface User {
  name: string;
  score: number;
}

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

    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
  }

}
