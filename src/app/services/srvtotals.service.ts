import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAcumulate } from '../interfaces/i-acumulate';

@Injectable({
  providedIn: 'root'
})
export class SrvtotalsService {

  private urlKafka: string;
  private eventSrc: EventSource;
  private acumDataSrc: BehaviorSubject<Array<IAcumulate>>;

  /**
   * @description Observable to subscribe
   *
   * @memberof SrvtotalsService
   */
  acumData = this.acumDataSrc.asObservable();

  /**
   * Creates an instance of SrvtotalsService.
   * @memberof SrvtotalsService
   */
  constructor(private extPlace: NgZone ) {
    this.urlKafka = 'http://localhost:8080/sndroshambo';
  }

  /**
   * @description
   *
   * @memberof SrvtotalsService
   */
  public startAcumEventSrc(): void {
    let url = [this.urlKafka, 'acumulate'].join('/');

    this.eventSrc = new EventSource(url);
    this.eventSrc.onmessage = (event) => {

      console.log('got event data', event['data']);
      const newArrays = [...this.acumDataSrc.value, JSON.parse(event['data'])];

      this.extPlace.run(() => {
        this.acumDataSrc.next(newArrays);
      });

    };

    this.eventSrc.onerror = (error) => {
      this.extPlace.run( () => {

        // readyState === 0 remote source has closed connection (perhaps normal).
        if (this.eventSrc.readyState === 0) {
          this.eventSrc.close();
          this.acumDataSrc.complete();
        } else {
          this.acumDataSrc.error('EventSource error: ' + error);
        }
      });
    };

  }

  /**
   * @description closing data source
   *
   * @memberof SrvtotalsService
   */
  public onClose() {
    this.eventSrc.close();
    this.acumDataSrc.complete();
  }
}
