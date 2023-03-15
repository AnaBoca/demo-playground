import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Chore } from '@demo/models';

@Component({
  selector: 'add-dialog',
  standalone: true,
  imports: [CommonModule, AddEditFormComponent],
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent {
  @Output() addChoreClicked = new EventEmitter<Chore>();

  constructor(private dialogRef: MatDialogRef<AddDialogComponent>) {}

  addChore(chore: Chore) {
    this.dialogRef.close(chore);
  }
}
