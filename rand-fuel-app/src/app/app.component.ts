import { Component } from '@angular/core';
import { faGasPump, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rand-fuel-app';

  // Font Awesome icons
  faGasPump = faGasPump;
  faSignInAlt = faSignInAlt; 
  faUserPlus = faUserPlus;

}
