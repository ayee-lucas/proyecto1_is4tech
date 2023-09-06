// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Third Parties
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@abacritt/angularx-social-login';

// Project
import { environment } from 'src/environments/environment.development';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SocialLoginModule,
    GoogleSigninButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
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
