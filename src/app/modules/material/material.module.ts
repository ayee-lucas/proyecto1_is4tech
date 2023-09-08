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
import { YearMonthPickerComponent } from './components/year-month-picker/year-month-picker.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogTableSectionComponent } from './components/dialog-table-section/dialog-table-section.component';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'date-pickers',
        component: DatesSectionComponent
      },
      {
        path: 'dialog-table',
        component: DialogTableSectionComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    WrapperComponent,
    DatesSectionComponent,
    DialogTableSectionComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatInputModule,
    YearMonthPickerComponent,
    MatIconModule,
    MatTabsModule
  ],
  exports: [RouterModule],
  bootstrap: [WrapperComponent]
})
export class MaterialModule {}
