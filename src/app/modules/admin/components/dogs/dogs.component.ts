// Angular
import { Component, OnInit } from '@angular/core';

// Third Parties
import {
  GoogleLoginProvider,
  SocialAuthService
} from '@abacritt/angularx-social-login';

// Project
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  message?: string;
  status: boolean = false;
  textAreaVal: string = 'Type Something';

  accessToken: string = '';

  constructor(
    private dogService: DogService,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.getDog();
  }

  getAccessToken(): void {
    this.authService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then(accessToken => (this.accessToken = accessToken));
  }

  getDog() {
    this.dogService.getDog().subscribe(res => {
      if (res.status !== 'success') {
        this.status = false;
        return;
      }

      this.message = res.message;
      this.status = true;
    });
  }
}
