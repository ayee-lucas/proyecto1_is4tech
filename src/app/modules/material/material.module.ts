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
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablePeopleComponent } from './components/table-people/table-people.component';
import { MatSortModule } from '@angular/material/sort';
import { StepperSectionComponent } from './components/stepper-section/stepper-section.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'date-pickers',
        component: DatesSectionComponent,
        data: { animation: 'DatePickers' }
      },
      {
        path: 'dialog-table',
        component: DialogTableSectionComponent,
        data: { animation: 'Dialog' }
      },
      {
        path: 'stepper',
        component: StepperSectionComponent,
        data: { animation: 'Stepper' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    WrapperComponent,
    DatesSectionComponent,
    DialogTableSectionComponent,
    DialogFormComponent,
    TablePeopleComponent,
    StepperSectionComponent
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
    MatTabsModule,
    MatButtonModule,
    SharedModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatSlideToggleModule
  ],
  exports: [RouterModule],
  bootstrap: [WrapperComponent]
})
export class MaterialModule {}
