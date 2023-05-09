import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterScComponent } from './admin-register-sc.component';

describe('AdminRegisterScComponent', () => {
  let component: AdminRegisterScComponent;
  let fixture: ComponentFixture<AdminRegisterScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegisterScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegisterScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
