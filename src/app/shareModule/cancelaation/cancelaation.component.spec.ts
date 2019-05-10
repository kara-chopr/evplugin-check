import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelaationComponent } from './cancelaation.component';

describe('CancelaationComponent', () => {
  let component: CancelaationComponent;
  let fixture: ComponentFixture<CancelaationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelaationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelaationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
