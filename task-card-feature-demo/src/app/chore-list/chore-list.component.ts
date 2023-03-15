import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoreCardComponent } from '../chore-card/chore-card.component';
import { StateService } from '../services/state.service';
import { Chore } from '@demo/models';

@Component({
  selector: 'chore-list',
  standalone: true,
  imports: [CommonModule, ChoreCardComponent],
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss'],
})
export class ChoreListComponent {
  chores$ = this.stateService.chores$;

  constructor(private stateService: StateService) {}

  deleteChore(choreId: number) {
    this.stateService.deleteChore(choreId);
  }

  updateChore(chore: Chore) {
    this.stateService.updateChore(chore);
  }
}
