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
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnChangesComponent } from './components/on-changes/on-changes.component';

@NgModule({
  declarations: [
    AdminComponent,
    DogsComponent,
    WelcomeComponent,
    FormComponent,
    OnChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    SharedModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule {}
