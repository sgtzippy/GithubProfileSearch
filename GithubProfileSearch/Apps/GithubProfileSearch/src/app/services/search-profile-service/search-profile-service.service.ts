import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ProfileSearchResponse } from '../../models/profile-search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchProfileServiceService {
    directApiUrl = 'https://api.github.com/search/users';

    constructor(private http: HttpClient) { }

    searchProfiles(query: string): Observable<ProfileSearchResponse> {
        // if no query, return empty profile response.
        if (!query.trim()) {
            return of(null);
        }
        // Manually throw error if xxxx detected
        if (query.trim() == 'xxxx') {
            return throwError('Can not search for "xxxx".');
        }
        return this.http.get<ProfileSearchResponse>(`${this.directApiUrl}?q=${query.trim()}`).pipe(
            tap(_ => console.log(`found profiles matching "${query}"`)),
            catchError(this.handleError<ProfileSearchResponse>('searchProfiles', null))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // Log message to console. Normally we would log this to some remote logging server. Then rethrow error so UI can respond.
            console.error(error);

            return throwError(error);
        };
    }
}
