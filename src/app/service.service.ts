import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public baseUrl: string = 'http://localhost:';
  param: string = '';
  update: string = '';
  completeUrl: string = '';
  classA: String[] = ["Bike", "Food", "Toys"];
  classB: String[] = ["Books", "DVDs", "Laptops"];

  constructor(private http: HttpClient) {}

  saveSelection(param: string): String {
    console.log("param: " + param)
    if(this.classA.includes(param)){
      this.update = this.baseUrl.concat("3021/classA/")
    }
    if(this.classB.includes(param))
      this.update = this.baseUrl.concat("3022/classB/")
    this.update = this.update.concat(param);
    return this.update;
  }

  saveLocation(location: string): String {
    this.completeUrl = `${this.update}/all/${location}`
    //console.log(this.completeUrl);
    return this.completeUrl;
  }

  getData(): Observable<Object[]> {
    console.log("Fetching data set");
    const getUrl = this.completeUrl;
    console.log(getUrl);

    return this.http.get<Object[]>(getUrl).pipe(catchError(this.handleError));
  }

  getTeam(){
    console.log('Fetching teams data')
    const getUrl = `${this.update}/team`;

    console.log(getUrl);

    return this.http.get<Object[]>(getUrl)
                    .pipe(catchError(this.handleError));
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
