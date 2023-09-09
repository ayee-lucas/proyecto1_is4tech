import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogTableSectionComponent } from '../dialog-table-section/dialog-table-section.component';
import { FormControl } from '@angular/forms';

type DialogData = {
  title: string;
  name: string;
};

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {
  newName = new FormControl(this.data.name);

  constructor(
    public dialogRef: MatDialogRef<DialogTableSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  submit() {
    if (!this.newName.value) {
      return;
    }
    if (this.newName.value.length <= 0) {
      return;
    }

    this.dialogRef.close(this.newName.value);
  }
}
