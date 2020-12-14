import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { ScrumList, ScrumBoard, ScrumCard } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DragulaService],
})
export class AppComponent {
  hideScrum = true;
}
