import { Component, OnInit } from '@angular/core';
import { faLightbulb, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  // Font Awesome icons
  faLightbulb = faLightbulb;
  faSignInAlt = faSignInAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
