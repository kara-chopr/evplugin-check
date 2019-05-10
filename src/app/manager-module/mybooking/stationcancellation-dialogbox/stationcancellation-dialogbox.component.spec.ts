import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationcancellationDialogboxComponent } from './stationcancellation-dialogbox.component';

describe('StationcancellationDialogboxComponent', () => {
  let component: StationcancellationDialogboxComponent;
  let fixture: ComponentFixture<StationcancellationDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationcancellationDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationcancellationDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
