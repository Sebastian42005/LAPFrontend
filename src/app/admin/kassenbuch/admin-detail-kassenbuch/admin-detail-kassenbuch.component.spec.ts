import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailKassenbuchComponent } from './admin-detail-kassenbuch.component';

describe('AdminDetailKassenbuchComponent', () => {
  let component: AdminDetailKassenbuchComponent;
  let fixture: ComponentFixture<AdminDetailKassenbuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDetailKassenbuchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDetailKassenbuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
