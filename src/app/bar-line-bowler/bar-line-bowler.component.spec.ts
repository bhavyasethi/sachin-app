import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLineBowlerComponent } from './bar-line-bowler.component';

describe('BarLineBowlerComponent', () => {
  let component: BarLineBowlerComponent;
  let fixture: ComponentFixture<BarLineBowlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarLineBowlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarLineBowlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
