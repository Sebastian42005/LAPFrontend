import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailtransactionComponent } from './admin-detailtransaction.component';

describe('AdminDetailtransactionComponent', () => {
  let component: AdminDetailtransactionComponent;
  let fixture: ComponentFixture<AdminDetailtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDetailtransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDetailtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
