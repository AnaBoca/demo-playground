import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoreCardComponent } from '../chore-card/chore-card.component';
import { StateService } from '../services/state.service';
import { Chore } from '@demo/models';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'chore-list',
  standalone: true,
  imports: [
    CommonModule,
    ChoreCardComponent,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss'],
})
export class ChoreListComponent {
  chores$ = this.stateService.chores$;

  constructor(private stateService: StateService, private dialog: MatDialog) {}

  deleteChore(choreId: number) {
    this.stateService.deleteChore(choreId);
  }

  updateChore(chore: Chore) {
    this.stateService.updateChore(chore);
  }

  addChore(chore: Chore) {
    this.stateService.addChore(chore);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.backdropClass = '';
    dialogConfig.width = '540px';
    dialogConfig.height = '';
    dialogConfig.position = {
      top: '50vh',
      left: '50vw',
    };
    dialogConfig.panelClass = 'makeItMiddle';

    const dialogRef = this.dialog.open(AddDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((chore) => {
      this.addChore(chore);
    });
  }
}
