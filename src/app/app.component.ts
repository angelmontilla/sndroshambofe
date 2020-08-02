import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClassRepoMove } from './classes/class-repo-move';
import { Subject } from 'rxjs';
import { Enummove } from './enums/enummove.enum';
import { Clsids } from './classes/clsids';
import { SrvfirstroshamboServiceService } from './services/srvfirstroshambo-service.service';
import { SrvstartService } from './services/srvstart.service';
import { SrvscoringService } from './services/srvscoring.service';
import { SrvplayroundService } from './services/srvplayround.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // this title is only for jasmine
  title = 'Angel - Second';

  // Title header information
  imgTitle: string[] = ['../../../assets/svgs/title.svg',
                        'Roshambo',
                        'You are playing Rock, Paper, Scissors'];


  // Getting user Id
  idUser: string = '';


  // Score table
  listMovements: ClassRepoMove = new ClassRepoMove();

  // Component Selected
  stateSelection: number = 3;

  // Btn play images information
  imgPlay: string[] = ['../../../assets/svgs/btnplayu.svg',
                     '../../../assets/svgs/btnplay.svg'];

  // Btn play status unactivated
  statusPlay: number = 0;
  rondNbr: number = 0;


  // Component Your choice
  stateSelAfterPlay: number = 3;
  // Other player choice
  stateSelAftPlyScnd: number = 3;
  // Game Result
  stateGameResult: number = 9;


  // Final result
  theFinalResult: string = '';

  /**
   * @description Subject fot get Id if it exists
   *
   * @private
   * @type {Subject<boolean>}
   * @memberof AppComponent
   */
  private kills$: Subject<boolean> = new Subject<boolean>();

  // Btn Start
  start(b: boolean) {
    if (this.idUser === undefined || this.idUser.length === 0) {

      this.initSrv.startGame().subscribe((data) => {
        if (data.id.length > 0) {
          this.idUser = data.id;
        }
      });
    }
  }


  // Btn play methods
  /**
   * @description Has pressed play btn
   *
   * @param {number} newStatus
   * @memberof AppComponent
   */
  changePlayMode(newStatus: number) {
    if (this.statusPlay === 1) {
      this.statusPlay = 0; // Play unactivated

      // Select moves
      this.stateSelAfterPlay = this.stateSelection;
      this.stateSelAftPlyScnd = (Math.floor(Math.random() * 3));
      // lets ask server
      const first: string = Enummove[this.stateSelAfterPlay].toUpperCase();
      const second: string = Enummove[this.stateSelAftPlyScnd].toUpperCase();

      // this.service.askGetPlay(first, second).pipe(takeUntil(this.kills$)).subscribe((res: HttpResponse<any>)  => {
      //   this.theFinalResult = res.body.roundResult;
      //   // Preserve score
      //   this.listMovements.addResult(new ClassMove(this.stateSelAfterPlay, this.stateSelAftPlyScnd, Enumresult[this.theFinalResult]));
      //   this.stateGameResult = 3 * this.stateSelAfterPlay + Enumresult[this.theFinalResult];
      // });


      // Show Round number
      this.rondNbr = this.listMovements.listMoves.length;

      // Restore view status to original
      this.stateSelection = 3;
    }
  }

  // COMPONENT SELECTED LOGIG

  /**
   * @description User has selected an option
   *
   * @param {number} event
   * @memberof AppComponent
   */
  moveSelected(event: number) {
    if (this.idUser !== undefined && this.idUser.length > 0) {
      this.statusPlay = 1; // Play activated
      this.stateSelAfterPlay = 3; // No move still
      this.stateSelAftPlyScnd = 3; // Still no move
      this.stateGameResult = 9; // Still no result
      this.stateSelection = event;
    }
  }

  // RESTART REQUEST
  /**
   * @description Restart has been pressed
   *
   * @param {boolean} confirm
   * @memberof AppComponent
   */
  clear(confirm: boolean) {
    this.listMovements.remove(true);
    this.stateSelAfterPlay = 3; // No move still
    this.stateSelAftPlyScnd = 3; // Still no move
    this.stateGameResult = 9; // Still no result
  }





    // APPLICATION LOGIC

  /**
   * Creates an instance of AppComponent.
   * <p>You have done dependency inyection</p>
   * @param {SrvfirstroshamboService} service
   * @memberof AppComponent
   */
  constructor(private service: SrvfirstroshamboServiceService,
              private srvplay: SrvplayroundService,
              private srvscore: SrvscoringService,
              private initSrv: SrvstartService) {

  }

  /**
   * <b>ngOnInit</b> Initial status
   */
  ngOnInit(): void {
    if (this.idUser === undefined || this.idUser.length != 36) {
      this.idUser = new Clsids().id;
      console.log (this.idUser);
    }


    if (this.stateSelection === undefined) {
      this.stateSelection = 3;
    }
    if (this.stateSelAfterPlay === undefined) {
      this.stateSelAfterPlay = 3;
    }
    if (this.stateSelAftPlyScnd === undefined) {
      this.stateSelAftPlyScnd = 3;
    }
    if (this.stateGameResult === undefined) {
      this.stateGameResult = 6;
    }

  }

  /**
   * @description let's done it well
   *
   * @memberof AppComponent
   */
  ngOnDestroy(): void {


    // get last data if exist
    this.kills$.next(true);
    // removing subscription it's a good practice
    this.kills$.unsubscribe();
  }


}
