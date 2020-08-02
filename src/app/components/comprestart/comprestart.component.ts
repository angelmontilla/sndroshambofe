import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comprestart',
  templateUrl: './comprestart.component.html',
  styleUrls: ['./comprestart.component.css']
})
export class ComprestartComponent implements OnInit {
  @Input()
  images: string[];

  @Input()
  status: number;

  @Output()
  askRestart = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if (this.images === undefined || this.images === null) {
      this.images = [];
    }

    if (this.status === undefined) {
      this.status = 0;
    }    
  }

  restartPlayed() {
    this.askRestart.emit(true);
  }

}
