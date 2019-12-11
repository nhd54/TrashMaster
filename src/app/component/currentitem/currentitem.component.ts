import { Component, OnInit } from '@angular/core';
/* import { DataService } from '../data.service'; */

@Component({
	selector: 'app-currentitem',
	templateUrl: './currentitem.component.html',
	styleUrls: [ './currentitem.component.css' ]
})
export class CurrentitemComponent implements OnInit {

  /* ciscore : number; */

  constructor(/*  private data: DataService  */) { }

  /* scoreAdd() {
    this.ciscore++;
    this.scoreUpdate(this.ciscore);
  }

  scoreUpdate(x){
    this.data.changeScore(x);
  } */

  ngOnInit() {
    /* this.data.currentScore.subscribe(score => this.ciscore = score) */
  }

}
 