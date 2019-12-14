import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score : number; 

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.currentScore.subscribe(score => this.score = score)
  }

}
