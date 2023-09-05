import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnDestroy {
  ngOnDestroy() {
    console.log({ WELCOME_ON_DESTROY: 'Welcome lifecycle ended' });
  }
}
