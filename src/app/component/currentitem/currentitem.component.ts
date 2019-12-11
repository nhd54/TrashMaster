import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-currentitem',
	templateUrl: './currentitem.component.html',
	styleUrls: [ './currentitem.component.css' ]
})
export class CurrentitemComponent implements OnInit {
	score: number;

	constructor(private data: DataService) {}

	scoreAdd() {
		this.data.changeScore(1);
	}

	ngOnInit() {
		this.data.currentScore.subscribe((score) => (this.score = score));
	}
}
