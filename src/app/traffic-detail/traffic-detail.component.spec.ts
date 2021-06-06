import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficDetailComponent } from './traffic-detail.component';

describe('TrafficDetailComponent', () => {
  let component: TrafficDetailComponent;
  let fixture: ComponentFixture<TrafficDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
