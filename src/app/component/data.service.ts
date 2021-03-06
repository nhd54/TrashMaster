import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    
    private defaultScore = new BehaviorSubject(0);
    currentScore = this.defaultScore.asObservable();

    constructor() { }

    changeScore(score: number) {
        this.defaultScore.next(score)
    }
}