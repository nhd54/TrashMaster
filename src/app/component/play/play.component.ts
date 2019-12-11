import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: [ './play.component.css' ]
})
export class PlayComponent implements OnInit {
	constructor() {}

	allowDrop(ev) {
		console.log('test1');
		ev.preventDefault();
	}

	drag(ev) {
		console.log('test2');

		ev.dataTransfer.setData('text', ev.target.id);
	}

	drop(ev) {
		console.log('test3');
		ev.preventDefault();
		var data = ev.dataTransfer.getData('text');

		var currentitem = document.querySelector('.dragable-img').getAttribute('data-id');

		if (ev.target.getAttribute('data-id') == currentitem) {
			console.log('point given');
		} else {
			console.log('point ikke given');
		}
	}

	ngOnInit() {
		let difficulty;
		let url = window.location.href;

		console.log(document.querySelector('.trashes--item'));

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
	}
}
