import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-currentitem',
	templateUrl: './currentitem.component.html',
	styleUrls: [ './currentitem.component.css' ]
})
export class CurrentitemComponent implements OnInit {

  constructor() { }

  currentImg;

  randNum;

  randomNum() {
    this.randNum = Math.floor((Math.random() * 3) + 1);

    if(this.randNum == 1) {
      document.querySelector("#currentImg1").classList.add("show");
      document.querySelector("#currentImg2").classList.remove("show");
      document.querySelector("#currentImg3").classList.remove("show");
    }
    if(this.randNum == 2) {
      document.querySelector("#currentImg2").classList.add("show");
      document.querySelector("#currentImg1").classList.remove("show");
      document.querySelector("#currentImg3").classList.remove("show");
    }
    if(this.randNum == 3) {
      document.querySelector("#currentImg3").classList.add("show");
      document.querySelector("#currentImg2").classList.remove("show");
      document.querySelector("#currentImg1").classList.remove("show");
    }
    console.log("the number is " + this.randNum);
  }

  ngOnInit() { 
    this.randomNum();
  }
}