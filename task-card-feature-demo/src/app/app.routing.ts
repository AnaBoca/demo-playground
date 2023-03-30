import { Routes } from '@angular/router';
import { ChoreListComponent } from './chore-list/chore-list.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chore-list',
  },
  {
    path: 'chore-list',
    component: ChoreListComponent,
  },
  {
    path: 'profile',
    redirectTo: 'chore-list',
  },
];
