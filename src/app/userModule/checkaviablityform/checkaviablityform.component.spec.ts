import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckaviablityformComponent } from './checkaviablityform.component';

describe('CheckaviablityformComponent', () => {
  let component: CheckaviablityformComponent;
  let fixture: ComponentFixture<CheckaviablityformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckaviablityformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckaviablityformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
