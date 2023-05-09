import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScComponent } from './login-sc.component';

describe('LoginScComponent', () => {
  let component: LoginScComponent;
  let fixture: ComponentFixture<LoginScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
