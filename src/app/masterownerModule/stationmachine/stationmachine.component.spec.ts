import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationmachineComponent } from './stationmachine.component';

describe('StationmachineComponent', () => {
  let component: StationmachineComponent;
  let fixture: ComponentFixture<StationmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
