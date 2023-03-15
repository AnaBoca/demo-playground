import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';

import { Chore } from '@demo/models';

@Component({
  selector: 'chore-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AddEditFormComponent,
  ],
  templateUrl: './chore-card.component.html',
  styleUrls: ['./chore-card.component.scss'],
})
export class ChoreCardComponent {
  @Input() chore: Chore;
  @Output() deleteChoreClicked = new EventEmitter<void>();
  @Output() updateChoreClicked = new EventEmitter<Chore>();

  isEditing = false;
}
