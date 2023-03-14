import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { Chore } from '../models/chore.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'chore-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  templateUrl: './chore-card.component.html',
  styleUrls: ['./chore-card.component.scss'],
})
export class ChoreCardComponent {
  @Input() chore: Chore;
  @Output() deleteChoreClicked = new EventEmitter<void>();

  isEditable = true;
}
