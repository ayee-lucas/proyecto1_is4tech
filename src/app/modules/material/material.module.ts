import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DatesSectionComponent } from './components/dates-section/dates-section.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent
  }
];

@NgModule({
  declarations: [WrapperComponent, DatesSectionComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [RouterModule],
  bootstrap: [WrapperComponent]
})
export class MaterialModule {}
