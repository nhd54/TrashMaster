import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CurrentitemComponent } from '../currentitem/currentitem.component';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: [ './play.component.css' ]
})
export class PlayComponent extends CurrentitemComponent implements OnInit {
	
	ciscore : number;
	lives = 3;
	
	constructor( private data: DataService ) {
		super();
	}

	scoreAdd() {
		this.ciscore++;
		this.scoreUpdate(this.ciscore);
	}

	removeLife() {
		this.lives--;
		if(this.lives == 2) {
			document.querySelector("#heart1").classList.add("empty");
		}
		if(this.lives == 1) {
			document.querySelector("#heart2").classList.add("empty");
		}
		if(this.lives <= 0) {
			document.querySelector("#heart3").classList.add("empty");
			window.location.href = '/endgame/?score=' + this.ciscore;
		}
	}

	scoreUpdate(x){
		this.data.changeScore(x);
	}

	allowDrop(ev) {
		//console.log('test1');
		ev.preventDefault();
	}

	drag(ev) {
		//console.log('test2');

		ev.dataTransfer.setData('text', ev.target.id);
	}

	drop(ev) {
		//console.log('test3');
        ev.preventDefault();
        var data = ev.dataTransfer.getData('text');

        var currentitem = document.querySelector('.dragable-img').getAttribute('data-id');
        //console.log(ev.target.getAttribute('data-id'));

        if (ev.target.getAttribute('data-id') == currentitem) {
			this.scoreAdd();
        } else {
			console.log('point ikke given');
			this.removeLife();
        }
	}

	ngOnInit() {
		this.data.currentScore.subscribe(score => this.ciscore = score)

		let difficulty;
		let url = window.location.href;

		//console.log(document.querySelector('.trashes--item'));

		difficulty = url.replace(/\/+$/, '').split('=').pop();

		let medIcons = document.getElementsByClassName('diffMed');
		let hardIcons = document.getElementsByClassName('diffHard');

		if (difficulty == 'easy') {
			for (var i = 0; i < medIcons.length; i++) {
				medIcons[i].classList.add('displayNone');
				hardIcons[i].classList.add('displayNone');
			}
			console.log('Game is set to ' + difficulty);
		}
		if (difficulty == 'medium') {
			for (var i = 0; i < medIcons.length; i++) {
				hardIcons[i].classList.add('displayNone');
			}
			console.log('Game is set to ' + difficulty);
		}
		if (difficulty == 'hard') {
			console.log('Game is set to ' + difficulty);
		}


		console.log("OMG IT WORKS" + this.testVariable);
	}
}
