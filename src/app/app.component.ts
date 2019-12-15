import { Component } from '@angular/core';
import {LevelService} from './component/level/level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
  providers: [LevelService]

})
export class AppComponent {
  title = 'TrashMaster';
}
