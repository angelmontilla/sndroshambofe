import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClassRepoMove } from './classes/class-repo-move';
import { Observable, throwError, Subscription } from 'rxjs';
import { Clsids } from './classes/clsids';
import { SrvstartService } from './services/srvstart.service';
import { SrvscoringService } from './services/srvscoring.service';
import { SrvplayroundService } from './services/srvplayround.service';
import { catchError, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ClassResult } from './classes/class-result';
import { Enumresult } from './enums/enumresult.enum';
import { SrvtotalnokafkaService } from './services/srvtotalnokafka.service';
import { ClassTotals } from './classes/class-totals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  //////////////////////
  // this title is only for jasmine
  title = 'Angel - Second';

  //////////////////////
  // Title header information
  imgTitle: string[] = ['../../../assets/svgs/title.svg',
                        'Roshambo',
                        'You are playing Rock, Paper, Scissors'];

  //////////////////////                        
  // Getting user Id
  idUser: string = '';
  statusStart: number = 0;
  imgStart: string[] = ['../../../assets/svgs/startu.svg',
                        '../../../assets/svgs/start.svg'];
  // Btn play Observable
  startPlayObservable$: Observable<Clsids>;

  ////////////////////
  // Totals show
  totalPlayObservable$: Observable<ClassTotals>;
  subscriptionTotal: Subscription;
  totals: ClassTotals = new ClassTotals();

  //////////////////////
  //Btn restart game
  statusRestart: number = 0;
  imgRestart: string[] = ['../../../assets/svgs/btnrestart.svg',
                          '../../../assets/svgs/btnrestartu.svg'];
  restartPlayObservable$: Observable<Clsids>;


  //////////////////////
  // Score table
  listMovements: ClassResult[] = new Array();
  rondNbr: number = 0;
  scoreObservable$: Observable<ClassResult[]>;
  subcriptScore: Subscription;

  //////////////////////
  // Component Selected
  stateSelection: number = 3;

  //////////////////////
  // Btn play images information
  imgPlay: string[] = ['../../../assets/svgs/btnplayu.svg',
                     '../../../assets/svgs/btnplay.svg'];
  // Btn play status unactivated
  statusPlay: number = 0;  
  PlayRound$: Observable<ClassResult>;

  //////////////////////
  // Component Your choice
  stateSelAfterPlay: number = 3;
  // Other player choice
  stateSelAftPlyScnd: number = 3;
  // Game Result
  stateGameResult: number = 9;

  //////////////////////
  // Final result
  theDtoResult: ClassResult = new ClassResult();
  theFinalResult: string = '';

  ////////////////////////////////////////////
  // STARTING REQUESTED
  /**
   * @description Logic for start button
   *
   * @param {boolean} b
   * @memberof AppComponent
   */
  start(b: boolean) {
    if (this.idUser === undefined || this.idUser === null) {

      this.startPlayObservable$
          .pipe(take(1), catchError(this.handError))
          .subscribe(data => {
            this.idUser = data.id;
            this.statusStart = 0;
            this.statusRestart = 1;
            localStorage.setItem('idUser', this.idUser);
          });

    }
  }

  ////////////////////////////////////////////
  // RESTART REQUEST
  /**
   * @description Restart has been pressed
   *
   * @param {boolean} confirm
   * @memberof AppComponent
   */
  clear(confirm: boolean) {
    if (this.statusRestart === 1 && this.idUser.length === 36) {
      this.restartPlayObservable$ = this.initSrv.restartGame(this.idUser);

      this.restartPlayObservable$
      .pipe(take(1), catchError(this.handError))
      .subscribe(data => {
        this.idUser = data.id;
        localStorage.removeItem('idUser');
        // Restore
        this.stateSelAfterPlay = 3; // No move still
        this.stateSelAftPlyScnd = 3; // Still no move
        this.stateGameResult = 9; // Still no result
        this.statusStart = 1;
        this.statusRestart = 0;
        this.statusPlay = 0;
        this.listMovements = new Array();
        this.rondNbr = 0;
      });
    }
  }
  

  ////////////////////////////////////////////
  // PLAY PRESSED
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

      this.PlayRound$ = this.srvplay.playGame(this.idUser, this.stateSelection, this.stateSelAftPlyScnd);

      this.PlayRound$
      .pipe(take(1), catchError(this.handError))
      .subscribe(data => {
        this.theDtoResult = data;
        this.theFinalResult = this.theDtoResult.result.toString();
        const r = +Enumresult[this.theDtoResult.result];
        this.stateGameResult = 3 * this.stateSelAfterPlay + r;
      });

      this.scoreObservable$ = this.srvscore.scoresPlayer(this.idUser);

      this.scoreObservable$
      .pipe(take(1), catchError(this.handError))
      .subscribe(results => {
        this.listMovements = results;
        this.rondNbr = this.listMovements.length;
      });

      this.totalPlayObservable$ 

      this.totalPlayObservable$
      .pipe(take(1), catchError(this.handError))
      .subscribe(thetotals => {
        this.totals.totalRounds = thetotals.totalRounds;
        this.totals.totalFirstWin = thetotals.totalFirstWin;
        this.totals.totalSecondWin = thetotals.totalSecondWin;
        this.totals.totalDraws = thetotals.totalDraws;
      });
  
      // Restore view status to original
      this.stateSelection = 3;
    }
  }

  ////////////////////////////////////////////
  // COMPONENT SELECTED LOGIG
  /**
   * @description User has selected an option
   *
   * @param {number} event
   * @memberof AppComponent
   */
  moveSelected(event: number) {
    if (this.idUser !== undefined && this.idUser !== null) {
      this.statusPlay = 1; // Play activated
      this.stateSelAfterPlay = 3; // No move still
      this.stateSelAftPlyScnd = 3; // Still no move
      this.stateGameResult = 9; // Still no result
      this.stateSelection = event;
    }
  }


  ////////////////////////////////////////////
  // APP COMPONENT LOGIC
  /**
   * Creates an instance of AppComponent.
   * <p>You have done dependency inyection of services</p>
   * @param {SrvstartService} initSrv (Dependency Injection)
   * @memberof AppComponent
   */
  constructor(private srvplay: SrvplayroundService,
              private srvscore: SrvscoringService,
              private initSrv: SrvstartService,
              private totalsSrv: SrvtotalnokafkaService) {

  }

  /**
   * <b>ngOnInit</b> Initial status
   */
  ngOnInit(): void {
    // Init Game Subscriptions
    this.idUser = localStorage.getItem('idUser');

    this.startPlayObservable$ = this.initSrv.startGame();

    // If start
    if (this.idUser === undefined || this.idUser === null || this.idUser.length !== 36) {
      this.startPlayObservable$
          .pipe(take(1), catchError(this.handError))
          .subscribe(data => {
            this.idUser = data.id;
            this.statusStart = 1;
            this.statusRestart = 0;
            localStorage.setItem('idUser', this.idUser);
          });
    } else {
      this.statusStart = 0;
      this.statusRestart = 1;
    }

    // Scores for this gamer
    this.scoreObservable$ = this.srvscore.scoresPlayer(this.idUser);

    this.scoreObservable$
    .pipe(take(1), catchError(this.handError))
    .subscribe(results => {
      this.listMovements = results;
      this.rondNbr = this.listMovements.length;
    });

    // Totals from users
    this.totalPlayObservable$ = this.totalsSrv.acumulates();

    this.totalPlayObservable$
    .pipe(take(1), catchError(this.handError))
    .subscribe(thetotals => {
      this.totals.totalRounds = thetotals.totalRounds;
      this.totals.totalFirstWin = thetotals.totalFirstWin;
      this.totals.totalSecondWin = thetotals.totalSecondWin;
      this.totals.totalDraws = thetotals.totalDraws;
    });

    // Restart
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
    this.subcriptScore.unsubscribe();
    this.subscriptionTotal.unsubscribe();
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
