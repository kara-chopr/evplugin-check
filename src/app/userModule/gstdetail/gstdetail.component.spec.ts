import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstdetailComponent } from './gstdetail.component';

describe('GstdetailComponent', () => {
  let component: GstdetailComponent;
  let fixture: ComponentFixture<GstdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
