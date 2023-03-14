import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chore } from '../models/chore.model';
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

  deleteChore(choreIndex: number) {
    this.apiService.deleteChores().subscribe((response) => {
      console.log(response);
    });
  }
}
