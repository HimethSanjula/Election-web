import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScComponent } from './register-sc.component';

describe('RegisterScComponent', () => {
  let component: RegisterScComponent;
  let fixture: ComponentFixture<RegisterScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
