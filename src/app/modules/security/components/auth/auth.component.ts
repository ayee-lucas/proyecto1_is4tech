// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Third Parties
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user?: SocialUser;
  loggedIn?: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = user != null;

      localStorage.setItem('Bearer', user?.idToken || '');

      const storedToken = localStorage.getItem('Bearer');
      if (storedToken) {
        this.router.navigate(['/dogs']);
      }
    });
  }

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
