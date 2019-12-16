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

	difficulty;

	currentImg;
	randNum;


	randomNum() {
		if(this.difficulty == 'easy') {
			this.randNum = Math.floor((Math.random() * 3) + 1);
		}
		if(this.difficulty == 'medium') {
			this.randNum = Math.floor((Math.random() * 6) + 1);
		}
		if(this.difficulty == 'hard') {
			this.randNum = Math.floor((Math.random() * 9) + 1);
		}
	
		if(this.randNum == 1) {
		  document.querySelector("#currentImg1").classList.add("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 2) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.add("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 3) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.add("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 4) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.add("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 5) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.add("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 6) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.add("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 7) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.add("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 8) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.add("show");
		  document.querySelector("#currentImg9").classList.remove("show");
		}
		if(this.randNum == 9) {
		  document.querySelector("#currentImg1").classList.remove("show");
		  document.querySelector("#currentImg2").classList.remove("show");
		  document.querySelector("#currentImg3").classList.remove("show");
		  document.querySelector("#currentImg4").classList.remove("show");
		  document.querySelector("#currentImg5").classList.remove("show");
		  document.querySelector("#currentImg6").classList.remove("show");
		  document.querySelector("#currentImg7").classList.remove("show");
		  document.querySelector("#currentImg8").classList.remove("show");
		  document.querySelector("#currentImg9").classList.add("show");
		}
	  }

	
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
		ev.preventDefault();
	}

	drag(ev) {
		ev.dataTransfer.setData('text', ev.target.id);
	}

	drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData('text');

        var currentitem = document.querySelector('.dragable-img').getAttribute('data-id');

        if (ev.target.getAttribute('data-id') == currentitem) {
			this.scoreAdd();
			this.randomNum();
			this.changeCurrentItemDataId();
        } else {
			this.removeLife();
			this.randomNum();
			this.changeCurrentItemDataId();
        }
	}

	changeCurrentItemDataId() {
		document.querySelector('app-currentitem').setAttribute('data-id', this.randNum);
	}

	ngOnInit() {
		this.data.currentScore.subscribe(score => this.ciscore = score);

		let url = window.location.href;

		this.difficulty = url.replace(/\/+$/, '').split('=').pop();

		let medIcons = document.getElementsByClassName('diffMed');
		let hardIcons = document.getElementsByClassName('diffHard');

		if (this.difficulty == 'easy') {
			for (var i = 0; i < medIcons.length; i++) {
				medIcons[i].classList.add('displayNone');
				hardIcons[i].classList.add('displayNone');
			}
			document.querySelector('app-trash').classList.add('trashEasy');
			console.log('Game is set to ' + this.difficulty);
		}
		if (this.difficulty == 'medium') {
			for (var i = 0; i < medIcons.length; i++) {
				hardIcons[i].classList.add('displayNone');
			}
			document.querySelector('app-trash').classList.add('trashHard');
			console.log('Game is set to ' + this.difficulty);
		}
		if (this.difficulty == 'hard') {
			document.querySelector('app-trash').classList.add('trashHard');
			console.log('Game is set to ' + this.difficulty);
		}

		this.randomNum();
		this.changeCurrentItemDataId();
	}
}
