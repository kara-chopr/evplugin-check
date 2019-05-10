import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfundpopupComponent } from './addfundpopup.component';

describe('AddfundpopupComponent', () => {
  let component: AddfundpopupComponent;
  let fixture: ComponentFixture<AddfundpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfundpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfundpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
