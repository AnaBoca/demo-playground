import { Component } from '@angular/core';

import { ChoreListComponent } from './chore-list/chore-list.component';

@Component({
  standalone: true,
  imports: [ChoreListComponent],
  selector: 'demo-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-card-feature-demo';
}
