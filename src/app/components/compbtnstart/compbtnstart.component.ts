import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compbtnstart',
  templateUrl: './compbtnstart.component.html',
  styleUrls: ['./compbtnstart.component.css']
})
export class CompbtnstartComponent implements OnInit {

  @Output()
  askStart = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  startPlay() {
    this.askStart.emit(true);
  }

}
