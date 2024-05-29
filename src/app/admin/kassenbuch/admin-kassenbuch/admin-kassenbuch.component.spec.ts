import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKassenbuchComponent } from './admin-kassenbuch.component';

describe('AdminKassenbuchComponent', () => {
  let component: AdminKassenbuchComponent;
  let fixture: ComponentFixture<AdminKassenbuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminKassenbuchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminKassenbuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
