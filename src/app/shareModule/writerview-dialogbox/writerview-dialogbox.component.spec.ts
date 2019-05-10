import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterviewDialogboxComponent } from './writerview-dialogbox.component';

describe('WriterviewDialogboxComponent', () => {
  let component: WriterviewDialogboxComponent;
  let fixture: ComponentFixture<WriterviewDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriterviewDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriterviewDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
