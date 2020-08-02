import { Component, OnInit, Input } from '@angular/core';
import { ClassRepoMove } from '../../classes/class-repo-move';
import { Enumresult } from '../../enums/enumresult.enum';
import { Enummove } from '../../enums/enummove.enum';

/**
 * @description Component for showing results
 *
 * @export ComptableComponent
 * @class ComptableComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-comptable',
  templateUrl: './comptable.component.html',
  styleUrls: ['./comptable.component.css']
})
export class ComptableComponent implements OnInit {

  @Input()
  results: ClassRepoMove;

  constructor() { }

  ngOnInit(): void {
    if (this.results === undefined) {
      this.results = new ClassRepoMove();
    }
  }

  /**
   * @description get Move as string
   *
   * @param {Enummove} a
   * @returns {string}
   * @memberof ComptableComponent
   */
  getStringMove(a: Enummove): string {
    return Enummove[a];
  }

  /**
   * @description get result as string
   *
   * @param {Enumresult} a
   * @returns {string}
   * @memberof ComptableComponent
   */
  getStringResult(a: Enumresult): string {
    return Enumresult[a];
  }

}
