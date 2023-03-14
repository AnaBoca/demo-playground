import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoreCardComponent } from '../chore-card/chore-card.component';
import { StateService } from '../services/state.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'chore-list',
  standalone: true,
  imports: [CommonModule, ChoreCardComponent],
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss'],
})
export class ChoreListComponent {
  chores$ = this.stateService.chores$;

  constructor(private stateService: StateService) {}

  deleteChore(choreIndex: number) {
    this.stateService.deleteChore(choreIndex);
  }
}
