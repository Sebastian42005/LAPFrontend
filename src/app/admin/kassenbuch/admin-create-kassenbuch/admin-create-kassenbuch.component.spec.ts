import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateKassenbuchComponent } from './admin-create-kassenbuch.component';

describe('AdminCreateKassenbuchComponent', () => {
  let component: AdminCreateKassenbuchComponent;
  let fixture: ComponentFixture<AdminCreateKassenbuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateKassenbuchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreateKassenbuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
