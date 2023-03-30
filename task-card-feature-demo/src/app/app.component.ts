import { Component } from '@angular/core';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  standalone: true,
  imports: [ChoreListComponent, RouterModule, CommonModule, NavbarComponent],
  selector: 'demo-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-card-feature-demo';
}
