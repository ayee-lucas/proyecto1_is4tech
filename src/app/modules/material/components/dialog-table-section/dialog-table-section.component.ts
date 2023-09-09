import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-dialog-table-section',
  templateUrl: './dialog-table-section.component.html',
  styleUrls: ['./dialog-table-section.component.scss']
})
export class DialogTableSectionComponent {
  title = '';
  name = '';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      data: { title: this.title, name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;
    });
  }
}
