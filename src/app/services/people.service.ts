import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { People } from '../model/people';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  url = environment.baseURL+'api/people/';

  constructor(private http: HttpClient) {}

  // function to get the data from the API
  searchPeople(term): Observable<People[]> {
    // term is name to search with
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    // it retun an observable
    return this.http.get<People[]>(`${this.url}?search=${term}`);
  }
}
