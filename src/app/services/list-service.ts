import { inject, Injectable } from '@angular/core';
import { Animal } from '../interfaces-model/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/animals';

    getAnimals(): Observable<Animal[]> {
      return this.httpClient.get<Animal[]>(this.baseUrl);
    }

  remove(animals: Animal[],animal: Animal) {
    return animals.filter((a) => a.name !== animal.name);
  }
}
  