import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public baseUrl : string = 'http://localhost:8080/'
  
  constructor(private http: HttpClient) { }

  getData(param:string): Observable<Object[]>{
    const getUrl = `${this.baseUrl}${param}`;

    return this.http.get<Object[]>(getUrl)
                    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ProgressEvent) {
        
        console.error('A client-side or network error occurred; ' +
            `${error.message}, ${error.status}, ${error.statusText}`);
    } else {
        
        console.error(`Backend returned code ${error.status}, ` +
            `body was: ${JSON.stringify(error.error)}`);
    }
    
    return throwError(() => 'Unable to contact service; please try again later.');
  }
}
