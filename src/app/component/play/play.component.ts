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

    if(difficulty == "easy") {
      document.querySelector(".diffMed").classList.add("displayNone");
      document.querySelector(".diffHard").classList.add("displayNone");
      console.log("Game is set to " + difficulty);
    }
    if(difficulty == "medium") {
      document.querySelector(".diffHard").classList.add("displayNone");
      console.log("Game is set to " + difficulty);
    }
    if(difficulty == "hard") {
      console.log("Game is set to " + difficulty);
    }
  }

}
