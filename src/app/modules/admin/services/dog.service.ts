// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Rx
import { catchError, Observable, of, tap } from 'rxjs';

// Project
import { DogResponse } from '../components/dogs/dog-response.type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private httpClient: HttpClient) {}

  getDog(): Observable<DogResponse> {
    const dog = this.httpClient.get<DogResponse>(environment.dogApiUrl).pipe(
      tap(res => {
        if (res.status !== 'success') {
          const data = { status: 'failure' };
          return of(data);
        }
        return res;
      }),
      catchError(err => {
        console.log(err);
        const data = { status: 'failure' };

        return of(data);
      })
    );

    return dog;
  }
}
