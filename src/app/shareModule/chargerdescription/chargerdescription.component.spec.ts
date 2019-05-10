import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerdescriptionComponent } from './chargerdescription.component';

describe('ChargerdescriptionComponent', () => {
  let component: ChargerdescriptionComponent;
  let fixture: ComponentFixture<ChargerdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
