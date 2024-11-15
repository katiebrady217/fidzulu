import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public baseUrl: string = 'http://localhost:4200/';
  param: string = '';
  update: string = '';
  classA: String[] = ["Bike", "Food", "Toys"];
  classB: String[] = ["Books", "DVDs", "Laptops"];

  constructor(private http: HttpClient) {}

  saveSelection(param: string): String {
    console.log("param: " + param)
    if(this.classA.includes(param)){
      this.update = this.baseUrl.concat("classA/")
    }
    if(this.classB.includes(param))
      this.update = this.baseUrl.concat("classB/")
    this.update = this.update.concat(param);
    return this.update;
  }

  getData(location: string): Observable<Object[]> {
    const getUrl = `${this.update}/all/${location}`;
    console.log(getUrl);

    return this.http.get<Object[]>(getUrl).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ProgressEvent) {
      console.error(
        'A client-side or network error occurred; ' +
          `${error.message}, ${error.status}, ${error.statusText}`
      );
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${JSON.stringify(error.error)}`
      );
    }

    return throwError(
      () => 'Unable to contact service; please try again later.'
    );
  }
}
