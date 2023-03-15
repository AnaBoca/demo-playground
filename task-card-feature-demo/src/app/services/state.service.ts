import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chore } from '@demo/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private chores$$ = new BehaviorSubject<Chore[]>([]);
  chores$ = this.chores$$.asObservable();

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((response) => {
      this.chores$$.next(response.chores);
    });
  }

  deleteChore(choreId: number) {
    this.apiService.deleteChores(choreId).subscribe(() => {
      const currentState = this.chores$$.value;
      const updatedChores = currentState.filter((chore) => {
        return chore.id !== choreId;
      });
      this.chores$$.next(updatedChores);
    });
  }

  updateChore(choreBody: Chore) {
    this.apiService.updateChores(choreBody).subscribe(() => {
      const currentState = this.chores$$.value;

      const updatedState = currentState.map((chore) => {
        if (chore.id === choreBody.id) {
          return choreBody;
        } else {
          return chore;
        }
      });

      this.chores$$.next(updatedState);
    });
  }

  addChore(chore: Chore) {
    this.apiService.addChore(chore).subscribe((choreId) => {
      const currentState = this.chores$$.value;
      chore.id = +choreId;
      const updatedState = [...currentState, chore];

      this.chores$$.next(updatedState);
    });
  }
}
