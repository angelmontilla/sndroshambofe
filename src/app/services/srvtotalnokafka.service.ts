import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassTotals } from '../classes/class-totals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvtotalnokafkaService {
  private apiUrl: string = 'http://localhost:8080/sndroshambo/acumulates';

  constructor(private client: HttpClient) { }

  public acumulates(): Observable<ClassTotals> {
    return this.client.get<ClassTotals>(this.apiUrl);
  }

}
