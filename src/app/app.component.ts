import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventBusService } from './_shared/event-bus.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud test';

  eventBusSub?: Subscription;

  constructor(
    private eventBusService: EventBusService,
    public router:Router,
    
  ) {}

}
