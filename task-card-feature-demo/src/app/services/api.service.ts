import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chore } from '../models/chore.model';

interface GetChoresResponse {
  chores: Chore[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<GetChoresResponse>('/assets/chores.json');
  }
}
