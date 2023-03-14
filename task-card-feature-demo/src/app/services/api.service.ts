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
    return this.http.get<GetChoresResponse>('http://localhost:3333/api');
  }

  deleteChores(choreId: number) {
    return this.http.delete(`http://localhost:3333/api/${choreId}`);
  }
}
