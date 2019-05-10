import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationbookingDialogbioxComponent } from './stationbooking-dialogbiox.component';

describe('StationbookingDialogbioxComponent', () => {
  let component: StationbookingDialogbioxComponent;
  let fixture: ComponentFixture<StationbookingDialogbioxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationbookingDialogbioxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationbookingDialogbioxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
