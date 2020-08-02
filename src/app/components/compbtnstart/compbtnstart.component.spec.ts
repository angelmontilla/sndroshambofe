import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompbtnstartComponent } from './compbtnstart.component';

describe('CompbtnstartComponent', () => {
  let component: CompbtnstartComponent;
  let fixture: ComponentFixture<CompbtnstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompbtnstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompbtnstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
