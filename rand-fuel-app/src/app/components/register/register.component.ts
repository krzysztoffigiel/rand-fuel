import { Component, OnInit } from '@angular/core';
import { faLightbulb, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Font Awesome icons
  faLightbulb = faLightbulb;
  faUserPlus = faUserPlus;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
