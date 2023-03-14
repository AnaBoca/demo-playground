import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Chore } from '../models/chore.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'chore-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './chore-card.component.html',
  styleUrls: ['./chore-card.component.scss'],
})
export class ChoreCardComponent {
  @Input() choreInput: Chore;
  @Input() choreInputIndex: number;

  @Output() choreIndexOutput = new EventEmitter<number>();

  emitChore(choreIndex: number) {
    this.choreIndexOutput.emit(choreIndex);
  }
}
