import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScanComponent } from './login-scan.component';

describe('LoginScanComponent', () => {
  let component: LoginScanComponent;
  let fixture: ComponentFixture<LoginScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
