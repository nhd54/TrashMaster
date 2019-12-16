import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  y = 0;
  constructor() { }

gameinit() {

  this.printConsole()
}


/*   gameDifficulity(x) {
    this.y = x;
      if(x == 0) {
        alert("Game level is set to easy.");
      }
      if(x == 1) {
        alert("Game level is set to medium.");
      }
      if(x == 2) {
        alert("Game level is set to Hard.");
      }
  }
 */
  printConsole() {
    console.log("jeg er variable y");
  }

}
