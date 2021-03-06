import { Component, OnInit } from '@angular/core';
import {LevelService } from './level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  gameDifficulty = "easy";

  changeDifficulty(x) {
    var x;

    if(x == 0) {
      this.gameDifficulty = "easy";
    }
    if(x == 1) {
      this.gameDifficulty = "medium";
    } 
    if(x == 2) {
      this.gameDifficulty = "hard";
    }
  }

  debug() {
    console.log(this.gameDifficulty);
  }


  /* DO NOT TOUCH THE "ERRORS" THEY ARE NOT ERRORS */
  changeColor(x) {
    var x;
    if(x == 0) {
      document.querySelector("#iconEasy").setAttribute("src", "../assets/img/trash3.svg");
      document.querySelector("#iconMed").setAttribute("src", "../assets/img/trashgrey.svg");
      document.querySelector("#iconHard").setAttribute("src", "../assets/img/trashgrey.svg");
    }
    if(x == 1) {
      document.querySelector("#iconEasy").setAttribute("src", "../assets/img/trashgrey.svg");
      document.querySelector("#iconMed").setAttribute("src", "../assets/img/trash3.svg");
      document.querySelector("#iconHard").setAttribute("src", "../assets/img/trashgrey.svg");
    }
    if(x == 2) {
      document.querySelector("#iconEasy").setAttribute("src", "../assets/img/trashgrey.svg");
      document.querySelector("#iconMed").setAttribute("src", "../assets/img/trashgrey.svg");
      document.querySelector("#iconHard").setAttribute("src", "../assets/img/trash3.svg");
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
