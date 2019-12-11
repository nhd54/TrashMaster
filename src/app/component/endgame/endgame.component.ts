import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.css']
})
export class EndgameComponent implements OnInit {

  score : number; 

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.currentScore.subscribe(score => this.score = score)
  }

}
