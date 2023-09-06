// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project
import { authGuard, loginGuard } from '../security/guards/auth.guard';
import { DogsComponent } from './components/dogs/dogs.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dogs', component: DogsComponent, canActivate: [authGuard] },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/modules/security/security.module').then(
        m => m.SecurityModule
      ),
    canActivate: [loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
