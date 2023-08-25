// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Third Parties
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  GoogleSigninButtonModule
} from '@abacritt/angularx-social-login';

// Project
import { environment } from 'src/environments/environment.development';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, SocialLoginModule, GoogleSigninButtonModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClient)
          }
        ],
        onError: err => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AuthComponent]
})
export class SecurityModule {}
