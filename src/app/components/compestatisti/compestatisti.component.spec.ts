import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompestatistiComponent } from './compestatisti.component';

describe('CompestatistiComponent', () => {
  let component: CompestatistiComponent;
  let fixture: ComponentFixture<CompestatistiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompestatistiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompestatistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
