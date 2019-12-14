import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  username;

  constructor() { }

  saveUsername() {
    this.username = (<HTMLInputElement>document.getElementById('usernameInput')).value;
    console.log(this.username);
    localStorage.setItem("username", JSON.stringify(this.username));
  }

  ngOnInit() {
    console.log(this.username);
  }

}

