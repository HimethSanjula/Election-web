import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginScComponent } from './admin-login-sc.component';

describe('AdminLoginScComponent', () => {
  let component: AdminLoginScComponent;
  let fixture: ComponentFixture<AdminLoginScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
