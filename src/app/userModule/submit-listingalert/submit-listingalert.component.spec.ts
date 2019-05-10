import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitListingalertComponent } from './submit-listingalert.component';

describe('SubmitListingalertComponent', () => {
  let component: SubmitListingalertComponent;
  let fixture: ComponentFixture<SubmitListingalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitListingalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitListingalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
