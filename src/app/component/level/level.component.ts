import { Component, OnInit } from '@angular/core';
import {LevelService } from './level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  test;
  constructor(levelservice: LevelService ) {
    this.test = levelservice.gameinit();
   }
  
  ngOnInit() { }

}
 