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
  classA: String[] = ["bikes", "food", "toys"];
  classB: String[] = ["books", "dvds", "laptops"];

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

  buildUrl(product: String, location: String): String{
    console.log("producr: " + product)
    if(this.classA.includes(product)){
      this.update = this.baseUrl.concat("3021/classA/")
      console.log("class a " + this.update)
    }
    if(this.classB.includes(product))
      this.update = this.baseUrl.concat("3022/classB/")
    this.update = this.update.concat(product + "/all/" + location);
    console.log("url biolt: " + this.update)
    return this.update;
  }

  getData(product: String, location: String): Observable<Object[]> {
    this.buildUrl(product,location);
    console.log("Fetching data set");
    const getUrl = this.update;
    console.log(getUrl);
 
    return this.http.get<Object[]>(getUrl, ).pipe(catchError(this.handleError));
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
