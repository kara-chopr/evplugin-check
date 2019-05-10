import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAvailbilityComponent } from './booking-availbility.component';

describe('BookingAvailbilityComponent', () => {
  let component: BookingAvailbilityComponent;
  let fixture: ComponentFixture<BookingAvailbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingAvailbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAvailbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
