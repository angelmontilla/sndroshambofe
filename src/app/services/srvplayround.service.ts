import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassResult } from '../classes/class-result';
import { Observable } from 'rxjs';
import { Enummove } from '../enums/enummove.enum';

@Injectable({
  providedIn: 'root'
})
export class SrvplayroundService {

  private apiUrl: string = 'http://localhost:8080/sndroshambo/playround';

  /**
   * Creates an instance of SrvplayroundService.
   * @param {HttpClient} client
   * @memberof SrvplayroundService
   */
  constructor(private client: HttpClient) { }

  /**
   * Play a round
   *
   * @param {string} id Id
   * @param {Enummove} p1 1st move
   * @param {Enummove} p2 2nd move
   * @returns {Observable<ClassResult>}
   * @memberof SrvplayroundService
   */
  public playGame(id: string, p1: Enummove, p2: Enummove): Observable<ClassResult> {
    return this.client.get<ClassResult>(this.apiUrl
                  + '/' + id
                  + '/' + Enummove[p1]
                  + '/' + Enummove[p2]);
  }

}
