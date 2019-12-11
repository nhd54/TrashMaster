import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    let difficulty;
    let url = window.location.href;
    
    difficulty = url.replace(/\/+$/, '').split("=").pop();

    let medIcons = document.getElementsByClassName('diffMed');
    let hardIcons = document.getElementsByClassName('diffHard');

    if(difficulty == "easy") {
      for(var i = 0; i < medIcons.length; i++) {
        medIcons[i].classList.add('displayNone');
        hardIcons[i].classList.add('displayNone');
      }
      console.log("Game is set to " + difficulty);
    }
    if(difficulty == "medium") {
      for(var i = 0; i < medIcons.length; i++) {
        hardIcons[i].classList.add('displayNone');
      }
      console.log("Game is set to " + difficulty);
    }
    if(difficulty == "hard") {
      console.log("Game is set to " + difficulty);
    }
  }

}
