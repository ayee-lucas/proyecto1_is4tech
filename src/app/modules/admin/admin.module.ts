// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

// Project
import { AppRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminComponent, DogsComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AdminComponent],
})
export class AppModule {}
