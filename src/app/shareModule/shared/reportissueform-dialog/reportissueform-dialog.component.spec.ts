import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportissueformDialogComponent } from './reportissueform-dialog.component';

describe('ReportissueformDialogComponent', () => {
  let component: ReportissueformDialogComponent;
  let fixture: ComponentFixture<ReportissueformDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportissueformDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportissueformDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
