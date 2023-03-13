import { Component, Input } from '@angular/core';
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
  @Input() chore: Chore;

  deleteChoreHandler() {
    console.log('clicked');
  }
}
