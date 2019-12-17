import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-time',
	templateUrl: './time.component.html',
	styleUrls: [ './time.component.css' ]
})
export class TimeComponent implements OnInit {
	seconds: number = 0;
	secondsshwon;
	minutes: number = 3;

	score : number;

	interval;

	constructor( private data: DataService ) {}

	startTimer() {}

	ngOnInit() {
		this.data.currentScore.subscribe(score => this.score = score);
		this.interval = setInterval(() => {
			if (this.seconds == 0 && this.minutes == 0) {
				window.location.href = '/endgame/?score=' + this.score;
			} else if (this.seconds == 0) {
				this.minutes = this.minutes - 1;
				this.seconds = 59;
				this.secondsshwon = this.seconds;
			} else {
				this.seconds = this.seconds - 1;
				this.secondsshwon = this.seconds;
				if (this.seconds < 10) {
					this.secondsshwon = '0' + this.seconds;
				}
			}
		}, 1000);
	}
}

