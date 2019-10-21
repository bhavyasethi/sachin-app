import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarChartWicketsComponent } from './polar-chart-wickets.component';

describe('PolarChartWicketsComponent', () => {
  let component: PolarChartWicketsComponent;
  let fixture: ComponentFixture<PolarChartWicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarChartWicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarChartWicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
