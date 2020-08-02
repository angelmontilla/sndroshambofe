import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Clsids } from '../classes/clsids';

@Injectable({
  providedIn: 'root'
})
export class SrvstartService {

  private apiUrl: string = 'http://localhost:8080/sndroshambo/playstart';
  httpOpt = {headers: new HttpHeaders({'Content-Type': 'application(json'})};

  /**
   *Creates an instance of SrvstartService.
   * @param {HttpClient} client (Dependency Inyection)
   * @memberof SrvstartService
   */
  constructor(private client: HttpClient) { }

  /**
   * @description Observable to users
   *
   * @returns {Observable<Clsids[]>}
   * @memberof SrvstartService
   */
  // public startGame(): Observable<Clsids[]> {

  //   return this.client.get<Clsids[]>(this.apiUrl)
  //                     .pipe(retry(3), catchError(this.handError));

  // }
  public startGame(): Observable<Clsids> {
    return this.client.get<Clsids>(this.apiUrl);
  }

  /**
   * @description handler of error
   *
   * @param {HttpErrorResponse} anError
   * @returns {Observable<any>}
   * @memberof SrvstartService
   */
  handError(anError: HttpErrorResponse): Observable<any> {
    let errMsg: string = 'None';

    // Yes, there is an error from client
    if (anError.error instanceof ErrorEvent) {
      // tell me
      errMsg = `Error: ${anError.error.message}`;
    } else {
      // No, error comes from server
      errMsg = `Server error: ${anError.status}\nMessage: ${anError.message}`;
    }

    console.log(`Has been an error -> ${errMsg}`);

    return throwError(errMsg);
  }
}
