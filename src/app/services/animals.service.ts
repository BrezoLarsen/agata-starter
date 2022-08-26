import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { SETTINGS } from '../config/settings';
import { IAnimal } from '../interfaces/animal.model';
import { IFilter } from '../interfaces/filters.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  getAnimalsByFilter(filters: IFilter): Observable<IAnimal[]> {
    filters.tenantId = SETTINGS.TENANTID;
    return this.httpClient
      .post<IAnimal[]>(
        SETTINGS.API_URL + 'public/getAnimalsByFilters.php',
        filters
      )
      .pipe(
        map((data: IAnimal[]) => {
          return data;
        })
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
