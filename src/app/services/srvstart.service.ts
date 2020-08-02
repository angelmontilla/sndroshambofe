import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Clsids } from '../classes/clsids';

@Injectable({
  providedIn: 'root'
})
export class SrvstartService {

  private apiUrl: string = 'http://localhost:8080/sndroshambo/playstart';
  //httpOpt = {headers: new HttpHeaders({'Content-Type': 'application(json'})};

  /**
   * Creates an instance of SrvstartService.
   * @param {HttpClient} client (Dependency Inyection)
   * @memberof SrvstartService
   */
  constructor(private client: HttpClient) { }

  /**
   * @description Observable to users ids
   *
   * @returns {Observable<Clsids[]>}
   * @memberof SrvstartService
   */
  public startGame(): Observable<Clsids> {
    return this.client.get<Clsids>(this.apiUrl);
  }

  /**
   * @description Observable to users ids
   *
   * @param {string} id
   * @returns {Observable<Clsids>}
   * @memberof SrvstartService
   */
  public restartGame(id: string): Observable<Clsids> {
    return this.client.get<Clsids>(this.apiUrl + '/' + id);
  }

}
