import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateTransactionComponent } from './admin-create-transaction.component';

describe('AdminCreateTransactionComponent', () => {
  let component: AdminCreateTransactionComponent;
  let fixture: ComponentFixture<AdminCreateTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
