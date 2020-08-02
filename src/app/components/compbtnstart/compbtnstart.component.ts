import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compbtnstart',
  templateUrl: './compbtnstart.component.html',
  styleUrls: ['./compbtnstart.component.css']
})
export class CompbtnstartComponent implements OnInit {

  @Input()
  images: string[];

  @Input()
  status: number;


  @Output()
  askStart = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
    if (this.images === undefined || this.images === null) {
      this.images = [];
    }

    if (this.status === undefined) {
      this.status = 0;
    }
  }

  startPlay() {
    this.askStart.emit(true);
  }

}
