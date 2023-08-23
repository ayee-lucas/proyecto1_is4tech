// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project
import { AuthComponent } from '../security/components/auth/auth.component';
import { authGuard } from '../security/guards/auth.guard';
import { loginGuard } from '../security/guards/login.guard';
import { SecurityModule } from '../security/security.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dogs', component: DogsComponent, canActivate: [authGuard] },
  { path: 'login', component: AuthComponent, canActivate: [loginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SecurityModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
