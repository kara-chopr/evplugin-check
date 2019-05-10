import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorderDialogComponent } from './productorder-dialog.component';

describe('ProductorderDialogComponent', () => {
  let component: ProductorderDialogComponent;
  let fixture: ComponentFixture<ProductorderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductorderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
