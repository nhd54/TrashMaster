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
    localStorage.setItem("username", this.username);
    window.location.href = "/about";
  }

  checkValue() {
    if((<HTMLInputElement>document.getElementById('usernameInput')).value != "") {
      document.querySelector('.btn').removeAttribute('disabled');
    } else {
      document.querySelector('.btn').setAttribute('disabled', 'disabled');
    }
  }

  ngOnInit() {
    let test = localStorage.getItem("username");
    this.username = test;
    console.log(this.username);
    if(this.username != undefined) {
      document.querySelector('input').value = this.username;
    }

    setInterval(this.checkValue, 1000);
  }

}