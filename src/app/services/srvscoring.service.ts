import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassResult } from '../classes/class-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvscoringService {
  private apiUrl: string = 'http://localhost:8080/sndroshambo/scores';

  /**
   * Creates an instance of SrvScoring.
   * @param {HttpClient} client
   * @memberof SrvscoringService
   */
  constructor(private client: HttpClient) { }


  /**
   * Scores for player
   *
   * @param {string} id
   * @returns {Observable<ClassResult[]>}
   * @memberof SrvscoringService
   */
  public scoresPlayer(id: string): Observable<ClassResult[]> {
    return this.client.get<ClassResult[]>(this.apiUrl + '/' + id);
  }

}
