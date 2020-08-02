import { Component, OnInit, OnChanges, Input, SimpleChanges, HostListener } from '@angular/core';
import { IAcumulate } from 'src/app/interfaces/i-acumulate';
import { Observable } from 'rxjs';
import { SrvtotalsService } from '../../services/srvtotals.service';

@Component({
  selector: 'app-compestatisti',
  templateUrl: './compestatisti.component.html',
  styleUrls: ['./compestatisti.component.css']
})
export class CompestatistiComponent implements OnInit, OnChanges {

  @Input()
  firsts: number;

  @Input()
  seconds: number;

  @Input()
  draws: number;

  @Input()
  rounds: number;

  fy: number;
  fh: number;
  sy: number;
  sh: number;
  dy: number;
  dh: number;

  /**
   * For Subscription
   *
   * @type {Observable<IAcumulate>}
   * @memberof CompestatistiComponent
   */
  acumStatus$: Observable<IAcumulate[]>;
  all: IAcumulate[];

  /**
   * Creates an instance of CompestatistiComponent.
   * @param {SrvtotalsService} serv DI
   * @memberof CompestatistiComponent
   */
  constructor(){}//private serv: SrvtotalsService) { }

  ngOnInit(): void {
    if (this.rounds === undefined) {
      this.rounds = 0;
    }
    if (this.firsts === undefined) {
      this.firsts = 0;
    }
    if (this.seconds === undefined) {
      this.seconds = 0;
    }
    if (this.draws === undefined) {
      this.draws = 0;
    }

    //this.serv.startAcumEventSrc();
    //this.acumStatus$ = this.serv.acumData;

    this.calculate();
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.calculate();
  }

  @HostListener('window:beforeunload', [ '$event' ])
  unloadHandler(event) {
    console.log('unloadHandler');
    //this.serv.onClose();
  }

  ngOnDestroy(): void {
    //this.serv.onClose();
  }

  private calculate(): void {
    if (this.rounds !== 0) {
      this.fh = 200 * (this.firsts / this.rounds);
      this.fy = 200 - this.fh;

      this.sh = 200 * (this.seconds / this.rounds);
      this.sy = 200 - this.sh;

      this.dh = 200 * (this.draws / this.rounds);
      this.dy = 200 - this.dh;
    }
  }

}
