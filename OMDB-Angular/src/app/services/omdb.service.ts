import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class OMDBService {
	url = environment.baseUrl;
	constructor(private http: HttpClient) {}

	getMoviesList() {
		return this.http.get('').pipe(catchError(this.handleError));
	}

	public getSearchMovies(searchValue) {
		return this.http.get(`s=${searchValue}?`).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	}
}
